/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type UsersToRooms = {
  __typename: "UsersToRooms",
  user: string,
  room?: string | null,
  groupChat?: boolean | null,
  unreadCount?: number | null,
  lastAckMessageId?: string | null,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type CreateSupportedDomainsInput = {
  supportedDomains?: string | null,
  id?: string | null,
};

export type ModelSupportedDomainsConditionInput = {
  supportedDomains?: ModelStringInput | null,
  and?: Array< ModelSupportedDomainsConditionInput | null > | null,
  or?: Array< ModelSupportedDomainsConditionInput | null > | null,
  not?: ModelSupportedDomainsConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type SupportedDomains = {
  __typename: "SupportedDomains",
  supportedDomains?: string | null,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateSupportedDomainsInput = {
  supportedDomains?: string | null,
  id: string,
};

export type DeleteSupportedDomainsInput = {
  id: string,
};

export type CreateAccountInput = {
  id?: string | null,
  email?: string | null,
  userName?: string | null,
  userProfile?: UserProfileInput | null,
};

export type UserProfileInput = {
  company?: CompanyInput | null,
  title?: string | null,
  location?: LocationInput | null,
  industry?: Industry | null,
  language?: Array< Language | null > | null,
  age?: number | null,
  gender?: Gender | null,
  intention?: Array< Intention | null > | null,
  interestedIndustries?: Array< Industry | null > | null,
  selfIntroduction?: string | null,
  expertise?: Array< string | null > | null,
  photoIndex?: Array< number | null > | null,
};

export type CompanyInput = {
  id?: string | null,
  companyName?: string | null,
};

export type LocationInput = {
  address?: string | null,
  city?: string | null,
  state?: string | null,
  country?: string | null,
  zipCode?: string | null,
  coordinates?: CoordinatesInput | null,
};

export type CoordinatesInput = {
  lat: number,
  lon: number,
};

export enum Industry {
  UNIVERSITY = "UNIVERSITY",
  INVESTMENTBANKING = "INVESTMENTBANKING",
  ASSETMANAGEMENT = "ASSETMANAGEMENT",
  QUANTTRADING = "QUANTTRADING",
  VENTURECAPITAL = "VENTURECAPITAL",
  ACCOUNTING = "ACCOUNTING",
  PRODUCTMANAGEMENT = "PRODUCTMANAGEMENT",
  SOFTWAREENGINEERING = "SOFTWAREENGINEERING",
  DATASCIENCE = "DATASCIENCE",
  ARTIFICIALINTELLIGENCE = "ARTIFICIALINTELLIGENCE",
  UIUX = "UIUX",
  ELECTRICALENGINEERING = "ELECTRICALENGINEERING",
  CONSULTING = "CONSULTING",
  EDUCATION = "EDUCATION",
  LAW = "LAW",
  REALESTATE = "REALESTATE",
  HEALTHCARE = "HEALTHCARE",
  ENGINEERING = "ENGINEERING",
  PUBLICSECTOR = "PUBLICSECTOR",
  SUPPLYCHAIN = "SUPPLYCHAIN",
  FILMANDART = "FILMANDART",
  HUMANRESOURCE = "HUMANRESOURCE",
  BIOANDMEDICAL = "BIOANDMEDICAL",
  ARCHITECTURE = "ARCHITECTURE",
  MARKETING = "MARKETING",
  ADVERTISING = "ADVERTISING",
  MEDIA = "MEDIA",
  OTHERS = "OTHERS",
}


export enum Language {
  ENGLISH = "ENGLISH",
  CHINESE = "CHINESE",
  FRENCH = "FRENCH",
  SPANISH = "SPANISH",
}


export enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE",
  OTHERS = "OTHERS",
  PREFERNOTTOSAY = "PREFERNOTTOSAY",
}


export enum Intention {
  PEERTOPEER = "PEERTOPEER",
  LOOKFORMENTOR = "LOOKFORMENTOR",
  MENTOROTHERS = "MENTOROTHERS",
  HIRING = "HIRING",
  LOOKFORJOBS = "LOOKFORJOBS",
  LEARNOTHERINDUSTRIES = "LEARNOTHERINDUSTRIES",
}


export type ModelAccountConditionInput = {
  email?: ModelStringInput | null,
  userName?: ModelStringInput | null,
  and?: Array< ModelAccountConditionInput | null > | null,
  or?: Array< ModelAccountConditionInput | null > | null,
  not?: ModelAccountConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type Account = {
  __typename: "Account",
  id: string,
  email?: string | null,
  userName?: string | null,
  userProfile?: UserProfile | null,
  createdAt: string,
  updatedAt: string,
};

export type UserProfile = {
  __typename: "UserProfile",
  company?: Company | null,
  title?: string | null,
  location?: Location | null,
  industry?: Industry | null,
  language?: Array< Language | null > | null,
  age?: number | null,
  gender?: Gender | null,
  intention?: Array< Intention | null > | null,
  interestedIndustries?: Array< Industry | null > | null,
  selfIntroduction?: string | null,
  expertise?: Array< string | null > | null,
  photoIndex?: Array< number | null > | null,
};

export type Company = {
  __typename: "Company",
  id?: string | null,
  companyName?: string | null,
};

export type Location = {
  __typename: "Location",
  address?: string | null,
  city?: string | null,
  state?: string | null,
  country?: string | null,
  zipCode?: string | null,
  coordinates?: Coordinates | null,
};

export type Coordinates = {
  __typename: "Coordinates",
  lat: number,
  lon: number,
};

export type UpdateAccountInput = {
  id: string,
  email?: string | null,
  userName?: string | null,
  userProfile?: UserProfileInput | null,
};

export type DeleteAccountInput = {
  id: string,
};

export type CreateFollowsInput = {
  from?: string | null,
  to?: string | null,
  id?: string | null,
};

export type ModelFollowsConditionInput = {
  from?: ModelIDInput | null,
  to?: ModelIDInput | null,
  and?: Array< ModelFollowsConditionInput | null > | null,
  or?: Array< ModelFollowsConditionInput | null > | null,
  not?: ModelFollowsConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Follows = {
  __typename: "Follows",
  from?: string | null,
  to?: string | null,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateFollowsInput = {
  from?: string | null,
  to?: string | null,
  id: string,
};

export type DeleteFollowsInput = {
  id: string,
};

export type CreateSwipeHistoryInput = {
  from?: string | null,
  to?: string | null,
  swipeType?: SwipeType | null,
  id?: string | null,
};

export enum SwipeType {
  DISLIKE = "DISLIKE",
  CHAT = "CHAT",
  INVITETOEVENT = "INVITETOEVENT",
}


export type ModelSwipeHistoryConditionInput = {
  from?: ModelIDInput | null,
  to?: ModelIDInput | null,
  swipeType?: ModelSwipeTypeInput | null,
  and?: Array< ModelSwipeHistoryConditionInput | null > | null,
  or?: Array< ModelSwipeHistoryConditionInput | null > | null,
  not?: ModelSwipeHistoryConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelSwipeTypeInput = {
  eq?: SwipeType | null,
  ne?: SwipeType | null,
};

export type SwipeHistory = {
  __typename: "SwipeHistory",
  from?: string | null,
  to?: string | null,
  swipeType?: SwipeType | null,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateSwipeHistoryInput = {
  from?: string | null,
  to?: string | null,
  swipeType?: SwipeType | null,
  id: string,
};

export type DeleteSwipeHistoryInput = {
  id: string,
};

export type CreateEventInput = {
  id?: string | null,
  eventName?: string | null,
  hostId?: string | null,
  industries?: Array< Industry | null > | null,
  eventType?: EventType | null,
  location?: LocationInput | null,
  eventLink?: string | null,
  startTime?: string | null,
  capacity?: number | null,
  genders?: Array< Gender | null > | null,
  minAge?: number | null,
  maxAge?: number | null,
  language?: Language | null,
  description?: string | null,
  privacy?: EventPrivacy | null,
};

export enum EventType {
  COFFEECHAT = "COFFEECHAT",
  MEAL = "MEAL",
  ONLINE = "ONLINE",
  OTHERS = "OTHERS",
}


export enum EventPrivacy {
  PRIVATE = "PRIVATE",
  PUBLIC = "PUBLIC",
}


export type ModelEventConditionInput = {
  eventName?: ModelStringInput | null,
  hostId?: ModelIDInput | null,
  industries?: ModelIndustryListInput | null,
  eventType?: ModelEventTypeInput | null,
  eventLink?: ModelStringInput | null,
  startTime?: ModelStringInput | null,
  capacity?: ModelIntInput | null,
  genders?: ModelGenderListInput | null,
  minAge?: ModelIntInput | null,
  maxAge?: ModelIntInput | null,
  language?: ModelLanguageInput | null,
  description?: ModelStringInput | null,
  privacy?: ModelEventPrivacyInput | null,
  and?: Array< ModelEventConditionInput | null > | null,
  or?: Array< ModelEventConditionInput | null > | null,
  not?: ModelEventConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelIndustryListInput = {
  eq?: Array< Industry | null > | null,
  ne?: Array< Industry | null > | null,
  contains?: Industry | null,
  notContains?: Industry | null,
};

export type ModelEventTypeInput = {
  eq?: EventType | null,
  ne?: EventType | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelGenderListInput = {
  eq?: Array< Gender | null > | null,
  ne?: Array< Gender | null > | null,
  contains?: Gender | null,
  notContains?: Gender | null,
};

export type ModelLanguageInput = {
  eq?: Language | null,
  ne?: Language | null,
};

export type ModelEventPrivacyInput = {
  eq?: EventPrivacy | null,
  ne?: EventPrivacy | null,
};

export type Event = {
  __typename: "Event",
  id: string,
  eventName?: string | null,
  hostId?: string | null,
  industries?: Array< Industry | null > | null,
  eventType?: EventType | null,
  location?: Location | null,
  eventLink?: string | null,
  startTime?: string | null,
  capacity?: number | null,
  genders?: Array< Gender | null > | null,
  minAge?: number | null,
  maxAge?: number | null,
  language?: Language | null,
  description?: string | null,
  privacy?: EventPrivacy | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateEventInput = {
  id: string,
  eventName?: string | null,
  hostId?: string | null,
  industries?: Array< Industry | null > | null,
  eventType?: EventType | null,
  location?: LocationInput | null,
  eventLink?: string | null,
  startTime?: string | null,
  capacity?: number | null,
  genders?: Array< Gender | null > | null,
  minAge?: number | null,
  maxAge?: number | null,
  language?: Language | null,
  description?: string | null,
  privacy?: EventPrivacy | null,
};

export type DeleteEventInput = {
  id: string,
};

export type CreateUsersToEventsInput = {
  user: string,
  event?: string | null,
  status?: EventStatus | null,
  id?: string | null,
};

export enum EventStatus {
  INTERESTED = "INTERESTED",
  ATTENDING = "ATTENDING",
}


export type ModelUsersToEventsConditionInput = {
  user?: ModelIDInput | null,
  event?: ModelIDInput | null,
  status?: ModelEventStatusInput | null,
  and?: Array< ModelUsersToEventsConditionInput | null > | null,
  or?: Array< ModelUsersToEventsConditionInput | null > | null,
  not?: ModelUsersToEventsConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelEventStatusInput = {
  eq?: EventStatus | null,
  ne?: EventStatus | null,
};

export type UsersToEvents = {
  __typename: "UsersToEvents",
  user: string,
  event?: string | null,
  status?: EventStatus | null,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUsersToEventsInput = {
  user?: string | null,
  event?: string | null,
  status?: EventStatus | null,
  id: string,
};

export type DeleteUsersToEventsInput = {
  id: string,
};

export type CreateReportUsersInput = {
  reportedUser: string,
  reporter: string,
  reason?: string | null,
  comment?: string | null,
  id?: string | null,
};

export type ModelReportUsersConditionInput = {
  reportedUser?: ModelIDInput | null,
  reporter?: ModelIDInput | null,
  reason?: ModelStringInput | null,
  comment?: ModelStringInput | null,
  and?: Array< ModelReportUsersConditionInput | null > | null,
  or?: Array< ModelReportUsersConditionInput | null > | null,
  not?: ModelReportUsersConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ReportUsers = {
  __typename: "ReportUsers",
  reportedUser: string,
  reporter: string,
  reason?: string | null,
  comment?: string | null,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateReportUsersInput = {
  reportedUser?: string | null,
  reporter?: string | null,
  reason?: string | null,
  comment?: string | null,
  id: string,
};

export type DeleteReportUsersInput = {
  id: string,
};

export type CreateReportEventsInput = {
  reportedEvent: string,
  reporter: string,
  reason?: string | null,
  comment?: string | null,
  id?: string | null,
};

export type ModelReportEventsConditionInput = {
  reportedEvent?: ModelIDInput | null,
  reporter?: ModelIDInput | null,
  reason?: ModelStringInput | null,
  comment?: ModelStringInput | null,
  and?: Array< ModelReportEventsConditionInput | null > | null,
  or?: Array< ModelReportEventsConditionInput | null > | null,
  not?: ModelReportEventsConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ReportEvents = {
  __typename: "ReportEvents",
  reportedEvent: string,
  reporter: string,
  reason?: string | null,
  comment?: string | null,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateReportEventsInput = {
  reportedEvent?: string | null,
  reporter?: string | null,
  reason?: string | null,
  comment?: string | null,
  id: string,
};

export type DeleteReportEventsInput = {
  id: string,
};

export type CreateMessageInput = {
  id?: string | null,
  text?: string | null,
  owner: string,
  room: string,
  createdAt?: string | null,
  type?: MessageType | null,
};

export enum MessageType {
  TEXT = "TEXT",
  IMAGE = "IMAGE",
  AUDIO = "AUDIO",
  VIDEO = "VIDEO",
}


export type ModelMessageConditionInput = {
  text?: ModelStringInput | null,
  owner?: ModelIDInput | null,
  room?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  type?: ModelMessageTypeInput | null,
  and?: Array< ModelMessageConditionInput | null > | null,
  or?: Array< ModelMessageConditionInput | null > | null,
  not?: ModelMessageConditionInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelMessageTypeInput = {
  eq?: MessageType | null,
  ne?: MessageType | null,
};

export type Message = {
  __typename: "Message",
  id: string,
  text?: string | null,
  owner: string,
  room: string,
  createdAt?: string | null,
  type?: MessageType | null,
  updatedAt: string,
};

export type UpdateMessageInput = {
  id: string,
  text?: string | null,
  owner?: string | null,
  room?: string | null,
  createdAt?: string | null,
  type?: MessageType | null,
};

export type DeleteMessageInput = {
  id: string,
};

export type CreateRoomInput = {
  id?: string | null,
  name?: string | null,
  owner: string,
  event?: string | null,
  users?: Array< string | null > | null,
  groupChat?: boolean | null,
  active?: boolean | null,
  lastMessageID?: string | null,
};

export type ModelRoomConditionInput = {
  name?: ModelStringInput | null,
  owner?: ModelIDInput | null,
  event?: ModelIDInput | null,
  users?: ModelIDInput | null,
  groupChat?: ModelBooleanInput | null,
  active?: ModelBooleanInput | null,
  lastMessageID?: ModelIDInput | null,
  and?: Array< ModelRoomConditionInput | null > | null,
  or?: Array< ModelRoomConditionInput | null > | null,
  not?: ModelRoomConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Room = {
  __typename: "Room",
  id: string,
  name?: string | null,
  owner: string,
  event?: string | null,
  users?: Array< string | null > | null,
  groupChat?: boolean | null,
  active?: boolean | null,
  lastMessageID?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateRoomInput = {
  id: string,
  name?: string | null,
  owner?: string | null,
  event?: string | null,
  users?: Array< string | null > | null,
  groupChat?: boolean | null,
  active?: boolean | null,
  lastMessageID?: string | null,
};

export type DeleteRoomInput = {
  id: string,
};

export type CreateUsersToRoomsInput = {
  user: string,
  room?: string | null,
  groupChat?: boolean | null,
  unreadCount?: number | null,
  lastAckMessageId?: string | null,
  id?: string | null,
};

export type ModelUsersToRoomsConditionInput = {
  user?: ModelIDInput | null,
  room?: ModelIDInput | null,
  groupChat?: ModelBooleanInput | null,
  unreadCount?: ModelIntInput | null,
  lastAckMessageId?: ModelIDInput | null,
  and?: Array< ModelUsersToRoomsConditionInput | null > | null,
  or?: Array< ModelUsersToRoomsConditionInput | null > | null,
  not?: ModelUsersToRoomsConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateUsersToRoomsInput = {
  user?: string | null,
  room?: string | null,
  groupChat?: boolean | null,
  unreadCount?: number | null,
  lastAckMessageId?: string | null,
  id: string,
};

export type DeleteUsersToRoomsInput = {
  id: string,
};

export type CreateLastStartTimeInput = {
  user: string,
  lastStartTime: string,
};

export type ModelLastStartTimeConditionInput = {
  lastStartTime?: ModelStringInput | null,
  and?: Array< ModelLastStartTimeConditionInput | null > | null,
  or?: Array< ModelLastStartTimeConditionInput | null > | null,
  not?: ModelLastStartTimeConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type LastStartTime = {
  __typename: "LastStartTime",
  user: string,
  lastStartTime: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateLastStartTimeInput = {
  user: string,
  lastStartTime?: string | null,
};

export type DeleteLastStartTimeInput = {
  user: string,
};

export type CreateLastActiveTimeInput = {
  user: string,
  lastActiveTime: number,
};

export type ModelLastActiveTimeConditionInput = {
  lastActiveTime?: ModelIntInput | null,
  and?: Array< ModelLastActiveTimeConditionInput | null > | null,
  or?: Array< ModelLastActiveTimeConditionInput | null > | null,
  not?: ModelLastActiveTimeConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type LastActiveTime = {
  __typename: "LastActiveTime",
  user: string,
  lastActiveTime: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateLastActiveTimeInput = {
  user: string,
  lastActiveTime?: number | null,
};

export type DeleteLastActiveTimeInput = {
  user: string,
};

export type CreateUserDevicesInput = {
  user: string,
  deviceToken?: string | null,
};

export type ModelUserDevicesConditionInput = {
  deviceToken?: ModelStringInput | null,
  and?: Array< ModelUserDevicesConditionInput | null > | null,
  or?: Array< ModelUserDevicesConditionInput | null > | null,
  not?: ModelUserDevicesConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UserDevices = {
  __typename: "UserDevices",
  user: string,
  deviceToken?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserDevicesInput = {
  user: string,
  deviceToken?: string | null,
};

export type DeleteUserDevicesInput = {
  user: string,
};

export type AccountConnection = {
  __typename: "AccountConnection",
  users?: Array< string | null > | null,
  total?: number | null,
};

export enum EventSortBy {
  DISTANCE = "DISTANCE",
  STARTTIME = "STARTTIME",
}


export type EventConnection = {
  __typename: "EventConnection",
  events?:  Array<Event | null > | null,
  total?: number | null,
};

export type AccountDetailConnection = {
  __typename: "AccountDetailConnection",
  users?:  Array<Account | null > | null,
  total?: number | null,
};

export type ModelSupportedDomainsFilterInput = {
  supportedDomains?: ModelStringInput | null,
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelSupportedDomainsFilterInput | null > | null,
  or?: Array< ModelSupportedDomainsFilterInput | null > | null,
  not?: ModelSupportedDomainsFilterInput | null,
};

export type ModelSupportedDomainsConnection = {
  __typename: "ModelSupportedDomainsConnection",
  items:  Array<SupportedDomains | null >,
  nextToken?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelAccountFilterInput = {
  id?: ModelIDInput | null,
  email?: ModelStringInput | null,
  userName?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelAccountFilterInput | null > | null,
  or?: Array< ModelAccountFilterInput | null > | null,
  not?: ModelAccountFilterInput | null,
};

export type ModelAccountConnection = {
  __typename: "ModelAccountConnection",
  items:  Array<Account | null >,
  nextToken?: string | null,
};

export type SearchableAccountFilterInput = {
  id?: SearchableIDFilterInput | null,
  email?: SearchableStringFilterInput | null,
  userName?: SearchableStringFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  and?: Array< SearchableAccountFilterInput | null > | null,
  or?: Array< SearchableAccountFilterInput | null > | null,
  not?: SearchableAccountFilterInput | null,
};

export type SearchableIDFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
  range?: Array< string | null > | null,
};

export type SearchableStringFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
  range?: Array< string | null > | null,
};

export type SearchableAccountSortInput = {
  field?: SearchableAccountSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableAccountSortableFields {
  id = "id",
  email = "email",
  userName = "userName",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export enum SearchableSortDirection {
  asc = "asc",
  desc = "desc",
}


export type SearchableAccountAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchableAccountAggregateField,
};

export enum SearchableAggregateType {
  terms = "terms",
  avg = "avg",
  min = "min",
  max = "max",
  sum = "sum",
  cardinality = "cardinality",
}


export enum SearchableAccountAggregateField {
  id = "id",
  email = "email",
  userName = "userName",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableAccountConnection = {
  __typename: "SearchableAccountConnection",
  items:  Array<Account | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type SearchableAggregateResult = {
  __typename: "SearchableAggregateResult",
  name: string,
  result?: SearchableAggregateGenericResult | null,
};

export type SearchableAggregateGenericResult = SearchableAggregateScalarResult | SearchableAggregateBucketResult


export type SearchableAggregateScalarResult = {
  __typename: "SearchableAggregateScalarResult",
  value: number,
};

export type SearchableAggregateBucketResult = {
  __typename: "SearchableAggregateBucketResult",
  buckets?:  Array<SearchableAggregateBucketResultItem | null > | null,
};

export type SearchableAggregateBucketResultItem = {
  __typename: "SearchableAggregateBucketResultItem",
  key: string,
  doc_count: number,
};

export type ModelFollowsFilterInput = {
  from?: ModelIDInput | null,
  to?: ModelIDInput | null,
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelFollowsFilterInput | null > | null,
  or?: Array< ModelFollowsFilterInput | null > | null,
  not?: ModelFollowsFilterInput | null,
};

export type ModelFollowsConnection = {
  __typename: "ModelFollowsConnection",
  items:  Array<Follows | null >,
  nextToken?: string | null,
};

export type ModelSwipeHistoryFilterInput = {
  from?: ModelIDInput | null,
  to?: ModelIDInput | null,
  swipeType?: ModelSwipeTypeInput | null,
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelSwipeHistoryFilterInput | null > | null,
  or?: Array< ModelSwipeHistoryFilterInput | null > | null,
  not?: ModelSwipeHistoryFilterInput | null,
};

export type ModelSwipeHistoryConnection = {
  __typename: "ModelSwipeHistoryConnection",
  items:  Array<SwipeHistory | null >,
  nextToken?: string | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelEventFilterInput = {
  id?: ModelIDInput | null,
  eventName?: ModelStringInput | null,
  hostId?: ModelIDInput | null,
  industries?: ModelIndustryListInput | null,
  eventType?: ModelEventTypeInput | null,
  eventLink?: ModelStringInput | null,
  startTime?: ModelStringInput | null,
  capacity?: ModelIntInput | null,
  genders?: ModelGenderListInput | null,
  minAge?: ModelIntInput | null,
  maxAge?: ModelIntInput | null,
  language?: ModelLanguageInput | null,
  description?: ModelStringInput | null,
  privacy?: ModelEventPrivacyInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelEventFilterInput | null > | null,
  or?: Array< ModelEventFilterInput | null > | null,
  not?: ModelEventFilterInput | null,
};

export type ModelEventConnection = {
  __typename: "ModelEventConnection",
  items:  Array<Event | null >,
  nextToken?: string | null,
};

export type SearchableEventFilterInput = {
  id?: SearchableIDFilterInput | null,
  eventName?: SearchableStringFilterInput | null,
  hostId?: SearchableIDFilterInput | null,
  eventLink?: SearchableStringFilterInput | null,
  startTime?: SearchableStringFilterInput | null,
  capacity?: SearchableIntFilterInput | null,
  minAge?: SearchableIntFilterInput | null,
  maxAge?: SearchableIntFilterInput | null,
  description?: SearchableStringFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  industries?: SearchableStringFilterInput | null,
  eventType?: SearchableStringFilterInput | null,
  genders?: SearchableStringFilterInput | null,
  language?: SearchableStringFilterInput | null,
  privacy?: SearchableStringFilterInput | null,
  and?: Array< SearchableEventFilterInput | null > | null,
  or?: Array< SearchableEventFilterInput | null > | null,
  not?: SearchableEventFilterInput | null,
};

export type SearchableIntFilterInput = {
  ne?: number | null,
  gt?: number | null,
  lt?: number | null,
  gte?: number | null,
  lte?: number | null,
  eq?: number | null,
  range?: Array< number | null > | null,
};

export type SearchableEventSortInput = {
  field?: SearchableEventSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableEventSortableFields {
  id = "id",
  eventName = "eventName",
  hostId = "hostId",
  eventLink = "eventLink",
  startTime = "startTime",
  capacity = "capacity",
  minAge = "minAge",
  maxAge = "maxAge",
  description = "description",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableEventAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchableEventAggregateField,
};

export enum SearchableEventAggregateField {
  id = "id",
  eventName = "eventName",
  hostId = "hostId",
  industries = "industries",
  eventType = "eventType",
  eventLink = "eventLink",
  startTime = "startTime",
  capacity = "capacity",
  genders = "genders",
  minAge = "minAge",
  maxAge = "maxAge",
  language = "language",
  description = "description",
  privacy = "privacy",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableEventConnection = {
  __typename: "SearchableEventConnection",
  items:  Array<Event | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type ModelUsersToEventsFilterInput = {
  user?: ModelIDInput | null,
  event?: ModelIDInput | null,
  status?: ModelEventStatusInput | null,
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUsersToEventsFilterInput | null > | null,
  or?: Array< ModelUsersToEventsFilterInput | null > | null,
  not?: ModelUsersToEventsFilterInput | null,
};

export type ModelUsersToEventsConnection = {
  __typename: "ModelUsersToEventsConnection",
  items:  Array<UsersToEvents | null >,
  nextToken?: string | null,
};

export type ModelReportUsersFilterInput = {
  reportedUser?: ModelIDInput | null,
  reporter?: ModelIDInput | null,
  reason?: ModelStringInput | null,
  comment?: ModelStringInput | null,
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelReportUsersFilterInput | null > | null,
  or?: Array< ModelReportUsersFilterInput | null > | null,
  not?: ModelReportUsersFilterInput | null,
};

export type ModelReportUsersConnection = {
  __typename: "ModelReportUsersConnection",
  items:  Array<ReportUsers | null >,
  nextToken?: string | null,
};

export type ModelReportEventsFilterInput = {
  reportedEvent?: ModelIDInput | null,
  reporter?: ModelIDInput | null,
  reason?: ModelStringInput | null,
  comment?: ModelStringInput | null,
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelReportEventsFilterInput | null > | null,
  or?: Array< ModelReportEventsFilterInput | null > | null,
  not?: ModelReportEventsFilterInput | null,
};

export type ModelReportEventsConnection = {
  __typename: "ModelReportEventsConnection",
  items:  Array<ReportEvents | null >,
  nextToken?: string | null,
};

export type ModelMessageFilterInput = {
  id?: ModelIDInput | null,
  text?: ModelStringInput | null,
  owner?: ModelIDInput | null,
  room?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  type?: ModelMessageTypeInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelMessageFilterInput | null > | null,
  or?: Array< ModelMessageFilterInput | null > | null,
  not?: ModelMessageFilterInput | null,
};

export type ModelMessageConnection = {
  __typename: "ModelMessageConnection",
  items:  Array<Message | null >,
  nextToken?: string | null,
};

export type ModelRoomFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  owner?: ModelIDInput | null,
  event?: ModelIDInput | null,
  users?: ModelIDInput | null,
  groupChat?: ModelBooleanInput | null,
  active?: ModelBooleanInput | null,
  lastMessageID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelRoomFilterInput | null > | null,
  or?: Array< ModelRoomFilterInput | null > | null,
  not?: ModelRoomFilterInput | null,
};

export type ModelRoomConnection = {
  __typename: "ModelRoomConnection",
  items:  Array<Room | null >,
  nextToken?: string | null,
};

export type ModelUsersToRoomsFilterInput = {
  user?: ModelIDInput | null,
  room?: ModelIDInput | null,
  groupChat?: ModelBooleanInput | null,
  unreadCount?: ModelIntInput | null,
  lastAckMessageId?: ModelIDInput | null,
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUsersToRoomsFilterInput | null > | null,
  or?: Array< ModelUsersToRoomsFilterInput | null > | null,
  not?: ModelUsersToRoomsFilterInput | null,
};

export type ModelUsersToRoomsConnection = {
  __typename: "ModelUsersToRoomsConnection",
  items:  Array<UsersToRooms | null >,
  nextToken?: string | null,
};

export type ModelLastStartTimeFilterInput = {
  user?: ModelIDInput | null,
  lastStartTime?: ModelStringInput | null,
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelLastStartTimeFilterInput | null > | null,
  or?: Array< ModelLastStartTimeFilterInput | null > | null,
  not?: ModelLastStartTimeFilterInput | null,
};

export type ModelLastStartTimeConnection = {
  __typename: "ModelLastStartTimeConnection",
  items:  Array<LastStartTime | null >,
  nextToken?: string | null,
};

export type ModelLastActiveTimeFilterInput = {
  user?: ModelIDInput | null,
  lastActiveTime?: ModelIntInput | null,
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelLastActiveTimeFilterInput | null > | null,
  or?: Array< ModelLastActiveTimeFilterInput | null > | null,
  not?: ModelLastActiveTimeFilterInput | null,
};

export type ModelLastActiveTimeConnection = {
  __typename: "ModelLastActiveTimeConnection",
  items:  Array<LastActiveTime | null >,
  nextToken?: string | null,
};

export type ModelUserDevicesFilterInput = {
  user?: ModelIDInput | null,
  deviceToken?: ModelStringInput | null,
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserDevicesFilterInput | null > | null,
  or?: Array< ModelUserDevicesFilterInput | null > | null,
  not?: ModelUserDevicesFilterInput | null,
};

export type ModelUserDevicesConnection = {
  __typename: "ModelUserDevicesConnection",
  items:  Array<UserDevices | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionSupportedDomainsFilterInput = {
  supportedDomains?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSupportedDomainsFilterInput | null > | null,
  or?: Array< ModelSubscriptionSupportedDomainsFilterInput | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionAccountFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  email?: ModelSubscriptionStringInput | null,
  userName?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAccountFilterInput | null > | null,
  or?: Array< ModelSubscriptionAccountFilterInput | null > | null,
};

export type ModelSubscriptionFollowsFilterInput = {
  from?: ModelSubscriptionIDInput | null,
  to?: ModelSubscriptionIDInput | null,
  id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionFollowsFilterInput | null > | null,
  or?: Array< ModelSubscriptionFollowsFilterInput | null > | null,
};

export type ModelSubscriptionSwipeHistoryFilterInput = {
  from?: ModelSubscriptionIDInput | null,
  to?: ModelSubscriptionIDInput | null,
  swipeType?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSwipeHistoryFilterInput | null > | null,
  or?: Array< ModelSubscriptionSwipeHistoryFilterInput | null > | null,
};

export type ModelSubscriptionEventFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  eventName?: ModelSubscriptionStringInput | null,
  hostId?: ModelSubscriptionIDInput | null,
  industries?: ModelSubscriptionStringInput | null,
  eventType?: ModelSubscriptionStringInput | null,
  eventLink?: ModelSubscriptionStringInput | null,
  startTime?: ModelSubscriptionStringInput | null,
  capacity?: ModelSubscriptionIntInput | null,
  genders?: ModelSubscriptionStringInput | null,
  minAge?: ModelSubscriptionIntInput | null,
  maxAge?: ModelSubscriptionIntInput | null,
  language?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  privacy?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionEventFilterInput | null > | null,
  or?: Array< ModelSubscriptionEventFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionUsersToEventsFilterInput = {
  user?: ModelSubscriptionIDInput | null,
  event?: ModelSubscriptionIDInput | null,
  status?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUsersToEventsFilterInput | null > | null,
  or?: Array< ModelSubscriptionUsersToEventsFilterInput | null > | null,
};

export type ModelSubscriptionReportUsersFilterInput = {
  reportedUser?: ModelSubscriptionIDInput | null,
  reporter?: ModelSubscriptionIDInput | null,
  reason?: ModelSubscriptionStringInput | null,
  comment?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionReportUsersFilterInput | null > | null,
  or?: Array< ModelSubscriptionReportUsersFilterInput | null > | null,
};

export type ModelSubscriptionReportEventsFilterInput = {
  reportedEvent?: ModelSubscriptionIDInput | null,
  reporter?: ModelSubscriptionIDInput | null,
  reason?: ModelSubscriptionStringInput | null,
  comment?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionReportEventsFilterInput | null > | null,
  or?: Array< ModelSubscriptionReportEventsFilterInput | null > | null,
};

export type ModelSubscriptionMessageFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  text?: ModelSubscriptionStringInput | null,
  owner?: ModelSubscriptionIDInput | null,
  room?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMessageFilterInput | null > | null,
  or?: Array< ModelSubscriptionMessageFilterInput | null > | null,
};

export type ModelSubscriptionRoomFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  owner?: ModelSubscriptionIDInput | null,
  event?: ModelSubscriptionIDInput | null,
  users?: ModelSubscriptionIDInput | null,
  groupChat?: ModelSubscriptionBooleanInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  lastMessageID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionRoomFilterInput | null > | null,
  or?: Array< ModelSubscriptionRoomFilterInput | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionUsersToRoomsFilterInput = {
  user?: ModelSubscriptionIDInput | null,
  room?: ModelSubscriptionIDInput | null,
  groupChat?: ModelSubscriptionBooleanInput | null,
  unreadCount?: ModelSubscriptionIntInput | null,
  lastAckMessageId?: ModelSubscriptionIDInput | null,
  id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUsersToRoomsFilterInput | null > | null,
  or?: Array< ModelSubscriptionUsersToRoomsFilterInput | null > | null,
};

export type ModelSubscriptionLastStartTimeFilterInput = {
  user?: ModelSubscriptionIDInput | null,
  lastStartTime?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionLastStartTimeFilterInput | null > | null,
  or?: Array< ModelSubscriptionLastStartTimeFilterInput | null > | null,
};

export type ModelSubscriptionLastActiveTimeFilterInput = {
  user?: ModelSubscriptionIDInput | null,
  lastActiveTime?: ModelSubscriptionIntInput | null,
  id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionLastActiveTimeFilterInput | null > | null,
  or?: Array< ModelSubscriptionLastActiveTimeFilterInput | null > | null,
};

export type ModelSubscriptionUserDevicesFilterInput = {
  user?: ModelSubscriptionIDInput | null,
  deviceToken?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserDevicesFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserDevicesFilterInput | null > | null,
};

export type IncrementUnreadCountMutationVariables = {
  userId: string,
  roomId: string,
};

export type IncrementUnreadCountMutation = {
  incrementUnreadCount?:  {
    __typename: "UsersToRooms",
    user: string,
    room?: string | null,
    groupChat?: boolean | null,
    unreadCount?: number | null,
    lastAckMessageId?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ClearUnreadCountMutationVariables = {
  userId: string,
  roomId: string,
};

export type ClearUnreadCountMutation = {
  clearUnreadCount?:  {
    __typename: "UsersToRooms",
    user: string,
    room?: string | null,
    groupChat?: boolean | null,
    unreadCount?: number | null,
    lastAckMessageId?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSupportedDomainsMutationVariables = {
  input: CreateSupportedDomainsInput,
  condition?: ModelSupportedDomainsConditionInput | null,
};

export type CreateSupportedDomainsMutation = {
  createSupportedDomains?:  {
    __typename: "SupportedDomains",
    supportedDomains?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSupportedDomainsMutationVariables = {
  input: UpdateSupportedDomainsInput,
  condition?: ModelSupportedDomainsConditionInput | null,
};

export type UpdateSupportedDomainsMutation = {
  updateSupportedDomains?:  {
    __typename: "SupportedDomains",
    supportedDomains?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSupportedDomainsMutationVariables = {
  input: DeleteSupportedDomainsInput,
  condition?: ModelSupportedDomainsConditionInput | null,
};

export type DeleteSupportedDomainsMutation = {
  deleteSupportedDomains?:  {
    __typename: "SupportedDomains",
    supportedDomains?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAccountMutationVariables = {
  input: CreateAccountInput,
  condition?: ModelAccountConditionInput | null,
};

export type CreateAccountMutation = {
  createAccount?:  {
    __typename: "Account",
    id: string,
    email?: string | null,
    userName?: string | null,
    userProfile?:  {
      __typename: "UserProfile",
      title?: string | null,
      industry?: Industry | null,
      language?: Array< Language | null > | null,
      age?: number | null,
      gender?: Gender | null,
      intention?: Array< Intention | null > | null,
      interestedIndustries?: Array< Industry | null > | null,
      selfIntroduction?: string | null,
      expertise?: Array< string | null > | null,
      photoIndex?: Array< number | null > | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAccountMutationVariables = {
  input: UpdateAccountInput,
  condition?: ModelAccountConditionInput | null,
};

export type UpdateAccountMutation = {
  updateAccount?:  {
    __typename: "Account",
    id: string,
    email?: string | null,
    userName?: string | null,
    userProfile?:  {
      __typename: "UserProfile",
      title?: string | null,
      industry?: Industry | null,
      language?: Array< Language | null > | null,
      age?: number | null,
      gender?: Gender | null,
      intention?: Array< Intention | null > | null,
      interestedIndustries?: Array< Industry | null > | null,
      selfIntroduction?: string | null,
      expertise?: Array< string | null > | null,
      photoIndex?: Array< number | null > | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAccountMutationVariables = {
  input: DeleteAccountInput,
  condition?: ModelAccountConditionInput | null,
};

export type DeleteAccountMutation = {
  deleteAccount?:  {
    __typename: "Account",
    id: string,
    email?: string | null,
    userName?: string | null,
    userProfile?:  {
      __typename: "UserProfile",
      title?: string | null,
      industry?: Industry | null,
      language?: Array< Language | null > | null,
      age?: number | null,
      gender?: Gender | null,
      intention?: Array< Intention | null > | null,
      interestedIndustries?: Array< Industry | null > | null,
      selfIntroduction?: string | null,
      expertise?: Array< string | null > | null,
      photoIndex?: Array< number | null > | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateFollowsMutationVariables = {
  input: CreateFollowsInput,
  condition?: ModelFollowsConditionInput | null,
};

export type CreateFollowsMutation = {
  createFollows?:  {
    __typename: "Follows",
    from?: string | null,
    to?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFollowsMutationVariables = {
  input: UpdateFollowsInput,
  condition?: ModelFollowsConditionInput | null,
};

export type UpdateFollowsMutation = {
  updateFollows?:  {
    __typename: "Follows",
    from?: string | null,
    to?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFollowsMutationVariables = {
  input: DeleteFollowsInput,
  condition?: ModelFollowsConditionInput | null,
};

export type DeleteFollowsMutation = {
  deleteFollows?:  {
    __typename: "Follows",
    from?: string | null,
    to?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSwipeHistoryMutationVariables = {
  input: CreateSwipeHistoryInput,
  condition?: ModelSwipeHistoryConditionInput | null,
};

export type CreateSwipeHistoryMutation = {
  createSwipeHistory?:  {
    __typename: "SwipeHistory",
    from?: string | null,
    to?: string | null,
    swipeType?: SwipeType | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSwipeHistoryMutationVariables = {
  input: UpdateSwipeHistoryInput,
  condition?: ModelSwipeHistoryConditionInput | null,
};

export type UpdateSwipeHistoryMutation = {
  updateSwipeHistory?:  {
    __typename: "SwipeHistory",
    from?: string | null,
    to?: string | null,
    swipeType?: SwipeType | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSwipeHistoryMutationVariables = {
  input: DeleteSwipeHistoryInput,
  condition?: ModelSwipeHistoryConditionInput | null,
};

export type DeleteSwipeHistoryMutation = {
  deleteSwipeHistory?:  {
    __typename: "SwipeHistory",
    from?: string | null,
    to?: string | null,
    swipeType?: SwipeType | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateEventMutationVariables = {
  input: CreateEventInput,
  condition?: ModelEventConditionInput | null,
};

export type CreateEventMutation = {
  createEvent?:  {
    __typename: "Event",
    id: string,
    eventName?: string | null,
    hostId?: string | null,
    industries?: Array< Industry | null > | null,
    eventType?: EventType | null,
    location?:  {
      __typename: "Location",
      address?: string | null,
      city?: string | null,
      state?: string | null,
      country?: string | null,
      zipCode?: string | null,
    } | null,
    eventLink?: string | null,
    startTime?: string | null,
    capacity?: number | null,
    genders?: Array< Gender | null > | null,
    minAge?: number | null,
    maxAge?: number | null,
    language?: Language | null,
    description?: string | null,
    privacy?: EventPrivacy | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateEventMutationVariables = {
  input: UpdateEventInput,
  condition?: ModelEventConditionInput | null,
};

export type UpdateEventMutation = {
  updateEvent?:  {
    __typename: "Event",
    id: string,
    eventName?: string | null,
    hostId?: string | null,
    industries?: Array< Industry | null > | null,
    eventType?: EventType | null,
    location?:  {
      __typename: "Location",
      address?: string | null,
      city?: string | null,
      state?: string | null,
      country?: string | null,
      zipCode?: string | null,
    } | null,
    eventLink?: string | null,
    startTime?: string | null,
    capacity?: number | null,
    genders?: Array< Gender | null > | null,
    minAge?: number | null,
    maxAge?: number | null,
    language?: Language | null,
    description?: string | null,
    privacy?: EventPrivacy | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteEventMutationVariables = {
  input: DeleteEventInput,
  condition?: ModelEventConditionInput | null,
};

export type DeleteEventMutation = {
  deleteEvent?:  {
    __typename: "Event",
    id: string,
    eventName?: string | null,
    hostId?: string | null,
    industries?: Array< Industry | null > | null,
    eventType?: EventType | null,
    location?:  {
      __typename: "Location",
      address?: string | null,
      city?: string | null,
      state?: string | null,
      country?: string | null,
      zipCode?: string | null,
    } | null,
    eventLink?: string | null,
    startTime?: string | null,
    capacity?: number | null,
    genders?: Array< Gender | null > | null,
    minAge?: number | null,
    maxAge?: number | null,
    language?: Language | null,
    description?: string | null,
    privacy?: EventPrivacy | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUsersToEventsMutationVariables = {
  input: CreateUsersToEventsInput,
  condition?: ModelUsersToEventsConditionInput | null,
};

export type CreateUsersToEventsMutation = {
  createUsersToEvents?:  {
    __typename: "UsersToEvents",
    user: string,
    event?: string | null,
    status?: EventStatus | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUsersToEventsMutationVariables = {
  input: UpdateUsersToEventsInput,
  condition?: ModelUsersToEventsConditionInput | null,
};

export type UpdateUsersToEventsMutation = {
  updateUsersToEvents?:  {
    __typename: "UsersToEvents",
    user: string,
    event?: string | null,
    status?: EventStatus | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUsersToEventsMutationVariables = {
  input: DeleteUsersToEventsInput,
  condition?: ModelUsersToEventsConditionInput | null,
};

export type DeleteUsersToEventsMutation = {
  deleteUsersToEvents?:  {
    __typename: "UsersToEvents",
    user: string,
    event?: string | null,
    status?: EventStatus | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateReportUsersMutationVariables = {
  input: CreateReportUsersInput,
  condition?: ModelReportUsersConditionInput | null,
};

export type CreateReportUsersMutation = {
  createReportUsers?:  {
    __typename: "ReportUsers",
    reportedUser: string,
    reporter: string,
    reason?: string | null,
    comment?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateReportUsersMutationVariables = {
  input: UpdateReportUsersInput,
  condition?: ModelReportUsersConditionInput | null,
};

export type UpdateReportUsersMutation = {
  updateReportUsers?:  {
    __typename: "ReportUsers",
    reportedUser: string,
    reporter: string,
    reason?: string | null,
    comment?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteReportUsersMutationVariables = {
  input: DeleteReportUsersInput,
  condition?: ModelReportUsersConditionInput | null,
};

export type DeleteReportUsersMutation = {
  deleteReportUsers?:  {
    __typename: "ReportUsers",
    reportedUser: string,
    reporter: string,
    reason?: string | null,
    comment?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateReportEventsMutationVariables = {
  input: CreateReportEventsInput,
  condition?: ModelReportEventsConditionInput | null,
};

export type CreateReportEventsMutation = {
  createReportEvents?:  {
    __typename: "ReportEvents",
    reportedEvent: string,
    reporter: string,
    reason?: string | null,
    comment?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateReportEventsMutationVariables = {
  input: UpdateReportEventsInput,
  condition?: ModelReportEventsConditionInput | null,
};

export type UpdateReportEventsMutation = {
  updateReportEvents?:  {
    __typename: "ReportEvents",
    reportedEvent: string,
    reporter: string,
    reason?: string | null,
    comment?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteReportEventsMutationVariables = {
  input: DeleteReportEventsInput,
  condition?: ModelReportEventsConditionInput | null,
};

export type DeleteReportEventsMutation = {
  deleteReportEvents?:  {
    __typename: "ReportEvents",
    reportedEvent: string,
    reporter: string,
    reason?: string | null,
    comment?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMessageMutationVariables = {
  input: CreateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type CreateMessageMutation = {
  createMessage?:  {
    __typename: "Message",
    id: string,
    text?: string | null,
    owner: string,
    room: string,
    createdAt?: string | null,
    type?: MessageType | null,
    updatedAt: string,
  } | null,
};

export type UpdateMessageMutationVariables = {
  input: UpdateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type UpdateMessageMutation = {
  updateMessage?:  {
    __typename: "Message",
    id: string,
    text?: string | null,
    owner: string,
    room: string,
    createdAt?: string | null,
    type?: MessageType | null,
    updatedAt: string,
  } | null,
};

export type DeleteMessageMutationVariables = {
  input: DeleteMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type DeleteMessageMutation = {
  deleteMessage?:  {
    __typename: "Message",
    id: string,
    text?: string | null,
    owner: string,
    room: string,
    createdAt?: string | null,
    type?: MessageType | null,
    updatedAt: string,
  } | null,
};

export type CreateRoomMutationVariables = {
  input: CreateRoomInput,
  condition?: ModelRoomConditionInput | null,
};

export type CreateRoomMutation = {
  createRoom?:  {
    __typename: "Room",
    id: string,
    name?: string | null,
    owner: string,
    event?: string | null,
    users?: Array< string | null > | null,
    groupChat?: boolean | null,
    active?: boolean | null,
    lastMessageID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateRoomMutationVariables = {
  input: UpdateRoomInput,
  condition?: ModelRoomConditionInput | null,
};

export type UpdateRoomMutation = {
  updateRoom?:  {
    __typename: "Room",
    id: string,
    name?: string | null,
    owner: string,
    event?: string | null,
    users?: Array< string | null > | null,
    groupChat?: boolean | null,
    active?: boolean | null,
    lastMessageID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteRoomMutationVariables = {
  input: DeleteRoomInput,
  condition?: ModelRoomConditionInput | null,
};

export type DeleteRoomMutation = {
  deleteRoom?:  {
    __typename: "Room",
    id: string,
    name?: string | null,
    owner: string,
    event?: string | null,
    users?: Array< string | null > | null,
    groupChat?: boolean | null,
    active?: boolean | null,
    lastMessageID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUsersToRoomsMutationVariables = {
  input: CreateUsersToRoomsInput,
  condition?: ModelUsersToRoomsConditionInput | null,
};

export type CreateUsersToRoomsMutation = {
  createUsersToRooms?:  {
    __typename: "UsersToRooms",
    user: string,
    room?: string | null,
    groupChat?: boolean | null,
    unreadCount?: number | null,
    lastAckMessageId?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUsersToRoomsMutationVariables = {
  input: UpdateUsersToRoomsInput,
  condition?: ModelUsersToRoomsConditionInput | null,
};

export type UpdateUsersToRoomsMutation = {
  updateUsersToRooms?:  {
    __typename: "UsersToRooms",
    user: string,
    room?: string | null,
    groupChat?: boolean | null,
    unreadCount?: number | null,
    lastAckMessageId?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUsersToRoomsMutationVariables = {
  input: DeleteUsersToRoomsInput,
  condition?: ModelUsersToRoomsConditionInput | null,
};

export type DeleteUsersToRoomsMutation = {
  deleteUsersToRooms?:  {
    __typename: "UsersToRooms",
    user: string,
    room?: string | null,
    groupChat?: boolean | null,
    unreadCount?: number | null,
    lastAckMessageId?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateLastStartTimeMutationVariables = {
  input: CreateLastStartTimeInput,
  condition?: ModelLastStartTimeConditionInput | null,
};

export type CreateLastStartTimeMutation = {
  createLastStartTime?:  {
    __typename: "LastStartTime",
    user: string,
    lastStartTime: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateLastStartTimeMutationVariables = {
  input: UpdateLastStartTimeInput,
  condition?: ModelLastStartTimeConditionInput | null,
};

export type UpdateLastStartTimeMutation = {
  updateLastStartTime?:  {
    __typename: "LastStartTime",
    user: string,
    lastStartTime: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteLastStartTimeMutationVariables = {
  input: DeleteLastStartTimeInput,
  condition?: ModelLastStartTimeConditionInput | null,
};

export type DeleteLastStartTimeMutation = {
  deleteLastStartTime?:  {
    __typename: "LastStartTime",
    user: string,
    lastStartTime: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateLastActiveTimeMutationVariables = {
  input: CreateLastActiveTimeInput,
  condition?: ModelLastActiveTimeConditionInput | null,
};

export type CreateLastActiveTimeMutation = {
  createLastActiveTime?:  {
    __typename: "LastActiveTime",
    user: string,
    lastActiveTime: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateLastActiveTimeMutationVariables = {
  input: UpdateLastActiveTimeInput,
  condition?: ModelLastActiveTimeConditionInput | null,
};

export type UpdateLastActiveTimeMutation = {
  updateLastActiveTime?:  {
    __typename: "LastActiveTime",
    user: string,
    lastActiveTime: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteLastActiveTimeMutationVariables = {
  input: DeleteLastActiveTimeInput,
  condition?: ModelLastActiveTimeConditionInput | null,
};

export type DeleteLastActiveTimeMutation = {
  deleteLastActiveTime?:  {
    __typename: "LastActiveTime",
    user: string,
    lastActiveTime: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserDevicesMutationVariables = {
  input: CreateUserDevicesInput,
  condition?: ModelUserDevicesConditionInput | null,
};

export type CreateUserDevicesMutation = {
  createUserDevices?:  {
    __typename: "UserDevices",
    user: string,
    deviceToken?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserDevicesMutationVariables = {
  input: UpdateUserDevicesInput,
  condition?: ModelUserDevicesConditionInput | null,
};

export type UpdateUserDevicesMutation = {
  updateUserDevices?:  {
    __typename: "UserDevices",
    user: string,
    deviceToken?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserDevicesMutationVariables = {
  input: DeleteUserDevicesInput,
  condition?: ModelUserDevicesConditionInput | null,
};

export type DeleteUserDevicesMutation = {
  deleteUserDevices?:  {
    __typename: "UserDevices",
    user: string,
    deviceToken?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type SearchUserByDistanceQueryVariables = {
  coordinates: CoordinatesInput,
  mi?: number | null,
};

export type SearchUserByDistanceQuery = {
  searchUserByDistance?:  {
    __typename: "AccountConnection",
    users?: Array< string | null > | null,
    total?: number | null,
  } | null,
};

export type SearchEventByDistanceQueryVariables = {
  coordinates: CoordinatesInput,
  mi?: number | null,
  skip?: number | null,
  keyword?: string | null,
  minAge?: number | null,
  maxAge?: number | null,
  minCapacity?: number | null,
  maxCapacity?: number | null,
  startTime?: string | null,
  endTime?: string | null,
  industries?: Array< Industry | null > | null,
  eventType?: Array< EventType | null > | null,
  genders?: Array< Gender | null > | null,
  language?: Array< Language | null > | null,
  sortBy?: EventSortBy | null,
};

export type SearchEventByDistanceQuery = {
  searchEventByDistance?:  {
    __typename: "EventConnection",
    events?:  Array< {
      __typename: "Event",
      id: string,
      eventName?: string | null,
      hostId?: string | null,
      industries?: Array< Industry | null > | null,
      eventType?: EventType | null,
      eventLink?: string | null,
      startTime?: string | null,
      capacity?: number | null,
      genders?: Array< Gender | null > | null,
      minAge?: number | null,
      maxAge?: number | null,
      language?: Language | null,
      description?: string | null,
      privacy?: EventPrivacy | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    total?: number | null,
  } | null,
};

export type SearchAccountByScoreQueryVariables = {
  language?: Array< string | null > | null,
  expertise?: string | null,
  industry?: string | null,
  title?: string | null,
  companyName?: string | null,
  interestedIndustry?: Array< string | null > | null,
  intention?: Array< string | null > | null,
  latitude?: number | null,
  longitude?: number | null,
  filterList?: Array< string | null > | null,
};

export type SearchAccountByScoreQuery = {
  searchAccountByScore?:  {
    __typename: "AccountConnection",
    users?: Array< string | null > | null,
    total?: number | null,
  } | null,
};

export type SearchAccountByStringQueryVariables = {
  input?: string | null,
};

export type SearchAccountByStringQuery = {
  searchAccountByString?:  {
    __typename: "AccountDetailConnection",
    users?:  Array< {
      __typename: "Account",
      id: string,
      email?: string | null,
      userName?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    total?: number | null,
  } | null,
};

export type GetSupportedDomainsQueryVariables = {
  id: string,
};

export type GetSupportedDomainsQuery = {
  getSupportedDomains?:  {
    __typename: "SupportedDomains",
    supportedDomains?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSupportedDomainsQueryVariables = {
  filter?: ModelSupportedDomainsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSupportedDomainsQuery = {
  listSupportedDomains?:  {
    __typename: "ModelSupportedDomainsConnection",
    items:  Array< {
      __typename: "SupportedDomains",
      supportedDomains?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SupportedDomainsBySupportedDomainsQueryVariables = {
  supportedDomains: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSupportedDomainsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SupportedDomainsBySupportedDomainsQuery = {
  supportedDomainsBySupportedDomains?:  {
    __typename: "ModelSupportedDomainsConnection",
    items:  Array< {
      __typename: "SupportedDomains",
      supportedDomains?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAccountQueryVariables = {
  id: string,
};

export type GetAccountQuery = {
  getAccount?:  {
    __typename: "Account",
    id: string,
    email?: string | null,
    userName?: string | null,
    userProfile?:  {
      __typename: "UserProfile",
      title?: string | null,
      industry?: Industry | null,
      language?: Array< Language | null > | null,
      age?: number | null,
      gender?: Gender | null,
      intention?: Array< Intention | null > | null,
      interestedIndustries?: Array< Industry | null > | null,
      selfIntroduction?: string | null,
      expertise?: Array< string | null > | null,
      photoIndex?: Array< number | null > | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAccountsQueryVariables = {
  id?: string | null,
  filter?: ModelAccountFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListAccountsQuery = {
  listAccounts?:  {
    __typename: "ModelAccountConnection",
    items:  Array< {
      __typename: "Account",
      id: string,
      email?: string | null,
      userName?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AccountsByEmailQueryVariables = {
  email: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAccountFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AccountsByEmailQuery = {
  accountsByEmail?:  {
    __typename: "ModelAccountConnection",
    items:  Array< {
      __typename: "Account",
      id: string,
      email?: string | null,
      userName?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AccountsByUserNameQueryVariables = {
  userName: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAccountFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AccountsByUserNameQuery = {
  accountsByUserName?:  {
    __typename: "ModelAccountConnection",
    items:  Array< {
      __typename: "Account",
      id: string,
      email?: string | null,
      userName?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SearchAccountsQueryVariables = {
  filter?: SearchableAccountFilterInput | null,
  sort?: Array< SearchableAccountSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchableAccountAggregationInput | null > | null,
};

export type SearchAccountsQuery = {
  searchAccounts?:  {
    __typename: "SearchableAccountConnection",
    items:  Array< {
      __typename: "Account",
      id: string,
      email?: string | null,
      userName?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type GetFollowsQueryVariables = {
  id: string,
};

export type GetFollowsQuery = {
  getFollows?:  {
    __typename: "Follows",
    from?: string | null,
    to?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFollowsQueryVariables = {
  filter?: ModelFollowsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFollowsQuery = {
  listFollows?:  {
    __typename: "ModelFollowsConnection",
    items:  Array< {
      __typename: "Follows",
      from?: string | null,
      to?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type FollowsByFromQueryVariables = {
  from: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelFollowsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type FollowsByFromQuery = {
  followsByFrom?:  {
    __typename: "ModelFollowsConnection",
    items:  Array< {
      __typename: "Follows",
      from?: string | null,
      to?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type FollowsByToQueryVariables = {
  to: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelFollowsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type FollowsByToQuery = {
  followsByTo?:  {
    __typename: "ModelFollowsConnection",
    items:  Array< {
      __typename: "Follows",
      from?: string | null,
      to?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSwipeHistoryQueryVariables = {
  id: string,
};

export type GetSwipeHistoryQuery = {
  getSwipeHistory?:  {
    __typename: "SwipeHistory",
    from?: string | null,
    to?: string | null,
    swipeType?: SwipeType | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSwipeHistoriesQueryVariables = {
  filter?: ModelSwipeHistoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSwipeHistoriesQuery = {
  listSwipeHistories?:  {
    __typename: "ModelSwipeHistoryConnection",
    items:  Array< {
      __typename: "SwipeHistory",
      from?: string | null,
      to?: string | null,
      swipeType?: SwipeType | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SwipeHistoryByUserAndSwipeTypeQueryVariables = {
  from: string,
  swipeType?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSwipeHistoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SwipeHistoryByUserAndSwipeTypeQuery = {
  SwipeHistoryByUserAndSwipeType?:  {
    __typename: "ModelSwipeHistoryConnection",
    items:  Array< {
      __typename: "SwipeHistory",
      from?: string | null,
      to?: string | null,
      swipeType?: SwipeType | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetEventQueryVariables = {
  id: string,
};

export type GetEventQuery = {
  getEvent?:  {
    __typename: "Event",
    id: string,
    eventName?: string | null,
    hostId?: string | null,
    industries?: Array< Industry | null > | null,
    eventType?: EventType | null,
    location?:  {
      __typename: "Location",
      address?: string | null,
      city?: string | null,
      state?: string | null,
      country?: string | null,
      zipCode?: string | null,
    } | null,
    eventLink?: string | null,
    startTime?: string | null,
    capacity?: number | null,
    genders?: Array< Gender | null > | null,
    minAge?: number | null,
    maxAge?: number | null,
    language?: Language | null,
    description?: string | null,
    privacy?: EventPrivacy | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListEventsQueryVariables = {
  id?: string | null,
  filter?: ModelEventFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListEventsQuery = {
  listEvents?:  {
    __typename: "ModelEventConnection",
    items:  Array< {
      __typename: "Event",
      id: string,
      eventName?: string | null,
      hostId?: string | null,
      industries?: Array< Industry | null > | null,
      eventType?: EventType | null,
      eventLink?: string | null,
      startTime?: string | null,
      capacity?: number | null,
      genders?: Array< Gender | null > | null,
      minAge?: number | null,
      maxAge?: number | null,
      language?: Language | null,
      description?: string | null,
      privacy?: EventPrivacy | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type EventsByHostIdQueryVariables = {
  hostId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelEventFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type EventsByHostIdQuery = {
  eventsByHostId?:  {
    __typename: "ModelEventConnection",
    items:  Array< {
      __typename: "Event",
      id: string,
      eventName?: string | null,
      hostId?: string | null,
      industries?: Array< Industry | null > | null,
      eventType?: EventType | null,
      eventLink?: string | null,
      startTime?: string | null,
      capacity?: number | null,
      genders?: Array< Gender | null > | null,
      minAge?: number | null,
      maxAge?: number | null,
      language?: Language | null,
      description?: string | null,
      privacy?: EventPrivacy | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SearchEventsQueryVariables = {
  filter?: SearchableEventFilterInput | null,
  sort?: Array< SearchableEventSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchableEventAggregationInput | null > | null,
};

export type SearchEventsQuery = {
  searchEvents?:  {
    __typename: "SearchableEventConnection",
    items:  Array< {
      __typename: "Event",
      id: string,
      eventName?: string | null,
      hostId?: string | null,
      industries?: Array< Industry | null > | null,
      eventType?: EventType | null,
      eventLink?: string | null,
      startTime?: string | null,
      capacity?: number | null,
      genders?: Array< Gender | null > | null,
      minAge?: number | null,
      maxAge?: number | null,
      language?: Language | null,
      description?: string | null,
      privacy?: EventPrivacy | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type GetUsersToEventsQueryVariables = {
  id: string,
};

export type GetUsersToEventsQuery = {
  getUsersToEvents?:  {
    __typename: "UsersToEvents",
    user: string,
    event?: string | null,
    status?: EventStatus | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersToEventsQueryVariables = {
  filter?: ModelUsersToEventsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersToEventsQuery = {
  listUsersToEvents?:  {
    __typename: "ModelUsersToEventsConnection",
    items:  Array< {
      __typename: "UsersToEvents",
      user: string,
      event?: string | null,
      status?: EventStatus | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UsersToEventsByUserQueryVariables = {
  user: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUsersToEventsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UsersToEventsByUserQuery = {
  usersToEventsByUser?:  {
    __typename: "ModelUsersToEventsConnection",
    items:  Array< {
      __typename: "UsersToEvents",
      user: string,
      event?: string | null,
      status?: EventStatus | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UsersToEventsByEventQueryVariables = {
  event: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUsersToEventsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UsersToEventsByEventQuery = {
  usersToEventsByEvent?:  {
    __typename: "ModelUsersToEventsConnection",
    items:  Array< {
      __typename: "UsersToEvents",
      user: string,
      event?: string | null,
      status?: EventStatus | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetReportUsersQueryVariables = {
  id: string,
};

export type GetReportUsersQuery = {
  getReportUsers?:  {
    __typename: "ReportUsers",
    reportedUser: string,
    reporter: string,
    reason?: string | null,
    comment?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListReportUsersQueryVariables = {
  filter?: ModelReportUsersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListReportUsersQuery = {
  listReportUsers?:  {
    __typename: "ModelReportUsersConnection",
    items:  Array< {
      __typename: "ReportUsers",
      reportedUser: string,
      reporter: string,
      reason?: string | null,
      comment?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetReportEventsQueryVariables = {
  id: string,
};

export type GetReportEventsQuery = {
  getReportEvents?:  {
    __typename: "ReportEvents",
    reportedEvent: string,
    reporter: string,
    reason?: string | null,
    comment?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListReportEventsQueryVariables = {
  filter?: ModelReportEventsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListReportEventsQuery = {
  listReportEvents?:  {
    __typename: "ModelReportEventsConnection",
    items:  Array< {
      __typename: "ReportEvents",
      reportedEvent: string,
      reporter: string,
      reason?: string | null,
      comment?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMessageQueryVariables = {
  id: string,
};

export type GetMessageQuery = {
  getMessage?:  {
    __typename: "Message",
    id: string,
    text?: string | null,
    owner: string,
    room: string,
    createdAt?: string | null,
    type?: MessageType | null,
    updatedAt: string,
  } | null,
};

export type ListMessagesQueryVariables = {
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessagesQuery = {
  listMessages?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      text?: string | null,
      owner: string,
      room: string,
      createdAt?: string | null,
      type?: MessageType | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type MessageByRoomAndCreatedAtQueryVariables = {
  room: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MessageByRoomAndCreatedAtQuery = {
  messageByRoomAndCreatedAt?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      text?: string | null,
      owner: string,
      room: string,
      createdAt?: string | null,
      type?: MessageType | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetRoomQueryVariables = {
  id: string,
};

export type GetRoomQuery = {
  getRoom?:  {
    __typename: "Room",
    id: string,
    name?: string | null,
    owner: string,
    event?: string | null,
    users?: Array< string | null > | null,
    groupChat?: boolean | null,
    active?: boolean | null,
    lastMessageID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListRoomsQueryVariables = {
  filter?: ModelRoomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRoomsQuery = {
  listRooms?:  {
    __typename: "ModelRoomConnection",
    items:  Array< {
      __typename: "Room",
      id: string,
      name?: string | null,
      owner: string,
      event?: string | null,
      users?: Array< string | null > | null,
      groupChat?: boolean | null,
      active?: boolean | null,
      lastMessageID?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type RoomsByEventQueryVariables = {
  event: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelRoomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type RoomsByEventQuery = {
  roomsByEvent?:  {
    __typename: "ModelRoomConnection",
    items:  Array< {
      __typename: "Room",
      id: string,
      name?: string | null,
      owner: string,
      event?: string | null,
      users?: Array< string | null > | null,
      groupChat?: boolean | null,
      active?: boolean | null,
      lastMessageID?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUsersToRoomsQueryVariables = {
  id: string,
};

export type GetUsersToRoomsQuery = {
  getUsersToRooms?:  {
    __typename: "UsersToRooms",
    user: string,
    room?: string | null,
    groupChat?: boolean | null,
    unreadCount?: number | null,
    lastAckMessageId?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersToRoomsQueryVariables = {
  filter?: ModelUsersToRoomsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersToRoomsQuery = {
  listUsersToRooms?:  {
    __typename: "ModelUsersToRoomsConnection",
    items:  Array< {
      __typename: "UsersToRooms",
      user: string,
      room?: string | null,
      groupChat?: boolean | null,
      unreadCount?: number | null,
      lastAckMessageId?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UsersToRoomsByUserQueryVariables = {
  user: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUsersToRoomsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UsersToRoomsByUserQuery = {
  usersToRoomsByUser?:  {
    __typename: "ModelUsersToRoomsConnection",
    items:  Array< {
      __typename: "UsersToRooms",
      user: string,
      room?: string | null,
      groupChat?: boolean | null,
      unreadCount?: number | null,
      lastAckMessageId?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UsersToRoomsByRoomQueryVariables = {
  room: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUsersToRoomsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UsersToRoomsByRoomQuery = {
  usersToRoomsByRoom?:  {
    __typename: "ModelUsersToRoomsConnection",
    items:  Array< {
      __typename: "UsersToRooms",
      user: string,
      room?: string | null,
      groupChat?: boolean | null,
      unreadCount?: number | null,
      lastAckMessageId?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetLastStartTimeQueryVariables = {
  user: string,
};

export type GetLastStartTimeQuery = {
  getLastStartTime?:  {
    __typename: "LastStartTime",
    user: string,
    lastStartTime: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListLastStartTimesQueryVariables = {
  user?: string | null,
  filter?: ModelLastStartTimeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListLastStartTimesQuery = {
  listLastStartTimes?:  {
    __typename: "ModelLastStartTimeConnection",
    items:  Array< {
      __typename: "LastStartTime",
      user: string,
      lastStartTime: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetLastActiveTimeQueryVariables = {
  user: string,
};

export type GetLastActiveTimeQuery = {
  getLastActiveTime?:  {
    __typename: "LastActiveTime",
    user: string,
    lastActiveTime: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListLastActiveTimesQueryVariables = {
  user?: string | null,
  filter?: ModelLastActiveTimeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListLastActiveTimesQuery = {
  listLastActiveTimes?:  {
    __typename: "ModelLastActiveTimeConnection",
    items:  Array< {
      __typename: "LastActiveTime",
      user: string,
      lastActiveTime: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserDevicesQueryVariables = {
  user: string,
};

export type GetUserDevicesQuery = {
  getUserDevices?:  {
    __typename: "UserDevices",
    user: string,
    deviceToken?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUserDevicesQueryVariables = {
  user?: string | null,
  filter?: ModelUserDevicesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListUserDevicesQuery = {
  listUserDevices?:  {
    __typename: "ModelUserDevicesConnection",
    items:  Array< {
      __typename: "UserDevices",
      user: string,
      deviceToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateSupportedDomainsSubscriptionVariables = {
  filter?: ModelSubscriptionSupportedDomainsFilterInput | null,
};

export type OnCreateSupportedDomainsSubscription = {
  onCreateSupportedDomains?:  {
    __typename: "SupportedDomains",
    supportedDomains?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSupportedDomainsSubscriptionVariables = {
  filter?: ModelSubscriptionSupportedDomainsFilterInput | null,
};

export type OnUpdateSupportedDomainsSubscription = {
  onUpdateSupportedDomains?:  {
    __typename: "SupportedDomains",
    supportedDomains?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSupportedDomainsSubscriptionVariables = {
  filter?: ModelSubscriptionSupportedDomainsFilterInput | null,
};

export type OnDeleteSupportedDomainsSubscription = {
  onDeleteSupportedDomains?:  {
    __typename: "SupportedDomains",
    supportedDomains?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAccountSubscriptionVariables = {
  filter?: ModelSubscriptionAccountFilterInput | null,
};

export type OnCreateAccountSubscription = {
  onCreateAccount?:  {
    __typename: "Account",
    id: string,
    email?: string | null,
    userName?: string | null,
    userProfile?:  {
      __typename: "UserProfile",
      title?: string | null,
      industry?: Industry | null,
      language?: Array< Language | null > | null,
      age?: number | null,
      gender?: Gender | null,
      intention?: Array< Intention | null > | null,
      interestedIndustries?: Array< Industry | null > | null,
      selfIntroduction?: string | null,
      expertise?: Array< string | null > | null,
      photoIndex?: Array< number | null > | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAccountSubscriptionVariables = {
  filter?: ModelSubscriptionAccountFilterInput | null,
};

export type OnUpdateAccountSubscription = {
  onUpdateAccount?:  {
    __typename: "Account",
    id: string,
    email?: string | null,
    userName?: string | null,
    userProfile?:  {
      __typename: "UserProfile",
      title?: string | null,
      industry?: Industry | null,
      language?: Array< Language | null > | null,
      age?: number | null,
      gender?: Gender | null,
      intention?: Array< Intention | null > | null,
      interestedIndustries?: Array< Industry | null > | null,
      selfIntroduction?: string | null,
      expertise?: Array< string | null > | null,
      photoIndex?: Array< number | null > | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAccountSubscriptionVariables = {
  filter?: ModelSubscriptionAccountFilterInput | null,
};

export type OnDeleteAccountSubscription = {
  onDeleteAccount?:  {
    __typename: "Account",
    id: string,
    email?: string | null,
    userName?: string | null,
    userProfile?:  {
      __typename: "UserProfile",
      title?: string | null,
      industry?: Industry | null,
      language?: Array< Language | null > | null,
      age?: number | null,
      gender?: Gender | null,
      intention?: Array< Intention | null > | null,
      interestedIndustries?: Array< Industry | null > | null,
      selfIntroduction?: string | null,
      expertise?: Array< string | null > | null,
      photoIndex?: Array< number | null > | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateFollowsSubscriptionVariables = {
  filter?: ModelSubscriptionFollowsFilterInput | null,
};

export type OnCreateFollowsSubscription = {
  onCreateFollows?:  {
    __typename: "Follows",
    from?: string | null,
    to?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFollowsSubscriptionVariables = {
  filter?: ModelSubscriptionFollowsFilterInput | null,
};

export type OnUpdateFollowsSubscription = {
  onUpdateFollows?:  {
    __typename: "Follows",
    from?: string | null,
    to?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFollowsSubscriptionVariables = {
  filter?: ModelSubscriptionFollowsFilterInput | null,
};

export type OnDeleteFollowsSubscription = {
  onDeleteFollows?:  {
    __typename: "Follows",
    from?: string | null,
    to?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSwipeHistorySubscriptionVariables = {
  filter?: ModelSubscriptionSwipeHistoryFilterInput | null,
};

export type OnCreateSwipeHistorySubscription = {
  onCreateSwipeHistory?:  {
    __typename: "SwipeHistory",
    from?: string | null,
    to?: string | null,
    swipeType?: SwipeType | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSwipeHistorySubscriptionVariables = {
  filter?: ModelSubscriptionSwipeHistoryFilterInput | null,
};

export type OnUpdateSwipeHistorySubscription = {
  onUpdateSwipeHistory?:  {
    __typename: "SwipeHistory",
    from?: string | null,
    to?: string | null,
    swipeType?: SwipeType | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSwipeHistorySubscriptionVariables = {
  filter?: ModelSubscriptionSwipeHistoryFilterInput | null,
};

export type OnDeleteSwipeHistorySubscription = {
  onDeleteSwipeHistory?:  {
    __typename: "SwipeHistory",
    from?: string | null,
    to?: string | null,
    swipeType?: SwipeType | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateEventSubscriptionVariables = {
  filter?: ModelSubscriptionEventFilterInput | null,
};

export type OnCreateEventSubscription = {
  onCreateEvent?:  {
    __typename: "Event",
    id: string,
    eventName?: string | null,
    hostId?: string | null,
    industries?: Array< Industry | null > | null,
    eventType?: EventType | null,
    location?:  {
      __typename: "Location",
      address?: string | null,
      city?: string | null,
      state?: string | null,
      country?: string | null,
      zipCode?: string | null,
    } | null,
    eventLink?: string | null,
    startTime?: string | null,
    capacity?: number | null,
    genders?: Array< Gender | null > | null,
    minAge?: number | null,
    maxAge?: number | null,
    language?: Language | null,
    description?: string | null,
    privacy?: EventPrivacy | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateEventSubscriptionVariables = {
  filter?: ModelSubscriptionEventFilterInput | null,
};

export type OnUpdateEventSubscription = {
  onUpdateEvent?:  {
    __typename: "Event",
    id: string,
    eventName?: string | null,
    hostId?: string | null,
    industries?: Array< Industry | null > | null,
    eventType?: EventType | null,
    location?:  {
      __typename: "Location",
      address?: string | null,
      city?: string | null,
      state?: string | null,
      country?: string | null,
      zipCode?: string | null,
    } | null,
    eventLink?: string | null,
    startTime?: string | null,
    capacity?: number | null,
    genders?: Array< Gender | null > | null,
    minAge?: number | null,
    maxAge?: number | null,
    language?: Language | null,
    description?: string | null,
    privacy?: EventPrivacy | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteEventSubscriptionVariables = {
  filter?: ModelSubscriptionEventFilterInput | null,
};

export type OnDeleteEventSubscription = {
  onDeleteEvent?:  {
    __typename: "Event",
    id: string,
    eventName?: string | null,
    hostId?: string | null,
    industries?: Array< Industry | null > | null,
    eventType?: EventType | null,
    location?:  {
      __typename: "Location",
      address?: string | null,
      city?: string | null,
      state?: string | null,
      country?: string | null,
      zipCode?: string | null,
    } | null,
    eventLink?: string | null,
    startTime?: string | null,
    capacity?: number | null,
    genders?: Array< Gender | null > | null,
    minAge?: number | null,
    maxAge?: number | null,
    language?: Language | null,
    description?: string | null,
    privacy?: EventPrivacy | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUsersToEventsSubscriptionVariables = {
  filter?: ModelSubscriptionUsersToEventsFilterInput | null,
};

export type OnCreateUsersToEventsSubscription = {
  onCreateUsersToEvents?:  {
    __typename: "UsersToEvents",
    user: string,
    event?: string | null,
    status?: EventStatus | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUsersToEventsSubscriptionVariables = {
  filter?: ModelSubscriptionUsersToEventsFilterInput | null,
};

export type OnUpdateUsersToEventsSubscription = {
  onUpdateUsersToEvents?:  {
    __typename: "UsersToEvents",
    user: string,
    event?: string | null,
    status?: EventStatus | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUsersToEventsSubscriptionVariables = {
  filter?: ModelSubscriptionUsersToEventsFilterInput | null,
};

export type OnDeleteUsersToEventsSubscription = {
  onDeleteUsersToEvents?:  {
    __typename: "UsersToEvents",
    user: string,
    event?: string | null,
    status?: EventStatus | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateReportUsersSubscriptionVariables = {
  filter?: ModelSubscriptionReportUsersFilterInput | null,
};

export type OnCreateReportUsersSubscription = {
  onCreateReportUsers?:  {
    __typename: "ReportUsers",
    reportedUser: string,
    reporter: string,
    reason?: string | null,
    comment?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateReportUsersSubscriptionVariables = {
  filter?: ModelSubscriptionReportUsersFilterInput | null,
};

export type OnUpdateReportUsersSubscription = {
  onUpdateReportUsers?:  {
    __typename: "ReportUsers",
    reportedUser: string,
    reporter: string,
    reason?: string | null,
    comment?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteReportUsersSubscriptionVariables = {
  filter?: ModelSubscriptionReportUsersFilterInput | null,
};

export type OnDeleteReportUsersSubscription = {
  onDeleteReportUsers?:  {
    __typename: "ReportUsers",
    reportedUser: string,
    reporter: string,
    reason?: string | null,
    comment?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateReportEventsSubscriptionVariables = {
  filter?: ModelSubscriptionReportEventsFilterInput | null,
};

export type OnCreateReportEventsSubscription = {
  onCreateReportEvents?:  {
    __typename: "ReportEvents",
    reportedEvent: string,
    reporter: string,
    reason?: string | null,
    comment?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateReportEventsSubscriptionVariables = {
  filter?: ModelSubscriptionReportEventsFilterInput | null,
};

export type OnUpdateReportEventsSubscription = {
  onUpdateReportEvents?:  {
    __typename: "ReportEvents",
    reportedEvent: string,
    reporter: string,
    reason?: string | null,
    comment?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteReportEventsSubscriptionVariables = {
  filter?: ModelSubscriptionReportEventsFilterInput | null,
};

export type OnDeleteReportEventsSubscription = {
  onDeleteReportEvents?:  {
    __typename: "ReportEvents",
    reportedEvent: string,
    reporter: string,
    reason?: string | null,
    comment?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
};

export type OnCreateMessageSubscription = {
  onCreateMessage?:  {
    __typename: "Message",
    id: string,
    text?: string | null,
    owner: string,
    room: string,
    createdAt?: string | null,
    type?: MessageType | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
};

export type OnUpdateMessageSubscription = {
  onUpdateMessage?:  {
    __typename: "Message",
    id: string,
    text?: string | null,
    owner: string,
    room: string,
    createdAt?: string | null,
    type?: MessageType | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
};

export type OnDeleteMessageSubscription = {
  onDeleteMessage?:  {
    __typename: "Message",
    id: string,
    text?: string | null,
    owner: string,
    room: string,
    createdAt?: string | null,
    type?: MessageType | null,
    updatedAt: string,
  } | null,
};

export type OnCreateRoomSubscriptionVariables = {
  filter?: ModelSubscriptionRoomFilterInput | null,
};

export type OnCreateRoomSubscription = {
  onCreateRoom?:  {
    __typename: "Room",
    id: string,
    name?: string | null,
    owner: string,
    event?: string | null,
    users?: Array< string | null > | null,
    groupChat?: boolean | null,
    active?: boolean | null,
    lastMessageID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateRoomSubscriptionVariables = {
  filter?: ModelSubscriptionRoomFilterInput | null,
};

export type OnUpdateRoomSubscription = {
  onUpdateRoom?:  {
    __typename: "Room",
    id: string,
    name?: string | null,
    owner: string,
    event?: string | null,
    users?: Array< string | null > | null,
    groupChat?: boolean | null,
    active?: boolean | null,
    lastMessageID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteRoomSubscriptionVariables = {
  filter?: ModelSubscriptionRoomFilterInput | null,
};

export type OnDeleteRoomSubscription = {
  onDeleteRoom?:  {
    __typename: "Room",
    id: string,
    name?: string | null,
    owner: string,
    event?: string | null,
    users?: Array< string | null > | null,
    groupChat?: boolean | null,
    active?: boolean | null,
    lastMessageID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUsersToRoomsSubscriptionVariables = {
  filter?: ModelSubscriptionUsersToRoomsFilterInput | null,
};

export type OnCreateUsersToRoomsSubscription = {
  onCreateUsersToRooms?:  {
    __typename: "UsersToRooms",
    user: string,
    room?: string | null,
    groupChat?: boolean | null,
    unreadCount?: number | null,
    lastAckMessageId?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUsersToRoomsSubscriptionVariables = {
  filter?: ModelSubscriptionUsersToRoomsFilterInput | null,
};

export type OnUpdateUsersToRoomsSubscription = {
  onUpdateUsersToRooms?:  {
    __typename: "UsersToRooms",
    user: string,
    room?: string | null,
    groupChat?: boolean | null,
    unreadCount?: number | null,
    lastAckMessageId?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUsersToRoomsSubscriptionVariables = {
  filter?: ModelSubscriptionUsersToRoomsFilterInput | null,
};

export type OnDeleteUsersToRoomsSubscription = {
  onDeleteUsersToRooms?:  {
    __typename: "UsersToRooms",
    user: string,
    room?: string | null,
    groupChat?: boolean | null,
    unreadCount?: number | null,
    lastAckMessageId?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateLastStartTimeSubscriptionVariables = {
  filter?: ModelSubscriptionLastStartTimeFilterInput | null,
};

export type OnCreateLastStartTimeSubscription = {
  onCreateLastStartTime?:  {
    __typename: "LastStartTime",
    user: string,
    lastStartTime: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateLastStartTimeSubscriptionVariables = {
  filter?: ModelSubscriptionLastStartTimeFilterInput | null,
};

export type OnUpdateLastStartTimeSubscription = {
  onUpdateLastStartTime?:  {
    __typename: "LastStartTime",
    user: string,
    lastStartTime: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteLastStartTimeSubscriptionVariables = {
  filter?: ModelSubscriptionLastStartTimeFilterInput | null,
};

export type OnDeleteLastStartTimeSubscription = {
  onDeleteLastStartTime?:  {
    __typename: "LastStartTime",
    user: string,
    lastStartTime: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateLastActiveTimeSubscriptionVariables = {
  filter?: ModelSubscriptionLastActiveTimeFilterInput | null,
};

export type OnCreateLastActiveTimeSubscription = {
  onCreateLastActiveTime?:  {
    __typename: "LastActiveTime",
    user: string,
    lastActiveTime: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateLastActiveTimeSubscriptionVariables = {
  filter?: ModelSubscriptionLastActiveTimeFilterInput | null,
};

export type OnUpdateLastActiveTimeSubscription = {
  onUpdateLastActiveTime?:  {
    __typename: "LastActiveTime",
    user: string,
    lastActiveTime: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteLastActiveTimeSubscriptionVariables = {
  filter?: ModelSubscriptionLastActiveTimeFilterInput | null,
};

export type OnDeleteLastActiveTimeSubscription = {
  onDeleteLastActiveTime?:  {
    __typename: "LastActiveTime",
    user: string,
    lastActiveTime: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserDevicesSubscriptionVariables = {
  filter?: ModelSubscriptionUserDevicesFilterInput | null,
};

export type OnCreateUserDevicesSubscription = {
  onCreateUserDevices?:  {
    __typename: "UserDevices",
    user: string,
    deviceToken?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserDevicesSubscriptionVariables = {
  filter?: ModelSubscriptionUserDevicesFilterInput | null,
};

export type OnUpdateUserDevicesSubscription = {
  onUpdateUserDevices?:  {
    __typename: "UserDevices",
    user: string,
    deviceToken?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserDevicesSubscriptionVariables = {
  filter?: ModelSubscriptionUserDevicesFilterInput | null,
};

export type OnDeleteUserDevicesSubscription = {
  onDeleteUserDevices?:  {
    __typename: "UserDevices",
    user: string,
    deviceToken?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
