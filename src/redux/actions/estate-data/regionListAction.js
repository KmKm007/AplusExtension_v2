import types from '@actionTypes'
import { fetchServerRegionList } from '@service/api/estateData'

export const requestRegionList = () => ({
  type: types.REQUEST_REGION_LIST
})

export const receiveRegionList = regionList => ({
  type: types.RECEIVE_REGION_LIST,
  regionList
})

export const fetchRegionList = () => dispatch => {
  dispatch(requestRegionList())
  fetchServerRegionList(dataList => {
    dispatch(receiveRegionList(dataList))
  })
}
