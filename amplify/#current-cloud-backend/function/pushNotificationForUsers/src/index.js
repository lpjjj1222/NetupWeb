/* Amplify Params - DO NOT EDIT
	ANALYTICS_NETUPPINPOINT_ID
	ANALYTICS_NETUPPINPOINT_REGION
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const AWS = require('aws-sdk');
AWS.config.update({region: process.env.REGION});

const pinpoint = new AWS.Pinpoint();
const dynamoDB = new AWS.DynamoDB.DocumentClient();

const USERDEVICETABLE = 'UserDevices-wr36czp5ozcxvlnohn7rrqgrgq-prod';

const pushNotificationSandbox = async (
  deviceToken,
  message,
  title,
  url,
) => {
  console.log('ApplicationId:', process.env.ANALYTICS_NETUPPINPOINT_ID);
  const params = {
    ApplicationId: process.env.ANALYTICS_NETUPPINPOINT_ID,
    MessageRequest: {
      Addresses: {
        [deviceToken]: {
          ChannelType: 'APNS_SANDBOX',
        },
      },
      MessageConfiguration: {
        APNSMessage: {
          Action: 'OPEN_APP',
          Body: `${message}`,
          Title: `${title}`,
          Sound: 'default',
          Category: 'normal',
          Data: {
            type: 'normal',
            message,
            url: `${url}`,
          },
        },
      },
    },
  };

  return pinpoint.sendMessages(params).promise();
};

const pushNotification = async (
    deviceToken,
    message,
    title,
    url,
  ) => {
    console.log('ApplicationId:', process.env.ANALYTICS_NETUPPINPOINT_ID);
    const params = {
      ApplicationId: process.env.ANALYTICS_NETUPPINPOINT_ID,
      MessageRequest: {
        Addresses: {
          [deviceToken]: {
            ChannelType: 'APNS',
          },
        },
        MessageConfiguration: {
          APNSMessage: {
            Action: 'OPEN_APP',
            Body: `${message}`,
            Title: `${title}`,
            Sound: 'default',
            Category: 'normal',
            Data: {
              type: 'normal',
              message,
              url: `${url}`,
            },
          },
        },
      },
    };
  
    return pinpoint.sendMessages(params).promise();
};

exports.handler = async event => {
  console.log(event.body);
  const event_body = JSON.parse(event.body);
  const targets = event_body.targets;
  const message = event_body.message;
  const title = event_body.title;
  const url = event_body.url;


  console.log(targets, message, title, url);

  const requestItems = {
    [USERDEVICETABLE]: {
      Keys: targets.map(user => ({user})),
      ProjectionExpression: '#user, deviceToken',
      ExpressionAttributeNames: {
        '#user': 'user',
      },
    },
  };
  dynamoDBParams = {
    RequestItems: requestItems,
  };
  const user_devices_tokens_info = await dynamoDB
    .batchGet(dynamoDBParams)
    .promise();

  console.log(user_devices_tokens_info);

  const user_devices_tokens =
    user_devices_tokens_info.Responses[USERDEVICETABLE];
  console.log(user_devices_tokens);

  const device_tokens = user_devices_tokens.map(
    user_device_token => user_device_token.deviceToken,
  );

  const push_notification_promises = device_tokens.map((deviceToken, index) =>
    pushNotification(deviceToken, message, title, url),
  );
  await Promise.all(push_notification_promises);
  const push_notification_promises_sandbox = device_tokens.map((deviceToken, index) =>
    pushNotificationSandbox(deviceToken, message, title, url),
  );
  await Promise.all(push_notification_promises_sandbox);
  return {
    statusCode: 200,
    body: JSON.stringify('success'),
  };
};
