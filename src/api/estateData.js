import { url, exportUrl, regionListUrl, downloadUrl } from '../appConfig/urls'

export const fetchServerData = (filter, callBack) => {
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: filter ? 'filter=' + JSON.stringify(filter) : ''
  })
  .then(response => {
    if (response.ok && response.status === 200)
      return response.json()
  })
  .then(json => {
    callBack(json)
  })
}
