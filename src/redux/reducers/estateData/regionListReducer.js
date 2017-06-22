import types from '@actionTypes/EstateData'

const initialStatus = []

const receiveRegionList = (state, action) => {
  return action.regionList
}

const regionList = (state = initialStatus, action) => {
  switch(action.type) {
    case types.RECEIVE_REGION_LIST:
      return receiveRegionList(state, action)
    default:
      return state
  }
}

export default regionList
