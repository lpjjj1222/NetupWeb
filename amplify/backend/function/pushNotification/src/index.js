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

const ROOMTABLE = 'Room-wr36czp5ozcxvlnohn7rrqgrgq-prod';
const USERDEVICETABLE = 'UserDevices-wr36czp5ozcxvlnohn7rrqgrgq-prod';
const ACCOUNTTABLE = 'Account-wr36czp5ozcxvlnohn7rrqgrgq-prod';

const pushNotificationSandbox = async (
  deviceToken,
  room_id,
  room,
  message_owner,
  message,
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
          Body: `${message_owner}: ${message}`,
          Title: room,
          Sound: 'default',
          Category: 'CHAT',
          Data: {
            type: 'chat',
            room_id,
            message_owner,
            message,
            url: `netup://global-link/chat/${room_id}`,
          },
        },
      },
    },
  };

  return pinpoint.sendMessages(params).promise();
};

const pushNotification = async (
    deviceToken,
    room_id,
    room,
    message_owner,
    message,
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
            Body: `${message_owner}: ${message}`,
            Title: room,
            Sound: 'default',
            Category: 'CHAT',
            Data: {
              type: 'chat',
              room_id,
              message_owner,
              message,
              url: `netup://global-link/chat/${room_id}`,
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
  const message = event_body["text"];
  const message_owner = event_body["owner"];
  const message_room = event_body["room"];

  console.log(message, message_owner, message_room);

  let dynamoDBParams = {
    TableName: ROOMTABLE,
    Key: {
      id: message_room,
    },
  };

  console.log(dynamoDBParams);

  const room_info = await dynamoDB.get(dynamoDBParams).promise();

  console.log(room_info);

  const room_name = room_info.Item.name;
  const room_users = room_info.Item.users;
  const unique_room_users = [...new Set(room_users)];

  console.log(room_name, room_users, unique_room_users);

  const requestItems = {
    [USERDEVICETABLE]: {
      Keys: unique_room_users.map(user => ({user})),
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

  const filtered_device_tokens = user_devices_tokens.filter(entry => entry.user !== message_owner);
  console.log(filtered_device_tokens);

  const deviceTokens = filtered_device_tokens.map(user => user.deviceToken);
  console.log(deviceTokens);

  dynamoDBParams = {
    TableName: ACCOUNTTABLE,
    Key: {
      id: message_owner,
    },
  };
  const owner_info = await dynamoDB.get(dynamoDBParams).promise();
  console.log(owner_info);
  const owner_name = owner_info.Item.userName;
  console.log(owner_name);

  const push_notification_promises = deviceTokens.map((deviceToken, index) =>
    pushNotification(deviceToken, message_room, room_name, owner_name, message),
  );
  await Promise.all(push_notification_promises);
  const push_notification_promises_sandbox = deviceTokens.map((deviceToken, index) =>
    pushNotificationSandbox(deviceToken, message_room, room_name, owner_name, message),
  );
  await Promise.all(push_notification_promises_sandbox);
  return {
    statusCode: 200,
    body: JSON.stringify('success'),
  };
};