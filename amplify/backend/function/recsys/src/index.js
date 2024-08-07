/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const AWS = require('aws-sdk');
AWS.config.update({region: process.env.REGION});

const dynamoDB = new AWS.DynamoDB.DocumentClient();
const sagemaker = new AWS.SageMakerRuntime();

const ENDPOINTTABLE = 'Endpoint';
const ACCOUNTTABLE = 'Account-wr36czp5ozcxvlnohn7rrqgrgq-prod';

const get_endpoint = async () => {
  const params = {
    TableName: ENDPOINTTABLE,
    Key: {
      id: 'recsys-endpoint',
    },
  };
  return dynamoDB.get(params).promise();
};

const get_accounts_by_100 = async startKey => {
  const params = {
    TableName: ACCOUNTTABLE,
    ProjectionExpression: 'id',
    Limit: 100,
  };

  console.log('StartKey:', startKey);
  let startId = {id: startKey};
  if (startKey) {
    params.ExclusiveStartKey = startId;
  }

  try {
    const data = await dynamoDB.scan(params).promise();
    console.log('Fetched IDs:', data.Items);

    let ids = data.Items.map(item => item.id);
    return {
      items: ids,
      nextKey: data.LastEvaluatedKey,
    };
  } catch (error) {
    console.error('Error scanning table:', error);
    return {error};
  }
};

const invoke_sagemaker_endpoint = async (endpoint, input) => {
  const params = {
    EndpointName: endpoint,
    ContentType: 'text/csv',
    Body: input+`\n`,
  };
  console.log('PARAMS:', params);
  return sagemaker.invokeEndpoint(params).promise();
};

exports.handler = async event => {
  console.log("zongyuansagemaker");
  console.log(`EVENT: ${JSON.stringify(event)}`);
  const endpoint = await get_endpoint();
  console.log(`ENDPOINT: ${JSON.stringify(endpoint)}`);
  let nextKey = JSON.parse(event.body)?.nextKey;
  console.log('EVENT BODY', JSON.parse(event.body));
  console.log(`NEXTKEY: ${nextKey}`);
  console.log("------------endpoint", endpoint.Item.endpoint);
  console.log("------------event.body.requesterId", JSON.parse(event.body).requesterId);
  const sagemaker_preds = await invoke_sagemaker_endpoint(endpoint.Item.endpoint, JSON.parse(event.body).requesterId);
  console.log(`SAGEMAKER PREDICTIONS: ${JSON.stringify(sagemaker_preds)}`);
  

  const response_body = sagemaker_preds.Body;
  console.log(`SAGEMAKER PREDICTIONS BODY: ${response_body}`);
  

  const preds = {Prediction: response_body.toString()};

  return {
    statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  },
    body: JSON.stringify(preds),
  };
};
