

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const AWS = require('aws-sdk');
const secret_name = "PlacesAPIKey";
const secretsManager = new AWS.SecretsManager();

exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);

    const data = await secretsManager.getSecretValue({
        SecretId: secret_name
    }).promise();

    // Check if the secret is a string or a binary and parse it
    let secret;
    if ('SecretString' in data) {
        secret = data.SecretString;
    } else {
        let buff = Buffer.from(data.SecretBinary, 'base64');
        secret = buff.toString('ascii');
    }

    secret = JSON.parse(secret);
    console.log("Secret:", secret["Places API key"]);
    
    return {
        statusCode: 200,
        body: JSON.stringify({"apikey": secret["Places API key"]}),
    };
};
