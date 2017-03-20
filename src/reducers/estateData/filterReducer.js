import types from '../../actionTypes/EstateData'

const initialState = {
  regionIdList: [],
  districtIdList: []
}

const addRegionId = (state, action) => {
  const regionId = action.regionId
  const regionIdList = state.regionIdList
  const isExist = regionIdList.includes(regionId)
  if (isExist)
    return state
  return {
    ...state,
    regionIdList: [ ...regionIdList, regionId ]
  }
}

const removeRegionId = (state, action) => {
  const regionId = action.regionId
  const regionIdList = state.regionIdList
  const index = regionIdList.findIndex(id => regionId === id)
  if (index < 0)
    return state
  return {
    ...state,
    regionIdList: regionIdList.slice(0, index).concat(regionIdList.slice(index +1))
  }
}

const addDistrictId = (state, action) => {
  const districtId = action.districtId
  const districtIdList = state.districtIdList
  const isExist = districtIdList.includes(districtId)
  if (isExist)
    return state
  return {
    ...state,
    districtIdList: [ ...districtIdList, districtId ]
  }
}

const removeDistrictId = (state, action) => {
  const districtId = action.districtId
  const districtIdList = state.districtIdList
  const index = districtIdList.findIndex(id => districtId === id)
  if (index < 0)
    return state
  return {
    ...state,
    districtIdList: districtIdList.slice(0, index).concat(districtIdList.slice(index +1))
  }
}

const filter = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_DISTRICT_ID:
      return addDistrictId(state, action)
    case types.REMOVE_DISTRICT_ID:
      return removeDistrictId(state, action)
    case types.ADD_REGION_ID:
      return addRegionId(state, action)
    case types.REMOVE_REGION_ID:
      return removeRegionId(state, action)
    default:
      return state
  }
}

export default filter
