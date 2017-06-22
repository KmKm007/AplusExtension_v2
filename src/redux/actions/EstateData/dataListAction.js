import types from '@actionTypes/EstateData'
import { fetchServerData, fetchServerExportDataCode, downloadServerData } from '@service/api/estateData'
import { finishDataFetch } from './dataStatusAction'
import { updatePageObject } from './pageObjectAction'

export const requestData = () => ({
  type: types.REQUEST_DATA
})

export const receiveData = (dataList) => ({
  type: types.RECEIVE_DATA,
  dataList
})

export const fetchData = filter => dispatch => {
  dispatch(requestData())
  fetchServerData(filter, json => {
    const dataList = json.dataList
    dispatch(receiveData(dataList))
    dispatch(updatePageObject(dataList))
    dispatch(finishDataFetch())
  })
}

export const requestExportDataCode = () => ({
  type: types.REQUEST_EXPORT_DATA_CODE
})

export const receiveExportDataCode = code => ({
  type: types.RECEIVE_EXPORT_DATA_CODE,
  code
})

export const fetchExportDataCode = filter => dispatch => {
  dispatch(requestExportDataCode())
  fetchServerExportDataCode(filter, code => {
    downloadServerData(code)
  })
}
