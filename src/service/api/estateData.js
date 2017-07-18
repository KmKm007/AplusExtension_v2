import FetchUtil from 'kmkm-utils/dist/FetchUtil'
import { url, exportUrl, regionListUrl, downloadUrl, GET_PROPERTY_BY_NO_URL } from '@service/constant/urls'
import 'whatwg-fetch'

export const fetchServerData = (filter, callBack) => {
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: filter ? JSON.stringify(filter) : ''
  })
  .then(response => {
    if (response.ok && response.status === 200) {
      return response.json()
    }
  })
  .then(json => {
    callBack(json)
  })
}

export const fetchServerExportDataCode = (filter, callBack) => {
  fetch(exportUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(filter)
  })
  .then(resp => {
    if (resp.ok && resp.status === 200) {
      return resp.json()
    }
  })
  .then(json => {
    console.log(json.code)
    callBack(json.code)
  })
}

export const downloadServerData = code => {
  window.location.href = `${downloadUrl}?code=${code}`
}

export const fetchServerRegionList = callBack => {
  fetch(regionListUrl, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
  .then(response => {
    if (response.ok && response.status === 200) {
      return response.json()
    }
  })
  .then(responseJson => {
    if (responseJson.status === 0) {
      callBack(responseJson.dataList)
    } else {
      console.log('异常')
    }
  })
}

export function getPropertyByNo (params, callback, failCallback) {
  const no = params.no
  const url = `${GET_PROPERTY_BY_NO_URL}?no=${no}`
  fetch(url, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
  .then(response => {
    if (response.ok && response.status === 200) {
      return response.json()
    } else {
      throw new Error('请求出错！,代码为' + response.status)
    }
  })
  .then(responseJson => {
    if (responseJson.status === 0) {
      callback(responseJson.dataList)
    } else {
      throw new Error(responseJson.message)
    }
  })
  .catch(e => {
    if (typeof (failCallback) === 'function') {
      failCallback(FetchUtil.getErrorMesg(e))
    }
  })
}
