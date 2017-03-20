import types from '../../actionTypes/EstateData'
import { fetchServerData } from '../../api/estateData'
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
