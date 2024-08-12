import { getAccount } from '../graphql/queries'; 
import { ApiResponse } from '../domainModels/ApiResponse'; 
import { followsByFrom, followsByTo, getFollows } from '../graphql/queries';


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


const getFollowsFromUserID = async (client, userID) => {
  try {
      let followsByFromResp = await client.graphql({
          query: followsByFrom,
          variables: { from: userID }
      });
      let followsItems = followsByFromResp?.data?.followsByFrom?.items;
      if (followsItems !== null) {
          return followsItems
      }
  } catch (error) {
      console.log(`FollowerController: getFollowsFromUserID(${userID}) - Failed with error: ${error}`)
      return null
  }
}

const getFollowsToUserID = async (client, userID) => {
  try {
      let followsByToResp = await client.graphql({
          query: followsByTo,
          variables: { to: userID }
      });
      let followsItems = followsByToResp?.data?.followsByTo?.items;
      if (followsItems !== null) {
          return followsItems
      }
  } catch (error) {
      console.log(`FollowerController: getFollowsToUserID(${userID}) - Failed with error: ${error}`)
      return null
  }
}


export const GetUserFollowings = async (client, userID) => {
  const followsItems = await getFollowsFromUserID(client, userID)
  if (followsItems !== undefined && followsItems !== null) {
      let followings: string[] = []
      followsItems.forEach((follow) => {
          followings.push(follow.to)
      })
      return new ApiResponse(
          true,
          `FollowerController: GetFollowingsByUserID(${userID}) - success`,
          followings
      );
  }
  return new ApiResponse(
      false,
      `FollowerController: GetFollowingsByUserID(${userID}) - Failed with error`,
      null
  );
}

export const GetUserFollowers = async (client, userID) => {
  const followsItems = await getFollowsToUserID(client, userID)

  if (followsItems !== undefined && followsItems !== null) {
      let followers: string[] = []
      followsItems.forEach((follow) => {
          followers.push(follow?.from)
      })

      return new ApiResponse(
          true,
          `FollowerController: GetFollowersByUserID(${userID}) - success`,
          followers
      );
  }
  return new ApiResponse(
      false,
      `FollowerController: GetFollowersByUserID(${userID}) - Failed with error`,
      null
  );
}
