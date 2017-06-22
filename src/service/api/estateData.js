import { url, exportUrl, regionListUrl, downloadUrl } from '@service/constant/urls'
import 'whatwg-fetch'

export const fetchServerData = (filter, callBack) => {
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
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
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'filter=' + JSON.stringify(filter)
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
