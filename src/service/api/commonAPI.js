import { GET_IMAGE_BASE64 } from '../constant/urls'
import FetchUtil from 'kmkm-utils/dist/FetchUtil'

export function getImageBase64 (params, callback, failCallback) {
  const url = GET_IMAGE_BASE64 + '?url=' + params.url
  fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
  .then(resp => {
    if (resp.ok && resp.status === 200) {
      return resp.json()
    } else {
      throw (new Error('出错'))
    }
  })
  .then(json => {
    if (json.status === 0) {
      callback(json.data)
    } else {
      throw new Error(json.message)
    }
  })
  .catch(e => {
    if (typeof (failCallback) === 'function') {
      failCallback(FetchUtil.getErrorMesg(e))
    }
  })
}
