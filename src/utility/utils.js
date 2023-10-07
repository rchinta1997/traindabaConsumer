// Here maintain commonly used methods
import { REGX_TYPE } from "./constants"
import { format, differenceInYears } from 'date-fns'
import { IS_REMEMBER_ME, USERNAME, ACTIONS, DATE_FORMAT } from "./constants"
import moment from 'moment'
import 'moment-timezone';

const { ADD, UPDATE, DELETE } = ACTIONS

export const isObject = (val) => {
  return val && val instanceof Object
}
export const setLocalStorageItem = (key, val) => {
  localStorage.setItem(key, val)
}
export const removeLocalStorageItem = (key) => {
  localStorage.removeItem(key)
}

export const clearLocalStorage = () => {
  if (localStorage.getItem(IS_REMEMBER_ME) === 'true') {
    const username = localStorage.getItem(USERNAME)
    localStorage.clear();
    setLocalStorageItem(IS_REMEMBER_ME, true)
    setLocalStorageItem(USERNAME, username)
  } else {
    localStorage.clear();
  }
}

export const sortArrayOnNumericKey = (list, key) => {
  return list.sort(function (a, b) {
    return a[key] - b[key]
  })
}
export function isArray(arrayElement) {
  return arrayElement && Array.isArray(arrayElement) && arrayElement.length > 0
}
export const isNum = (str) => !PATTERN.NUM.test(str)
export const isEmail = (str) => !PATTERN.EMAIL.test(str)
export const isObjectEmpty = (obj) => !obj || Object.keys(obj).length === 0 && obj.constructor === Object

export const isValidEmail = (value) => {
  return /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,5}$/.test(value)
}

export const getClonedObj = obj => JSON.parse(JSON.stringify(obj))
export const copyTextToClipboard = (text) => navigator.clipboard.writeText(text)

export const getDateForDateTimePicker = (dt, timezone = "yyyy-MM-dd'T'hh:mm") => dt && format(dt, timezone);

export const formatDateWithTimezone = (dt, timezone, format) => {
  return timezone ? moment(dt).tz(timezone).format(format) : moment(dt).format(format)
}

export const getDateToDisplay = (sessionType, timezone, endDate, startDate) => {
  if (sessionType !== SESSION_TYPES_ENUM.SELF_GUIDED_SESSION) {
    return formatDateWithTimezone(endDate, timezone, DATE_FORMAT.DATE_TIME)
  } else {
    const formattedStartDate = formatDateWithTimezone(startDate, timezone, DATE_FORMAT.DAY)
    const formattedEndDate = formatDateWithTimezone(endDate, timezone, DATE_FORMAT.DATE)
    return `${formattedStartDate} - ${formattedEndDate}`
  }
}
export const isValidStr = (str, type) => {
  const { NUM } = REGX_TYPE
  switch (type) {
    case NUM: return /^\d+$/.test(str);
    default: return false
  }
}
export const ScrollToTop = () => window.scrollTo(0, 0);

export const getDifference = (dt1, dt2) => differenceInYears(new Date(dt1), new Date(dt2));

export const isString = obj => typeof (obj) === 'string'

export const scrollToBottom = (className) => {
  let messageBody = document.querySelector(className);
  messageBody.scrollTop = messageBody.scrollHeight - messageBody.clientHeight;
}