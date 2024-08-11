import { getAccount } from '../graphql/queries';
import { ApiResponse } from '../domainModels/ApiResponse';

export const getAccountById = async (client, id) => {
  console.log('userController - getAccountById: id: ', id);
  try {
    const queryResult = await client.graphql({
      query: getAccount,
      variables: { id },
    });

    const getAccountResponse = queryResult?.data?.getAccount;

    if (getAccountResponse !== null) {
      return new ApiResponse(true, `Success get account by id ${id}`, getAccountResponse);
    }
    return new ApiResponse(false, `Account doesn't exist with id: ${id}`, null);
  } catch (error) {
    return new ApiResponse(
      false,
      `Failed to get account by id with error: ${error}${JSON.stringify(error)}`,
      null,
    );
  }
};
