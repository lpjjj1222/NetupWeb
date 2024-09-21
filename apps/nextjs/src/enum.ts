
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
  {id: 1, itemT: 'Accounting', enum: 'ACCOUNTING'},
  {id: 2, itemT: 'Advertising', enum: 'ADVERTISING'},
  {id: 3, itemT: 'Aerospace', enum: 'AEROSPACE'},
  {id: 4, itemT: 'Architecture', enum: 'ARCHITECTURE'},
  {id: 5, itemT: 'Artificial intelligence', enum: 'ARTIFICIALINTELLIGENCE'},
  {id: 6, itemT: 'Asset management', enum: 'ASSETMANAGEMENT'},
  {id: 7, itemT: 'Automotive', enum: 'AUTOMOTIVE'},
  {id: 8, itemT: 'Bio / Medical', enum: 'BIOANDMEDICAL'},
  {id: 9, itemT: 'Capital market', enum: 'CAPITALMARKET'},
  {id: 10, itemT: 'Consulting', enum: 'CONSULTING'},
  {id: 11, itemT: 'Consumer services', enum: 'CONSUMERSERVICES'},
  {id: 12, itemT: 'Data science', enum: 'DATASCIENCE'},
  {id: 13, itemT: 'E-commerce', enum: 'ECOMMERCE'},
  {id: 14, itemT: 'Education', enum: 'EDUCATION'},
  {id: 15, itemT: 'Electrical engineering', enum: 'ELECTRICALENGINEERING'},
  {id: 16, itemT: 'Energy', enum: 'ENERGY'},
  {id: 17, itemT: 'Engineering', enum: 'ENGINEERING'},
  {id: 18, itemT: 'Environment', enum: 'ENVIRONMENT'},
  {id: 19, itemT: 'Film / Art', enum: 'FILMANDART'},
  {id: 20, itemT: 'Fintech', enum: 'FINTECH'},
  {id: 21, itemT: 'Gaming', enum: 'GAMING'},
  {id: 22, itemT: 'Government', enum: 'GOVERNMENT'},
  {id: 23, itemT: 'Hardware engineering', enum: 'HARDWAREENGINEERING'},
  {id: 24, itemT: 'Health care', enum: 'HEALTHCARE'},
  {id: 25, itemT: 'Hospitality', enum: 'HOSPITALITY'},
  {id: 26, itemT: 'Human resource', enum: 'HUMANRESOURCE'},
  {id: 27, itemT: 'Investment banking', enum: 'INVESTMENTBANKING'},
  {id: 28, itemT: 'IT services', enum: 'ITSERVICES'},
  {id: 29, itemT: 'Law', enum: 'LAW'},
  {id: 30, itemT: 'Legal services', enum: 'LEGALSERVICES'},
  {id: 31, itemT: 'Manufacturing', enum: 'MANUFACTURING'},
  {id: 32, itemT: 'Marketing', enum: 'MARKETING'},
  {id: 33, itemT: 'Media', enum: 'MEDIA'},
  {id: 34, itemT: 'Music', enum: 'MUSIC'},
  {id: 35, itemT: 'Non-profit', enum: 'NONPROFIT'},
  {id: 36, itemT: 'Pharmaceuticals', enum: 'PHARMACEUTICALS'},
  {id: 37, itemT: 'Product management', enum: 'PRODUCTMANAGEMENT'},
  {id: 38, itemT: 'Public sector', enum: 'PUBLICSECTOR'},
  {id: 39, itemT: 'Quant / Trading', enum: 'QUANTTRADING'},
  {id: 40, itemT: 'Real estate', enum: 'REALESTATE'},
  {id: 41, itemT: 'Retail', enum: 'RETAIL'},
  {id: 42, itemT: 'Social services', enum: 'SOCIALSERVICES'},
  {id: 43, itemT: 'Software engineering', enum: 'SOFTWAREENGINEERING'},
  {id: 44, itemT: 'Sports', enum: 'SPORTS'},
  {id: 45, itemT: 'Supply chain', enum: 'SUPPLYCHAIN'},
  {id: 46, itemT: 'UI / UX', enum: 'UIUX'},
  {id: 47, itemT: 'University', enum: 'UNIVERSITY'},
  {id: 48, itemT: 'Venture capital', enum: 'VENTURECAPITAL'},
  {id: 49, itemT: 'Web3', enum: 'WEB3'},
  {id: 50, itemT: 'Others', enum: 'OTHERS'},
];

export const INTENTIONS = [
  {id: 1, itemT: 'Looking for mentor', enum: 'LOOKFORMENTOR', mappedEnum: 'MENTOROTHERS'},
  {id: 2, itemT: 'Looking for jobs', enum: 'LOOKFORJOBS', mappedEnum: 'HIRING'},
  {id: 3, itemT: 'Peer-to-peer connection', enum: 'PEERTOPEER', mappedEnum: 'PEERTOPEER'},
  {id: 4, itemT: 'Happy to mentor others', enum: 'MENTOROTHERS', mappedEnum: 'LOOKFORMENTOR'},
  {id: 5, itemT: 'Hiring', enum: 'HIRING', mappedEnum: 'LOOKFORJOBS'},
  {id: 6, itemT: 'Learn about other industries', enum: 'LEARNOTHERINDUSTRIES', mappedEnum: 'LEARNOTHERINDUSTRIES'},
];

export const EVENTTYPE = [
  {id: 1, itemT: 'Coffee chat', enum: 'COFFEECHAT'},
  {id: 2, itemT: 'Meal', enum: 'MEAL', },
  {id: 3, itemT: 'Online', enum: 'ONLINE', },
  {id: 4, itemT: 'Others', enum: 'OTHERS', },
]

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
