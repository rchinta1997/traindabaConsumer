export const CA_URL = process?.env?.REACT_APP_SIGN_IN_AS_CLIENT_URL
// export const CA_URL = 'http://localhost:3001/'
export const COLORS = {
  primary: "#522363",
  accent: "#F4564E",
}

// link for privacy and policy

export const POLLING_INTERVAL = 2000

export const TOKEN_KEY = "accessToken"
export const REFRESH_TOKEN_KEY = "refreshToken"
export const USER_ID = "userId"
export const ACCESS_CODE = "accessCode"
export const IS_REMEMBER_ME = "isRememberMe"
export const USERNAME = "username"

export const API_RESPONSE_CODES = {
  SUCCESS: 200,
  SUCCESS_CREATE: 201,
  SUCCESS_NO_CONTENT: 204,
  UNAUTHORISED: 401,
  NOT_FOUND: 404,
}
export const ROUTES = {
  LOGIN: "/",
  AUTH: "/auth",
  FORGOT_PASSWORD: "/forgotPassword",
  HOME: "/home", 
}

export const API_REQ_TYPE = {
  GET: "get",
  POST: "post",
  PATCH: "patch",
  PUT: "put",
  DELETE: "delete",
}

export const SNACK_BAR_MESSAGE_TYPE = {
  SUCCESS: "success",
  ERROR: "error",
}

export const COMPONENT_TYPES = {
  INPUT_BOX: "inputBox",
  SELECT_BOX: "selectBox",
  CHECK_BOX: "checkbox",
  RANGE: "range",
  BADGE: "badge",
  AUTO_COMPLETE: "autoComplete",
  DATE: 'date'
}

export const VALIDATIONS_TYPES = {
  IS_EMPTY: "isEmpty",
  MIN_CHAR: "minChar",
  MAX_CHAR: "maxChar",
  EMAIL: "email",
  NUM: "isNUM",
}

export const PATTERN = {
  NUM: /^\d+$/,
  EMAIL: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
}

export const TIMEZONES = [
  {
    name: "Eastern Time Zone",
    val: "America/New_York"
  },
  {
    name: "Central Standard Time",
    val: "America/Chicago",
  },
  {
    name: "Mountain Standard Time",
    val: "America/Denver",
  },
  {
    name: "Pacific Standard Time",
    val: "America/Los_Angeles",
  }
]

export const SNACK_BAR_MESSAGE_TYPE_SUCCESS = "success"
export const SNACK_BAR_MESSAGE_TYPE_ERROR = "error"
export const EASTERN_STANDARD_TIME = "Eastern Standard Time"
export const CENTRAL_STANDARD_TIME = "Central Standard Time"
export const MOUNTAIN_STANDARD_TIME = "Mountain Standard Time"
export const EMAIL_ADDRESS_ALREADY_EXIST = "Email address already exists"
export const LIST_VIEW_PAGE_SIZE = 5

export const LIST_VIEW_CELL_TYPE = {
  NONE: "NONE",
  BUTTON: "BUTTON",
  DROPDOWN: "DROPDOWN",
  ICON: "ICON",
  LINK: "LINK",
  TYPO_LINK: "TYPO_LINK",
}

export const SORTING = {
  ASC: "ASC",
  DESC: "DESC",
}

export const NOTIFICATION_MSG_FORMAT = { type: "", msg: "", status: false }

export const SEARCH_STATUS = {
  NotStarted: "NotStarted",
  Processing: "Processing",
  Completed: "Completed",
}




export const INTERVAL_KEY = "interval"



export const ACTIONS = {
  ADD: 'ADD',
  UPDATE: 'UPDATE',
  DELETE: 'DELETE'
}


export const TIMEZONE = "timezone"

export const DATE_TIME_PICKER_TYPE = {
  DATE: 'DATE',
  TIME: 'TIME',
  DATE_TIME: 'DATE_TIME'
}

export const DATE_FORMAT = {
  DAY: 'MMM DD',
  DATE: 'MMM DD, YYYY',
  DATE_TIME: 'MMM DD, YYYY hh:mm A',
  DATE_TIME_GRID: 'MM/DD/YYYY HH:mm',
  DATE_GRID: 'MM/DD/YYYY'
}


export const COLOR = {
  TABLE_HEADER: '#E6E9F4'
}

export const REGX_TYPE = {
  NUM: 'NUM'
}

export const VALID_FILE_FORMAT = {
  IMAGE: '.jpg, .jpeg, .png, .webp, .gif, .JPEG, .PNG, .JPG, .WEBP, .GIF',
  IMAGE_LIST: ['jpg', 'jpeg', 'png', 'webp', 'gif', 'JPEG', 'PNG', 'JPG', 'WEBP', 'GIF'],
  BADGE: '.svg, .SVG',
  BADGE_LIST: ['svg', 'SVG']
}

export const COPY_NAME_PREFIX = 'copy_of_'

