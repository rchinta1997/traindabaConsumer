import axios from "axios"
import { TOKEN_KEY, API_RESPONSE_CODES, REFRESH_TOKEN_KEY, API_REQ_TYPE, ROUTES } from "./constants"
import { APIS } from "./apiList"
import { isObject, removeLocalStorageItem, setLocalStorageItem, clearLocalStorage } from "./utils"
import { NOTIFICATIONS } from "./messages"

const basePath = process?.env?.REACT_APP_BASE_API_URL
// authBasePath is for authentication purpose only
const authBasePath = process?.env?.REACT_APP_AUTH_API_URL
const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, GET, OPTIONS, PUT, HEAD, DELETE",
}

const logoutUser = () => {
  clearLocalStorage()
  window.location.reload()
}

const handleErrorResponse = async (err, req) => {
  if (err.response) {
    const errorText = err.response.data ? (err.response.data.error_description ? err.response.data.error_description : err.response.data.message) : err.response.statusText
    if (errorText === NOTIFICATIONS.REFRESH_TOKEN_EXPIRED_2) {
      logoutUser()
    } else if (err?.response?.status === API_RESPONSE_CODES.NOT_FOUND) {
      window.location.href = ROUTES.NOT_FOUND
    } else if (err.response.status === API_RESPONSE_CODES.UNAUTHORISED) {
      return await handleRefreshToken(req)
    } else {
      if (errorText === NOTIFICATIONS.REFRESH_TOKEN_EXPIRED || errorText === NOTIFICATIONS.REFRESH_TOKEN_EXPIRED_2) {
        logoutUser()
      }
      return errorText
    }
  } else {
    return err
  }
}

const handleRefreshToken = async (req) => {
  const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY)
  if (refreshToken) {
    removeLocalStorageItem(TOKEN_KEY)
    const payload = `grant_type=refresh_token&scope=offline_access&refresh_token=${refreshToken}`
    const res = await postData(APIS.LOGIN, payload, true)
    if (isObject(res)) {
      const { token_type, access_token } = res
      setLocalStorageItem(TOKEN_KEY, `${token_type} ${access_token}`)
      const { GET, POST, PATCH, PUT, DELETE } = API_REQ_TYPE
      const { type, url, body, isBaseURL } = req
      let response
      switch (type) {
        case GET:
          response = await getData(url)
          break
        case POST:
          response = await postData(url, body, isBaseURL)
          break
        case PATCH:
          response = await patchData(url, body)
          break
        case PUT:
          response = putData(url, body)
          break
        case DELETE:
          response = deleteData(url, body)
          break
        default:
          break
      }
      return response
    } else {
      return res
    }
  } else {
    return NOTIFICATIONS.REFRESH_TOKEN_EXPIRED
  }
}

const handleSuccessResponse = (res) => {
  const { SUCCESS, SUCCESS_CREATE, SUCCESS_NO_CONTENT } = API_RESPONSE_CODES
  if (res.status === SUCCESS) {
    return res.data
  } else if ([SUCCESS_CREATE, SUCCESS_NO_CONTENT].includes(res.status)) {
    return res
  }
  return {}
}

export const getData = (url) => {
  headers.Authorization = localStorage.getItem(TOKEN_KEY)
  return axios
    .get(`${basePath}${url}`, { headers: headers })
    .then((res) => handleSuccessResponse(res))
    .catch((err) => handleErrorResponse(err, { type: API_REQ_TYPE.GET, url }))
}

export const postData = (url, body, isBaseURL = false) => {
  headers.Authorization = localStorage.getItem(TOKEN_KEY)
  return axios
    .post(`${isBaseURL ? authBasePath : basePath}${url}`, body, { headers: headers })
    .then((res) => handleSuccessResponse(res))
    .catch((err) => handleErrorResponse(err), { type: API_REQ_TYPE.POST, url, body, isBaseURL })
}

export const patchData = (url, body) => {
  headers.Authorization = localStorage.getItem(TOKEN_KEY)
  return axios
    .patch(`${basePath}${url}`, body, { headers: headers })
    .then((res) => handleSuccessResponse(res))
    .catch((err) => handleErrorResponse(err, { type: API_REQ_TYPE.PATCH, url, body }))
}

export const putData = (url, body) => {
  headers.Authorization = localStorage.getItem(TOKEN_KEY)
  return axios
    .put(`${basePath}${url}`, body, { headers: headers })
    .then((res) => handleSuccessResponse(res))
    .catch((err) => handleErrorResponse(err, { type: API_REQ_TYPE.PUT, url, body }))
}

export const deleteData = (url) => {
  headers.Authorization = localStorage.getItem(TOKEN_KEY)
  return axios
    .delete(`${basePath}${url}`, { headers: headers })
    .then((res) => handleSuccessResponse(res))
    .catch((err) => handleErrorResponse(err, { type: API_REQ_TYPE.DELETE, url }))
}


