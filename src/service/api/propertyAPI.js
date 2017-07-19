import { GET_PROPERTY_BY_NO_URL } from '@service/constant/urls'
import FetchUtil from 'kmkm-utils/dist/FetchUtil'

export function getPropertyByNo (params, callback, failCallback) {
  const propertyNo = params.propertyNo
  const url = `${GET_PROPERTY_BY_NO_URL}?no=${propertyNo}`
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
