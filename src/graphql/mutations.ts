/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const incrementUnreadCount = /* GraphQL */ `mutation IncrementUnreadCount($userId: ID!, $roomId: ID!) {
  incrementUnreadCount(userId: $userId, roomId: $roomId) {
    user
    room
    groupChat
    unreadCount
    lastAckMessageId
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.IncrementUnreadCountMutationVariables,
  APITypes.IncrementUnreadCountMutation
>;
export const clearUnreadCount = /* GraphQL */ `mutation ClearUnreadCount($userId: ID!, $roomId: ID!) {
  clearUnreadCount(userId: $userId, roomId: $roomId) {
    user
    room
    groupChat
    unreadCount
    lastAckMessageId
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.ClearUnreadCountMutationVariables,
  APITypes.ClearUnreadCountMutation
>;
export const createSupportedDomains = /* GraphQL */ `mutation CreateSupportedDomains(
  $input: CreateSupportedDomainsInput!
  $condition: ModelSupportedDomainsConditionInput
) {
  createSupportedDomains(input: $input, condition: $condition) {
    supportedDomains
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateSupportedDomainsMutationVariables,
  APITypes.CreateSupportedDomainsMutation
>;
export const updateSupportedDomains = /* GraphQL */ `mutation UpdateSupportedDomains(
  $input: UpdateSupportedDomainsInput!
  $condition: ModelSupportedDomainsConditionInput
) {
  updateSupportedDomains(input: $input, condition: $condition) {
    supportedDomains
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateSupportedDomainsMutationVariables,
  APITypes.UpdateSupportedDomainsMutation
>;
export const deleteSupportedDomains = /* GraphQL */ `mutation DeleteSupportedDomains(
  $input: DeleteSupportedDomainsInput!
  $condition: ModelSupportedDomainsConditionInput
) {
  deleteSupportedDomains(input: $input, condition: $condition) {
    supportedDomains
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteSupportedDomainsMutationVariables,
  APITypes.DeleteSupportedDomainsMutation
>;
export const createAccount = /* GraphQL */ `mutation CreateAccount(
  $input: CreateAccountInput!
  $condition: ModelAccountConditionInput
) {
  createAccount(input: $input, condition: $condition) {
    id
    email
    userName
    userProfile {
      title
      industry
      language
      age
      gender
      intention
      interestedIndustries
      selfIntroduction
      expertise
      photoIndex
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateAccountMutationVariables,
  APITypes.CreateAccountMutation
>;
export const updateAccount = /* GraphQL */ `mutation UpdateAccount(
  $input: UpdateAccountInput!
  $condition: ModelAccountConditionInput
) {
  updateAccount(input: $input, condition: $condition) {
    id
    email
    userName
    userProfile {
      title
      industry
      language
      age
      gender
      intention
      interestedIndustries
      selfIntroduction
      expertise
      photoIndex
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateAccountMutationVariables,
  APITypes.UpdateAccountMutation
>;
export const deleteAccount = /* GraphQL */ `mutation DeleteAccount(
  $input: DeleteAccountInput!
  $condition: ModelAccountConditionInput
) {
  deleteAccount(input: $input, condition: $condition) {
    id
    email
    userName
    userProfile {
      title
      industry
      language
      age
      gender
      intention
      interestedIndustries
      selfIntroduction
      expertise
      photoIndex
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteAccountMutationVariables,
  APITypes.DeleteAccountMutation
>;
export const createFollows = /* GraphQL */ `mutation CreateFollows(
  $input: CreateFollowsInput!
  $condition: ModelFollowsConditionInput
) {
  createFollows(input: $input, condition: $condition) {
    from
    to
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateFollowsMutationVariables,
  APITypes.CreateFollowsMutation
>;
export const updateFollows = /* GraphQL */ `mutation UpdateFollows(
  $input: UpdateFollowsInput!
  $condition: ModelFollowsConditionInput
) {
  updateFollows(input: $input, condition: $condition) {
    from
    to
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateFollowsMutationVariables,
  APITypes.UpdateFollowsMutation
>;
export const deleteFollows = /* GraphQL */ `mutation DeleteFollows(
  $input: DeleteFollowsInput!
  $condition: ModelFollowsConditionInput
) {
  deleteFollows(input: $input, condition: $condition) {
    from
    to
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteFollowsMutationVariables,
  APITypes.DeleteFollowsMutation
>;
export const createSwipeHistory = /* GraphQL */ `mutation CreateSwipeHistory(
  $input: CreateSwipeHistoryInput!
  $condition: ModelSwipeHistoryConditionInput
) {
  createSwipeHistory(input: $input, condition: $condition) {
    from
    to
    swipeType
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateSwipeHistoryMutationVariables,
  APITypes.CreateSwipeHistoryMutation
>;
export const updateSwipeHistory = /* GraphQL */ `mutation UpdateSwipeHistory(
  $input: UpdateSwipeHistoryInput!
  $condition: ModelSwipeHistoryConditionInput
) {
  updateSwipeHistory(input: $input, condition: $condition) {
    from
    to
    swipeType
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateSwipeHistoryMutationVariables,
  APITypes.UpdateSwipeHistoryMutation
>;
export const deleteSwipeHistory = /* GraphQL */ `mutation DeleteSwipeHistory(
  $input: DeleteSwipeHistoryInput!
  $condition: ModelSwipeHistoryConditionInput
) {
  deleteSwipeHistory(input: $input, condition: $condition) {
    from
    to
    swipeType
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteSwipeHistoryMutationVariables,
  APITypes.DeleteSwipeHistoryMutation
>;
export const createEvent = /* GraphQL */ `mutation CreateEvent(
  $input: CreateEventInput!
  $condition: ModelEventConditionInput
) {
  createEvent(input: $input, condition: $condition) {
    id
    eventName
    hostId
    industries
    eventType
    location {
      address
      city
      state
      country
      zipCode
      __typename
    }
    eventLink
    startTime
    capacity
    genders
    minAge
    maxAge
    language
    description
    privacy
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEventMutationVariables,
  APITypes.CreateEventMutation
>;
export const updateEvent = /* GraphQL */ `mutation UpdateEvent(
  $input: UpdateEventInput!
  $condition: ModelEventConditionInput
) {
  updateEvent(input: $input, condition: $condition) {
    id
    eventName
    hostId
    industries
    eventType
    location {
      address
      city
      state
      country
      zipCode
      __typename
    }
    eventLink
    startTime
    capacity
    genders
    minAge
    maxAge
    language
    description
    privacy
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEventMutationVariables,
  APITypes.UpdateEventMutation
>;
export const deleteEvent = /* GraphQL */ `mutation DeleteEvent(
  $input: DeleteEventInput!
  $condition: ModelEventConditionInput
) {
  deleteEvent(input: $input, condition: $condition) {
    id
    eventName
    hostId
    industries
    eventType
    location {
      address
      city
      state
      country
      zipCode
      __typename
    }
    eventLink
    startTime
    capacity
    genders
    minAge
    maxAge
    language
    description
    privacy
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEventMutationVariables,
  APITypes.DeleteEventMutation
>;
export const createUsersToEvents = /* GraphQL */ `mutation CreateUsersToEvents(
  $input: CreateUsersToEventsInput!
  $condition: ModelUsersToEventsConditionInput
) {
  createUsersToEvents(input: $input, condition: $condition) {
    user
    event
    status
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUsersToEventsMutationVariables,
  APITypes.CreateUsersToEventsMutation
>;
export const updateUsersToEvents = /* GraphQL */ `mutation UpdateUsersToEvents(
  $input: UpdateUsersToEventsInput!
  $condition: ModelUsersToEventsConditionInput
) {
  updateUsersToEvents(input: $input, condition: $condition) {
    user
    event
    status
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUsersToEventsMutationVariables,
  APITypes.UpdateUsersToEventsMutation
>;
export const deleteUsersToEvents = /* GraphQL */ `mutation DeleteUsersToEvents(
  $input: DeleteUsersToEventsInput!
  $condition: ModelUsersToEventsConditionInput
) {
  deleteUsersToEvents(input: $input, condition: $condition) {
    user
    event
    status
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUsersToEventsMutationVariables,
  APITypes.DeleteUsersToEventsMutation
>;
export const createReportUsers = /* GraphQL */ `mutation CreateReportUsers(
  $input: CreateReportUsersInput!
  $condition: ModelReportUsersConditionInput
) {
  createReportUsers(input: $input, condition: $condition) {
    reportedUser
    reporter
    reason
    comment
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateReportUsersMutationVariables,
  APITypes.CreateReportUsersMutation
>;
export const updateReportUsers = /* GraphQL */ `mutation UpdateReportUsers(
  $input: UpdateReportUsersInput!
  $condition: ModelReportUsersConditionInput
) {
  updateReportUsers(input: $input, condition: $condition) {
    reportedUser
    reporter
    reason
    comment
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateReportUsersMutationVariables,
  APITypes.UpdateReportUsersMutation
>;
export const deleteReportUsers = /* GraphQL */ `mutation DeleteReportUsers(
  $input: DeleteReportUsersInput!
  $condition: ModelReportUsersConditionInput
) {
  deleteReportUsers(input: $input, condition: $condition) {
    reportedUser
    reporter
    reason
    comment
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteReportUsersMutationVariables,
  APITypes.DeleteReportUsersMutation
>;
export const createReportEvents = /* GraphQL */ `mutation CreateReportEvents(
  $input: CreateReportEventsInput!
  $condition: ModelReportEventsConditionInput
) {
  createReportEvents(input: $input, condition: $condition) {
    reportedEvent
    reporter
    reason
    comment
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateReportEventsMutationVariables,
  APITypes.CreateReportEventsMutation
>;
export const updateReportEvents = /* GraphQL */ `mutation UpdateReportEvents(
  $input: UpdateReportEventsInput!
  $condition: ModelReportEventsConditionInput
) {
  updateReportEvents(input: $input, condition: $condition) {
    reportedEvent
    reporter
    reason
    comment
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateReportEventsMutationVariables,
  APITypes.UpdateReportEventsMutation
>;
export const deleteReportEvents = /* GraphQL */ `mutation DeleteReportEvents(
  $input: DeleteReportEventsInput!
  $condition: ModelReportEventsConditionInput
) {
  deleteReportEvents(input: $input, condition: $condition) {
    reportedEvent
    reporter
    reason
    comment
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteReportEventsMutationVariables,
  APITypes.DeleteReportEventsMutation
>;
export const createMessage = /* GraphQL */ `mutation CreateMessage(
  $input: CreateMessageInput!
  $condition: ModelMessageConditionInput
) {
  createMessage(input: $input, condition: $condition) {
    id
    text
    owner
    room
    createdAt
    type
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateMessageMutationVariables,
  APITypes.CreateMessageMutation
>;
export const updateMessage = /* GraphQL */ `mutation UpdateMessage(
  $input: UpdateMessageInput!
  $condition: ModelMessageConditionInput
) {
  updateMessage(input: $input, condition: $condition) {
    id
    text
    owner
    room
    createdAt
    type
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateMessageMutationVariables,
  APITypes.UpdateMessageMutation
>;
export const deleteMessage = /* GraphQL */ `mutation DeleteMessage(
  $input: DeleteMessageInput!
  $condition: ModelMessageConditionInput
) {
  deleteMessage(input: $input, condition: $condition) {
    id
    text
    owner
    room
    createdAt
    type
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteMessageMutationVariables,
  APITypes.DeleteMessageMutation
>;
export const createRoom = /* GraphQL */ `mutation CreateRoom(
  $input: CreateRoomInput!
  $condition: ModelRoomConditionInput
) {
  createRoom(input: $input, condition: $condition) {
    id
    name
    owner
    event
    users
    groupChat
    active
    lastMessageID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateRoomMutationVariables,
  APITypes.CreateRoomMutation
>;
export const updateRoom = /* GraphQL */ `mutation UpdateRoom(
  $input: UpdateRoomInput!
  $condition: ModelRoomConditionInput
) {
  updateRoom(input: $input, condition: $condition) {
    id
    name
    owner
    event
    users
    groupChat
    active
    lastMessageID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateRoomMutationVariables,
  APITypes.UpdateRoomMutation
>;
export const deleteRoom = /* GraphQL */ `mutation DeleteRoom(
  $input: DeleteRoomInput!
  $condition: ModelRoomConditionInput
) {
  deleteRoom(input: $input, condition: $condition) {
    id
    name
    owner
    event
    users
    groupChat
    active
    lastMessageID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteRoomMutationVariables,
  APITypes.DeleteRoomMutation
>;
export const createUsersToRooms = /* GraphQL */ `mutation CreateUsersToRooms(
  $input: CreateUsersToRoomsInput!
  $condition: ModelUsersToRoomsConditionInput
) {
  createUsersToRooms(input: $input, condition: $condition) {
    user
    room
    groupChat
    unreadCount
    lastAckMessageId
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUsersToRoomsMutationVariables,
  APITypes.CreateUsersToRoomsMutation
>;
export const updateUsersToRooms = /* GraphQL */ `mutation UpdateUsersToRooms(
  $input: UpdateUsersToRoomsInput!
  $condition: ModelUsersToRoomsConditionInput
) {
  updateUsersToRooms(input: $input, condition: $condition) {
    user
    room
    groupChat
    unreadCount
    lastAckMessageId
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUsersToRoomsMutationVariables,
  APITypes.UpdateUsersToRoomsMutation
>;
export const deleteUsersToRooms = /* GraphQL */ `mutation DeleteUsersToRooms(
  $input: DeleteUsersToRoomsInput!
  $condition: ModelUsersToRoomsConditionInput
) {
  deleteUsersToRooms(input: $input, condition: $condition) {
    user
    room
    groupChat
    unreadCount
    lastAckMessageId
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUsersToRoomsMutationVariables,
  APITypes.DeleteUsersToRoomsMutation
>;
export const createLastStartTime = /* GraphQL */ `mutation CreateLastStartTime(
  $input: CreateLastStartTimeInput!
  $condition: ModelLastStartTimeConditionInput
) {
  createLastStartTime(input: $input, condition: $condition) {
    user
    lastStartTime
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateLastStartTimeMutationVariables,
  APITypes.CreateLastStartTimeMutation
>;
export const updateLastStartTime = /* GraphQL */ `mutation UpdateLastStartTime(
  $input: UpdateLastStartTimeInput!
  $condition: ModelLastStartTimeConditionInput
) {
  updateLastStartTime(input: $input, condition: $condition) {
    user
    lastStartTime
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateLastStartTimeMutationVariables,
  APITypes.UpdateLastStartTimeMutation
>;
export const deleteLastStartTime = /* GraphQL */ `mutation DeleteLastStartTime(
  $input: DeleteLastStartTimeInput!
  $condition: ModelLastStartTimeConditionInput
) {
  deleteLastStartTime(input: $input, condition: $condition) {
    user
    lastStartTime
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteLastStartTimeMutationVariables,
  APITypes.DeleteLastStartTimeMutation
>;
export const createLastActiveTime = /* GraphQL */ `mutation CreateLastActiveTime(
  $input: CreateLastActiveTimeInput!
  $condition: ModelLastActiveTimeConditionInput
) {
  createLastActiveTime(input: $input, condition: $condition) {
    user
    lastActiveTime
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateLastActiveTimeMutationVariables,
  APITypes.CreateLastActiveTimeMutation
>;
export const updateLastActiveTime = /* GraphQL */ `mutation UpdateLastActiveTime(
  $input: UpdateLastActiveTimeInput!
  $condition: ModelLastActiveTimeConditionInput
) {
  updateLastActiveTime(input: $input, condition: $condition) {
    user
    lastActiveTime
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateLastActiveTimeMutationVariables,
  APITypes.UpdateLastActiveTimeMutation
>;
export const deleteLastActiveTime = /* GraphQL */ `mutation DeleteLastActiveTime(
  $input: DeleteLastActiveTimeInput!
  $condition: ModelLastActiveTimeConditionInput
) {
  deleteLastActiveTime(input: $input, condition: $condition) {
    user
    lastActiveTime
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteLastActiveTimeMutationVariables,
  APITypes.DeleteLastActiveTimeMutation
>;
export const createUserDevices = /* GraphQL */ `mutation CreateUserDevices(
  $input: CreateUserDevicesInput!
  $condition: ModelUserDevicesConditionInput
) {
  createUserDevices(input: $input, condition: $condition) {
    user
    deviceToken
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserDevicesMutationVariables,
  APITypes.CreateUserDevicesMutation
>;
export const updateUserDevices = /* GraphQL */ `mutation UpdateUserDevices(
  $input: UpdateUserDevicesInput!
  $condition: ModelUserDevicesConditionInput
) {
  updateUserDevices(input: $input, condition: $condition) {
    user
    deviceToken
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserDevicesMutationVariables,
  APITypes.UpdateUserDevicesMutation
>;
export const deleteUserDevices = /* GraphQL */ `mutation DeleteUserDevices(
  $input: DeleteUserDevicesInput!
  $condition: ModelUserDevicesConditionInput
) {
  deleteUserDevices(input: $input, condition: $condition) {
    user
    deviceToken
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserDevicesMutationVariables,
  APITypes.DeleteUserDevicesMutation
>;
