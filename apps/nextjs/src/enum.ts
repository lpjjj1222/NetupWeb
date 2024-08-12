
export const GENDER = [
  {label: 'Male', value: 'Male', enum: 'MALE'},
  {label: 'Female', value: 'Female', enum: 'FEMALE'},
  {label: 'Others', value: 'Others', enum: 'OTHERS'},
  {
    label: 'Prefer not to say',
    value: 'Prefer not to say',
    enum: 'PREFERNOTTOSAY',
  },
];

export const LANGUAGE = [
  {
    label: 'English',
    value: 'English',
    enum: 'ENGLISH',
  },
  {
    label: 'Chinese',
    value: 'Chinese',
    enum: 'CHINESE',
  },
  {
    label: 'French',
    value: 'French',
    enum: 'FRENCH',
  },
  {
    label: 'Spanish',
    value: 'Spanish',
    enum: 'SPANISH',
  },
];

export const INDUSTRIES = [
  {id: 1, itemT: 'University', enum: 'UNIVERSITY'},
  {id: 2, itemT: 'Investment banking', enum: 'INVESTMENTBANKING'},
  {id: 3, itemT: 'Asset management', enum: 'ASSETMANAGEMENT'},
  {id: 4, itemT: 'Quant / Trading', enum: 'QUANTTRADING'},
  {id: 5, itemT: 'Venture capital', enum: 'VENTURECAPITAL'},
  {id: 6, itemT: 'Accounting', enum: 'ACCOUNTING'},
  {id: 7, itemT: 'Product management', enum: 'PRODUCTMANAGEMENT'},
  {id: 8, itemT: 'Software engineering', enum: 'SOFTWAREENGINEERING'},
  {id: 9, itemT: 'Data science', enum: 'DATASCIENCE'},
  {id: 10, itemT: 'Artificial intelligence', enum: 'ARTIFICIALINTELLIGENCE'},
  {id: 11, itemT: 'UI / UX', enum: 'UIUX'},
  {id: 12, itemT: 'Electrical engineering', enum: 'ELECTRICALENGINEERING'},
  {id: 13, itemT: 'Consulting', enum: 'CONSULTING'},
  {id: 14, itemT: 'Education', enum: 'EDUCATION'},
  {id: 15, itemT: 'Law', enum: 'LAW'},
  {id: 16, itemT: 'Real estate', enum: 'REALESTATE'},
  {id: 17, itemT: 'Health care', enum: 'HEALTHCARE'},
  {id: 18, itemT: 'Engineering', enum: 'ENGINEERING'},
  {id: 19, itemT: 'Public sector', enum: 'PUBLICSECTOR'},
  {id: 20, itemT: 'Supply chain', enum: 'SUPPLYCHAIN'},
  {id: 21, itemT: 'Film / Art', enum: 'FILMANDART'},
  {id: 22, itemT: 'Human resource', enum: 'HUMANRESOURCE'},
  {id: 23, itemT: 'Bio / Medical', enum: 'BIOANDMEDICAL'},
  {id: 24, itemT: 'Architecture', enum: 'ARCHITECTURE'},
  {id: 25, itemT: 'Marketing', enum: 'MARKETING'},
  {id: 26, itemT: 'Advertising', enum: 'ADVERTISING'},
  {id: 27, itemT: 'Media', enum: 'MEDIA'},
  {id: 28, itemT: 'Others', enum: 'OTHERS'},
];

export const INTENTIONS = [
  {id: 1, itemT: 'Looking for mentor', enum: 'LOOKFORMENTOR', mappedEnum: 'MENTOROTHERS'},
  {id: 2, itemT: 'Looking for jobs', enum: 'LOOKFORJOBS', mappedEnum: 'HIRING'},
  {id: 3, itemT: 'Peer-to-peer connection', enum: 'PEERTOPEER', mappedEnum: 'PEERTOPEER'},
  {id: 4, itemT: 'Happy to mentor others', enum: 'MENTOROTHERS', mappedEnum: 'LOOKFORMENTOR'},
  {id: 5, itemT: 'Hiring', enum: 'HIRING', mappedEnum: 'LOOKFORJOBS'},
  {id: 6, itemT: 'Learn about other industries', enum: 'LEARNOTHERINDUSTRIES', mappedEnum: 'LEARNOTHERINDUSTRIES'},
];

// export const EVENTTYPE = [
//   {id: 1, itemT: 'Coffee chat', enum: 'COFFEECHAT', image: ImagePath.cup},
//   {id: 2, itemT: 'Meal', enum: 'MEAL', image: ImagePath.plat},
//   {id: 3, itemT: 'Online', enum: 'ONLINE', image: ImagePath.onlineEvent},
//   {id: 4, itemT: 'Others', enum: 'OTHERS', image: ImagePath.others},
// ]

export const EVENTPRIVACY = [
  {id: 1, itemT: 'Public', enum: 'PUBLIC'},
  {id: 2, itemT: 'Private', enum: 'PRIVATE'},
]

export const EVENTGENDER = [
  {label: 'Everyone', value: 'Everyone', enums: null},
  {label: 'Male', value: 'Male', enums: ['MALE']},
  {label: 'Female', value: 'Female', enums: ['FEMALE']},
];

export const EVENTSTATUS = [
  {id: 1, itemT: 'Interested', enum: 'INTERESTED'},
  {id: 2, itemT: 'Attending', enum: 'ATTENDING'},
];

export const EVENTSORTBY = [
  {id: 1, itemT: 'Distance', enum: 'DISTANCE'},
  {id: 2, itemT: 'Start time', enum: 'STARTTIME'},
];

export const REPORTREASON = [
  {id : 1, label: 'Offensive and disrespectful post'},
  {id : 2, label: 'Inappropriate language spoken'},
  {id : 3, label: 'Violates community and individual safety'},
  {id : 4, label: 'Something they did in person'},
  {id : 5, label: 'Fake profile or scam'},
]