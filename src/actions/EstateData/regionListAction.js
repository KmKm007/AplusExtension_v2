import types from '../../actionTypes/EstateData'
import { fetchServerRegionList } from '../../api/estateData'


export const requestRegionList = () => ({
  type: types.REQUEST_REGION_LIST
})

export const receiveRegionList = regionList => ({
  type: types.RECEIVE_REGION_LIST,
  regionList
})

export const fetchRegionList = dispatch => {
  dispatch(requestRegionList())
  fetchServerRegionList(dataList => {
    dispatch(receiveRegionList(dataList))
  })
}
