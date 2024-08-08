/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateSupportedDomains = /* GraphQL */ `subscription OnCreateSupportedDomains(
  $filter: ModelSubscriptionSupportedDomainsFilterInput
) {
  onCreateSupportedDomains(filter: $filter) {
    supportedDomains
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateSupportedDomainsSubscriptionVariables,
  APITypes.OnCreateSupportedDomainsSubscription
>;
export const onUpdateSupportedDomains = /* GraphQL */ `subscription OnUpdateSupportedDomains(
  $filter: ModelSubscriptionSupportedDomainsFilterInput
) {
  onUpdateSupportedDomains(filter: $filter) {
    supportedDomains
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateSupportedDomainsSubscriptionVariables,
  APITypes.OnUpdateSupportedDomainsSubscription
>;
export const onDeleteSupportedDomains = /* GraphQL */ `subscription OnDeleteSupportedDomains(
  $filter: ModelSubscriptionSupportedDomainsFilterInput
) {
  onDeleteSupportedDomains(filter: $filter) {
    supportedDomains
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteSupportedDomainsSubscriptionVariables,
  APITypes.OnDeleteSupportedDomainsSubscription
>;
export const onCreateAccount = /* GraphQL */ `subscription OnCreateAccount($filter: ModelSubscriptionAccountFilterInput) {
  onCreateAccount(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateAccountSubscriptionVariables,
  APITypes.OnCreateAccountSubscription
>;
export const onUpdateAccount = /* GraphQL */ `subscription OnUpdateAccount($filter: ModelSubscriptionAccountFilterInput) {
  onUpdateAccount(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateAccountSubscriptionVariables,
  APITypes.OnUpdateAccountSubscription
>;
export const onDeleteAccount = /* GraphQL */ `subscription OnDeleteAccount($filter: ModelSubscriptionAccountFilterInput) {
  onDeleteAccount(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteAccountSubscriptionVariables,
  APITypes.OnDeleteAccountSubscription
>;
export const onCreateFollows = /* GraphQL */ `subscription OnCreateFollows($filter: ModelSubscriptionFollowsFilterInput) {
  onCreateFollows(filter: $filter) {
    from
    to
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateFollowsSubscriptionVariables,
  APITypes.OnCreateFollowsSubscription
>;
export const onUpdateFollows = /* GraphQL */ `subscription OnUpdateFollows($filter: ModelSubscriptionFollowsFilterInput) {
  onUpdateFollows(filter: $filter) {
    from
    to
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateFollowsSubscriptionVariables,
  APITypes.OnUpdateFollowsSubscription
>;
export const onDeleteFollows = /* GraphQL */ `subscription OnDeleteFollows($filter: ModelSubscriptionFollowsFilterInput) {
  onDeleteFollows(filter: $filter) {
    from
    to
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteFollowsSubscriptionVariables,
  APITypes.OnDeleteFollowsSubscription
>;
export const onCreateSwipeHistory = /* GraphQL */ `subscription OnCreateSwipeHistory(
  $filter: ModelSubscriptionSwipeHistoryFilterInput
) {
  onCreateSwipeHistory(filter: $filter) {
    from
    to
    swipeType
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateSwipeHistorySubscriptionVariables,
  APITypes.OnCreateSwipeHistorySubscription
>;
export const onUpdateSwipeHistory = /* GraphQL */ `subscription OnUpdateSwipeHistory(
  $filter: ModelSubscriptionSwipeHistoryFilterInput
) {
  onUpdateSwipeHistory(filter: $filter) {
    from
    to
    swipeType
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateSwipeHistorySubscriptionVariables,
  APITypes.OnUpdateSwipeHistorySubscription
>;
export const onDeleteSwipeHistory = /* GraphQL */ `subscription OnDeleteSwipeHistory(
  $filter: ModelSubscriptionSwipeHistoryFilterInput
) {
  onDeleteSwipeHistory(filter: $filter) {
    from
    to
    swipeType
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteSwipeHistorySubscriptionVariables,
  APITypes.OnDeleteSwipeHistorySubscription
>;
export const onCreateEvent = /* GraphQL */ `subscription OnCreateEvent($filter: ModelSubscriptionEventFilterInput) {
  onCreateEvent(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEventSubscriptionVariables,
  APITypes.OnCreateEventSubscription
>;
export const onUpdateEvent = /* GraphQL */ `subscription OnUpdateEvent($filter: ModelSubscriptionEventFilterInput) {
  onUpdateEvent(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEventSubscriptionVariables,
  APITypes.OnUpdateEventSubscription
>;
export const onDeleteEvent = /* GraphQL */ `subscription OnDeleteEvent($filter: ModelSubscriptionEventFilterInput) {
  onDeleteEvent(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEventSubscriptionVariables,
  APITypes.OnDeleteEventSubscription
>;
export const onCreateUsersToEvents = /* GraphQL */ `subscription OnCreateUsersToEvents(
  $filter: ModelSubscriptionUsersToEventsFilterInput
) {
  onCreateUsersToEvents(filter: $filter) {
    user
    event
    status
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateUsersToEventsSubscriptionVariables,
  APITypes.OnCreateUsersToEventsSubscription
>;
export const onUpdateUsersToEvents = /* GraphQL */ `subscription OnUpdateUsersToEvents(
  $filter: ModelSubscriptionUsersToEventsFilterInput
) {
  onUpdateUsersToEvents(filter: $filter) {
    user
    event
    status
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUsersToEventsSubscriptionVariables,
  APITypes.OnUpdateUsersToEventsSubscription
>;
export const onDeleteUsersToEvents = /* GraphQL */ `subscription OnDeleteUsersToEvents(
  $filter: ModelSubscriptionUsersToEventsFilterInput
) {
  onDeleteUsersToEvents(filter: $filter) {
    user
    event
    status
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUsersToEventsSubscriptionVariables,
  APITypes.OnDeleteUsersToEventsSubscription
>;
export const onCreateReportUsers = /* GraphQL */ `subscription OnCreateReportUsers(
  $filter: ModelSubscriptionReportUsersFilterInput
) {
  onCreateReportUsers(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateReportUsersSubscriptionVariables,
  APITypes.OnCreateReportUsersSubscription
>;
export const onUpdateReportUsers = /* GraphQL */ `subscription OnUpdateReportUsers(
  $filter: ModelSubscriptionReportUsersFilterInput
) {
  onUpdateReportUsers(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateReportUsersSubscriptionVariables,
  APITypes.OnUpdateReportUsersSubscription
>;
export const onDeleteReportUsers = /* GraphQL */ `subscription OnDeleteReportUsers(
  $filter: ModelSubscriptionReportUsersFilterInput
) {
  onDeleteReportUsers(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteReportUsersSubscriptionVariables,
  APITypes.OnDeleteReportUsersSubscription
>;
export const onCreateReportEvents = /* GraphQL */ `subscription OnCreateReportEvents(
  $filter: ModelSubscriptionReportEventsFilterInput
) {
  onCreateReportEvents(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateReportEventsSubscriptionVariables,
  APITypes.OnCreateReportEventsSubscription
>;
export const onUpdateReportEvents = /* GraphQL */ `subscription OnUpdateReportEvents(
  $filter: ModelSubscriptionReportEventsFilterInput
) {
  onUpdateReportEvents(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateReportEventsSubscriptionVariables,
  APITypes.OnUpdateReportEventsSubscription
>;
export const onDeleteReportEvents = /* GraphQL */ `subscription OnDeleteReportEvents(
  $filter: ModelSubscriptionReportEventsFilterInput
) {
  onDeleteReportEvents(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteReportEventsSubscriptionVariables,
  APITypes.OnDeleteReportEventsSubscription
>;
export const onCreateMessage = /* GraphQL */ `subscription OnCreateMessage($filter: ModelSubscriptionMessageFilterInput) {
  onCreateMessage(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateMessageSubscriptionVariables,
  APITypes.OnCreateMessageSubscription
>;
export const onUpdateMessage = /* GraphQL */ `subscription OnUpdateMessage($filter: ModelSubscriptionMessageFilterInput) {
  onUpdateMessage(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateMessageSubscriptionVariables,
  APITypes.OnUpdateMessageSubscription
>;
export const onDeleteMessage = /* GraphQL */ `subscription OnDeleteMessage($filter: ModelSubscriptionMessageFilterInput) {
  onDeleteMessage(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteMessageSubscriptionVariables,
  APITypes.OnDeleteMessageSubscription
>;
export const onCreateRoom = /* GraphQL */ `subscription OnCreateRoom($filter: ModelSubscriptionRoomFilterInput) {
  onCreateRoom(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateRoomSubscriptionVariables,
  APITypes.OnCreateRoomSubscription
>;
export const onUpdateRoom = /* GraphQL */ `subscription OnUpdateRoom($filter: ModelSubscriptionRoomFilterInput) {
  onUpdateRoom(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateRoomSubscriptionVariables,
  APITypes.OnUpdateRoomSubscription
>;
export const onDeleteRoom = /* GraphQL */ `subscription OnDeleteRoom($filter: ModelSubscriptionRoomFilterInput) {
  onDeleteRoom(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteRoomSubscriptionVariables,
  APITypes.OnDeleteRoomSubscription
>;
export const onCreateUsersToRooms = /* GraphQL */ `subscription OnCreateUsersToRooms(
  $filter: ModelSubscriptionUsersToRoomsFilterInput
) {
  onCreateUsersToRooms(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUsersToRoomsSubscriptionVariables,
  APITypes.OnCreateUsersToRoomsSubscription
>;
export const onUpdateUsersToRooms = /* GraphQL */ `subscription OnUpdateUsersToRooms(
  $filter: ModelSubscriptionUsersToRoomsFilterInput
) {
  onUpdateUsersToRooms(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUsersToRoomsSubscriptionVariables,
  APITypes.OnUpdateUsersToRoomsSubscription
>;
export const onDeleteUsersToRooms = /* GraphQL */ `subscription OnDeleteUsersToRooms(
  $filter: ModelSubscriptionUsersToRoomsFilterInput
) {
  onDeleteUsersToRooms(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUsersToRoomsSubscriptionVariables,
  APITypes.OnDeleteUsersToRoomsSubscription
>;
export const onCreateLastStartTime = /* GraphQL */ `subscription OnCreateLastStartTime(
  $filter: ModelSubscriptionLastStartTimeFilterInput
) {
  onCreateLastStartTime(filter: $filter) {
    user
    lastStartTime
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateLastStartTimeSubscriptionVariables,
  APITypes.OnCreateLastStartTimeSubscription
>;
export const onUpdateLastStartTime = /* GraphQL */ `subscription OnUpdateLastStartTime(
  $filter: ModelSubscriptionLastStartTimeFilterInput
) {
  onUpdateLastStartTime(filter: $filter) {
    user
    lastStartTime
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateLastStartTimeSubscriptionVariables,
  APITypes.OnUpdateLastStartTimeSubscription
>;
export const onDeleteLastStartTime = /* GraphQL */ `subscription OnDeleteLastStartTime(
  $filter: ModelSubscriptionLastStartTimeFilterInput
) {
  onDeleteLastStartTime(filter: $filter) {
    user
    lastStartTime
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteLastStartTimeSubscriptionVariables,
  APITypes.OnDeleteLastStartTimeSubscription
>;
export const onCreateLastActiveTime = /* GraphQL */ `subscription OnCreateLastActiveTime(
  $filter: ModelSubscriptionLastActiveTimeFilterInput
) {
  onCreateLastActiveTime(filter: $filter) {
    user
    lastActiveTime
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateLastActiveTimeSubscriptionVariables,
  APITypes.OnCreateLastActiveTimeSubscription
>;
export const onUpdateLastActiveTime = /* GraphQL */ `subscription OnUpdateLastActiveTime(
  $filter: ModelSubscriptionLastActiveTimeFilterInput
) {
  onUpdateLastActiveTime(filter: $filter) {
    user
    lastActiveTime
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateLastActiveTimeSubscriptionVariables,
  APITypes.OnUpdateLastActiveTimeSubscription
>;
export const onDeleteLastActiveTime = /* GraphQL */ `subscription OnDeleteLastActiveTime(
  $filter: ModelSubscriptionLastActiveTimeFilterInput
) {
  onDeleteLastActiveTime(filter: $filter) {
    user
    lastActiveTime
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteLastActiveTimeSubscriptionVariables,
  APITypes.OnDeleteLastActiveTimeSubscription
>;
export const onCreateUserDevices = /* GraphQL */ `subscription OnCreateUserDevices(
  $filter: ModelSubscriptionUserDevicesFilterInput
) {
  onCreateUserDevices(filter: $filter) {
    user
    deviceToken
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateUserDevicesSubscriptionVariables,
  APITypes.OnCreateUserDevicesSubscription
>;
export const onUpdateUserDevices = /* GraphQL */ `subscription OnUpdateUserDevices(
  $filter: ModelSubscriptionUserDevicesFilterInput
) {
  onUpdateUserDevices(filter: $filter) {
    user
    deviceToken
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUserDevicesSubscriptionVariables,
  APITypes.OnUpdateUserDevicesSubscription
>;
export const onDeleteUserDevices = /* GraphQL */ `subscription OnDeleteUserDevices(
  $filter: ModelSubscriptionUserDevicesFilterInput
) {
  onDeleteUserDevices(filter: $filter) {
    user
    deviceToken
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUserDevicesSubscriptionVariables,
  APITypes.OnDeleteUserDevicesSubscription
>;
