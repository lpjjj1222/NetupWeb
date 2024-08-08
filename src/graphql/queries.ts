/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const searchUserByDistance = /* GraphQL */ `query SearchUserByDistance($coordinates: CoordinatesInput!, $mi: Int) {
  searchUserByDistance(coordinates: $coordinates, mi: $mi) {
    users
    total
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchUserByDistanceQueryVariables,
  APITypes.SearchUserByDistanceQuery
>;
export const searchEventByDistance = /* GraphQL */ `query SearchEventByDistance(
  $coordinates: CoordinatesInput!
  $mi: Int
  $skip: Int
  $keyword: String
  $minAge: Int
  $maxAge: Int
  $minCapacity: Int
  $maxCapacity: Int
  $startTime: AWSDateTime
  $endTime: AWSDateTime
  $industries: [Industry]
  $eventType: [EventType]
  $genders: [Gender]
  $language: [Language]
  $sortBy: EventSortBy
) {
  searchEventByDistance(
    coordinates: $coordinates
    mi: $mi
    skip: $skip
    keyword: $keyword
    minAge: $minAge
    maxAge: $maxAge
    minCapacity: $minCapacity
    maxCapacity: $maxCapacity
    startTime: $startTime
    endTime: $endTime
    industries: $industries
    eventType: $eventType
    genders: $genders
    language: $language
    sortBy: $sortBy
  ) {
    events {
      id
      eventName
      hostId
      industries
      eventType
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
    total
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchEventByDistanceQueryVariables,
  APITypes.SearchEventByDistanceQuery
>;
export const searchAccountByScore = /* GraphQL */ `query SearchAccountByScore(
  $language: [String]
  $expertise: String
  $industry: String
  $title: String
  $companyName: String
  $interestedIndustry: [String]
  $intention: [String]
  $latitude: Float
  $longitude: Float
  $filterList: [String]
) {
  searchAccountByScore(
    language: $language
    expertise: $expertise
    industry: $industry
    title: $title
    companyName: $companyName
    interestedIndustry: $interestedIndustry
    intention: $intention
    latitude: $latitude
    longitude: $longitude
    filterList: $filterList
  ) {
    users
    total
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchAccountByScoreQueryVariables,
  APITypes.SearchAccountByScoreQuery
>;
export const searchAccountByString = /* GraphQL */ `query SearchAccountByString($input: String) {
  searchAccountByString(input: $input) {
    users {
      id
      email
      userName
      createdAt
      updatedAt
      __typename
    }
    total
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchAccountByStringQueryVariables,
  APITypes.SearchAccountByStringQuery
>;
export const getSupportedDomains = /* GraphQL */ `query GetSupportedDomains($id: ID!) {
  getSupportedDomains(id: $id) {
    supportedDomains
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetSupportedDomainsQueryVariables,
  APITypes.GetSupportedDomainsQuery
>;
export const listSupportedDomains = /* GraphQL */ `query ListSupportedDomains(
  $filter: ModelSupportedDomainsFilterInput
  $limit: Int
  $nextToken: String
) {
  listSupportedDomains(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      supportedDomains
      id
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSupportedDomainsQueryVariables,
  APITypes.ListSupportedDomainsQuery
>;
export const supportedDomainsBySupportedDomains = /* GraphQL */ `query SupportedDomainsBySupportedDomains(
  $supportedDomains: String!
  $sortDirection: ModelSortDirection
  $filter: ModelSupportedDomainsFilterInput
  $limit: Int
  $nextToken: String
) {
  supportedDomainsBySupportedDomains(
    supportedDomains: $supportedDomains
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      supportedDomains
      id
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SupportedDomainsBySupportedDomainsQueryVariables,
  APITypes.SupportedDomainsBySupportedDomainsQuery
>;
export const getAccount = /* GraphQL */ `query GetAccount($id: ID!) {
  getAccount(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetAccountQueryVariables,
  APITypes.GetAccountQuery
>;
export const listAccounts = /* GraphQL */ `query ListAccounts(
  $id: ID
  $filter: ModelAccountFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listAccounts(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      email
      userName
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAccountsQueryVariables,
  APITypes.ListAccountsQuery
>;
export const accountsByEmail = /* GraphQL */ `query AccountsByEmail(
  $email: String!
  $sortDirection: ModelSortDirection
  $filter: ModelAccountFilterInput
  $limit: Int
  $nextToken: String
) {
  accountsByEmail(
    email: $email
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      email
      userName
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.AccountsByEmailQueryVariables,
  APITypes.AccountsByEmailQuery
>;
export const accountsByUserName = /* GraphQL */ `query AccountsByUserName(
  $userName: String!
  $sortDirection: ModelSortDirection
  $filter: ModelAccountFilterInput
  $limit: Int
  $nextToken: String
) {
  accountsByUserName(
    userName: $userName
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      email
      userName
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.AccountsByUserNameQueryVariables,
  APITypes.AccountsByUserNameQuery
>;
export const searchAccounts = /* GraphQL */ `query SearchAccounts(
  $filter: SearchableAccountFilterInput
  $sort: [SearchableAccountSortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchableAccountAggregationInput]
) {
  searchAccounts(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
    items {
      id
      email
      userName
      createdAt
      updatedAt
      __typename
    }
    nextToken
    total
    aggregateItems {
      name
      result {
        ... on SearchableAggregateScalarResult {
          value
        }
        ... on SearchableAggregateBucketResult {
          buckets {
            key
            doc_count
            __typename
          }
        }
      }
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchAccountsQueryVariables,
  APITypes.SearchAccountsQuery
>;
export const getFollows = /* GraphQL */ `query GetFollows($id: ID!) {
  getFollows(id: $id) {
    from
    to
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetFollowsQueryVariables,
  APITypes.GetFollowsQuery
>;
export const listFollows = /* GraphQL */ `query ListFollows(
  $filter: ModelFollowsFilterInput
  $limit: Int
  $nextToken: String
) {
  listFollows(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      from
      to
      id
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListFollowsQueryVariables,
  APITypes.ListFollowsQuery
>;
export const followsByFrom = /* GraphQL */ `query FollowsByFrom(
  $from: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelFollowsFilterInput
  $limit: Int
  $nextToken: String
) {
  followsByFrom(
    from: $from
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      from
      to
      id
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.FollowsByFromQueryVariables,
  APITypes.FollowsByFromQuery
>;
export const followsByTo = /* GraphQL */ `query FollowsByTo(
  $to: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelFollowsFilterInput
  $limit: Int
  $nextToken: String
) {
  followsByTo(
    to: $to
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      from
      to
      id
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.FollowsByToQueryVariables,
  APITypes.FollowsByToQuery
>;
export const getSwipeHistory = /* GraphQL */ `query GetSwipeHistory($id: ID!) {
  getSwipeHistory(id: $id) {
    from
    to
    swipeType
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetSwipeHistoryQueryVariables,
  APITypes.GetSwipeHistoryQuery
>;
export const listSwipeHistories = /* GraphQL */ `query ListSwipeHistories(
  $filter: ModelSwipeHistoryFilterInput
  $limit: Int
  $nextToken: String
) {
  listSwipeHistories(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      from
      to
      swipeType
      id
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSwipeHistoriesQueryVariables,
  APITypes.ListSwipeHistoriesQuery
>;
export const SwipeHistoryByUserAndSwipeType = /* GraphQL */ `query SwipeHistoryByUserAndSwipeType(
  $from: ID!
  $swipeType: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelSwipeHistoryFilterInput
  $limit: Int
  $nextToken: String
) {
  SwipeHistoryByUserAndSwipeType(
    from: $from
    swipeType: $swipeType
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      from
      to
      swipeType
      id
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SwipeHistoryByUserAndSwipeTypeQueryVariables,
  APITypes.SwipeHistoryByUserAndSwipeTypeQuery
>;
export const getEvent = /* GraphQL */ `query GetEvent($id: ID!) {
  getEvent(id: $id) {
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
` as GeneratedQuery<APITypes.GetEventQueryVariables, APITypes.GetEventQuery>;
export const listEvents = /* GraphQL */ `query ListEvents(
  $id: ID
  $filter: ModelEventFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listEvents(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      eventName
      hostId
      industries
      eventType
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEventsQueryVariables,
  APITypes.ListEventsQuery
>;
export const eventsByHostId = /* GraphQL */ `query EventsByHostId(
  $hostId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEventFilterInput
  $limit: Int
  $nextToken: String
) {
  eventsByHostId(
    hostId: $hostId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      eventName
      hostId
      industries
      eventType
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EventsByHostIdQueryVariables,
  APITypes.EventsByHostIdQuery
>;
export const searchEvents = /* GraphQL */ `query SearchEvents(
  $filter: SearchableEventFilterInput
  $sort: [SearchableEventSortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchableEventAggregationInput]
) {
  searchEvents(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
    items {
      id
      eventName
      hostId
      industries
      eventType
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
    nextToken
    total
    aggregateItems {
      name
      result {
        ... on SearchableAggregateScalarResult {
          value
        }
        ... on SearchableAggregateBucketResult {
          buckets {
            key
            doc_count
            __typename
          }
        }
      }
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchEventsQueryVariables,
  APITypes.SearchEventsQuery
>;
export const getUsersToEvents = /* GraphQL */ `query GetUsersToEvents($id: ID!) {
  getUsersToEvents(id: $id) {
    user
    event
    status
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetUsersToEventsQueryVariables,
  APITypes.GetUsersToEventsQuery
>;
export const listUsersToEvents = /* GraphQL */ `query ListUsersToEvents(
  $filter: ModelUsersToEventsFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsersToEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      user
      event
      status
      id
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUsersToEventsQueryVariables,
  APITypes.ListUsersToEventsQuery
>;
export const usersToEventsByUser = /* GraphQL */ `query UsersToEventsByUser(
  $user: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelUsersToEventsFilterInput
  $limit: Int
  $nextToken: String
) {
  usersToEventsByUser(
    user: $user
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      user
      event
      status
      id
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.UsersToEventsByUserQueryVariables,
  APITypes.UsersToEventsByUserQuery
>;
export const usersToEventsByEvent = /* GraphQL */ `query UsersToEventsByEvent(
  $event: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelUsersToEventsFilterInput
  $limit: Int
  $nextToken: String
) {
  usersToEventsByEvent(
    event: $event
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      user
      event
      status
      id
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.UsersToEventsByEventQueryVariables,
  APITypes.UsersToEventsByEventQuery
>;
export const getReportUsers = /* GraphQL */ `query GetReportUsers($id: ID!) {
  getReportUsers(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetReportUsersQueryVariables,
  APITypes.GetReportUsersQuery
>;
export const listReportUsers = /* GraphQL */ `query ListReportUsers(
  $filter: ModelReportUsersFilterInput
  $limit: Int
  $nextToken: String
) {
  listReportUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      reportedUser
      reporter
      reason
      comment
      id
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListReportUsersQueryVariables,
  APITypes.ListReportUsersQuery
>;
export const getReportEvents = /* GraphQL */ `query GetReportEvents($id: ID!) {
  getReportEvents(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetReportEventsQueryVariables,
  APITypes.GetReportEventsQuery
>;
export const listReportEvents = /* GraphQL */ `query ListReportEvents(
  $filter: ModelReportEventsFilterInput
  $limit: Int
  $nextToken: String
) {
  listReportEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      reportedEvent
      reporter
      reason
      comment
      id
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListReportEventsQueryVariables,
  APITypes.ListReportEventsQuery
>;
export const getMessage = /* GraphQL */ `query GetMessage($id: ID!) {
  getMessage(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetMessageQueryVariables,
  APITypes.GetMessageQuery
>;
export const listMessages = /* GraphQL */ `query ListMessages(
  $filter: ModelMessageFilterInput
  $limit: Int
  $nextToken: String
) {
  listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      text
      owner
      room
      createdAt
      type
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMessagesQueryVariables,
  APITypes.ListMessagesQuery
>;
export const messageByRoomAndCreatedAt = /* GraphQL */ `query MessageByRoomAndCreatedAt(
  $room: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelMessageFilterInput
  $limit: Int
  $nextToken: String
) {
  messageByRoomAndCreatedAt(
    room: $room
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      text
      owner
      room
      createdAt
      type
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.MessageByRoomAndCreatedAtQueryVariables,
  APITypes.MessageByRoomAndCreatedAtQuery
>;
export const getRoom = /* GraphQL */ `query GetRoom($id: ID!) {
  getRoom(id: $id) {
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
` as GeneratedQuery<APITypes.GetRoomQueryVariables, APITypes.GetRoomQuery>;
export const listRooms = /* GraphQL */ `query ListRooms(
  $filter: ModelRoomFilterInput
  $limit: Int
  $nextToken: String
) {
  listRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListRoomsQueryVariables, APITypes.ListRoomsQuery>;
export const roomsByEvent = /* GraphQL */ `query RoomsByEvent(
  $event: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelRoomFilterInput
  $limit: Int
  $nextToken: String
) {
  roomsByEvent(
    event: $event
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.RoomsByEventQueryVariables,
  APITypes.RoomsByEventQuery
>;
export const getUsersToRooms = /* GraphQL */ `query GetUsersToRooms($id: ID!) {
  getUsersToRooms(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetUsersToRoomsQueryVariables,
  APITypes.GetUsersToRoomsQuery
>;
export const listUsersToRooms = /* GraphQL */ `query ListUsersToRooms(
  $filter: ModelUsersToRoomsFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsersToRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUsersToRoomsQueryVariables,
  APITypes.ListUsersToRoomsQuery
>;
export const usersToRoomsByUser = /* GraphQL */ `query UsersToRoomsByUser(
  $user: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelUsersToRoomsFilterInput
  $limit: Int
  $nextToken: String
) {
  usersToRoomsByUser(
    user: $user
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.UsersToRoomsByUserQueryVariables,
  APITypes.UsersToRoomsByUserQuery
>;
export const usersToRoomsByRoom = /* GraphQL */ `query UsersToRoomsByRoom(
  $room: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelUsersToRoomsFilterInput
  $limit: Int
  $nextToken: String
) {
  usersToRoomsByRoom(
    room: $room
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.UsersToRoomsByRoomQueryVariables,
  APITypes.UsersToRoomsByRoomQuery
>;
export const getLastStartTime = /* GraphQL */ `query GetLastStartTime($user: ID!) {
  getLastStartTime(user: $user) {
    user
    lastStartTime
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetLastStartTimeQueryVariables,
  APITypes.GetLastStartTimeQuery
>;
export const listLastStartTimes = /* GraphQL */ `query ListLastStartTimes(
  $user: ID
  $filter: ModelLastStartTimeFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listLastStartTimes(
    user: $user
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      user
      lastStartTime
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListLastStartTimesQueryVariables,
  APITypes.ListLastStartTimesQuery
>;
export const getLastActiveTime = /* GraphQL */ `query GetLastActiveTime($user: ID!) {
  getLastActiveTime(user: $user) {
    user
    lastActiveTime
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetLastActiveTimeQueryVariables,
  APITypes.GetLastActiveTimeQuery
>;
export const listLastActiveTimes = /* GraphQL */ `query ListLastActiveTimes(
  $user: ID
  $filter: ModelLastActiveTimeFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listLastActiveTimes(
    user: $user
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      user
      lastActiveTime
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListLastActiveTimesQueryVariables,
  APITypes.ListLastActiveTimesQuery
>;
export const getUserDevices = /* GraphQL */ `query GetUserDevices($user: ID!) {
  getUserDevices(user: $user) {
    user
    deviceToken
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetUserDevicesQueryVariables,
  APITypes.GetUserDevicesQuery
>;
export const listUserDevices = /* GraphQL */ `query ListUserDevices(
  $user: ID
  $filter: ModelUserDevicesFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listUserDevices(
    user: $user
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      user
      deviceToken
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserDevicesQueryVariables,
  APITypes.ListUserDevicesQuery
>;
