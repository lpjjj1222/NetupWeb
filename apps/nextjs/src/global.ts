import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api'
import awsconfig from '../../../src/aws-exports';

const client = generateClient();
Amplify.configure(awsconfig);

const GLOBAL = {
  client: client,
};
console.log('global done',GLOBAL.client)

export default GLOBAL;
