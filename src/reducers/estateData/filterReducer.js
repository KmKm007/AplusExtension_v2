import types from '../../actionTypes/EstateData'

const initialState = {
  regionIdList: [],
  districtIdList: []
}

const addRegionId = (state, action) => {
  const regionId = action.regionId
  const regionIdList = state.regionIdList
  const isExist = regionIdList.some(id => id === regionId)
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

const addRegionIds = (state, action) => {
  const regionIds = action.regionIds
  const currentRegionIdList = state.regionIdList
  const nextRegionIdList = [...currentRegionIdList]
  regionIds.map(id => {
    let isExist = currentRegionIdList.some(rId => rId === id)
    if (!isExist)
        nextRegionIdList.push(id)
  })
  return {
    ...state,
    regionIdList: nextRegionIdList
  }
}

const removeRegionIds = (state, action) => {
  const regionIds = action.regionIds
  const currentRegionIdList = state.regionIdList
  const nextRegionIdList = currentRegionIdList.filter(id => {
    let isExist = regionIds.some(rId => rId === id)
    return isExist ? false : true
  })
  return {
    ...state,
    regionIdList: nextRegionIdList
  }
}

const addDistrictId = (state, action) => {
  const districtId = action.districtId
  const districtIdList = state.districtIdList
  const isExist = districtIdList.some(dId => dId === districtId)
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

const clearRegionIds = state => {
  return {
    ...state,
    regionIdList: initialState.regionIdList
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
    case types.CLEAR_REGION_IDS:
      return clearRegionIds(state)
    case types.ADD_REGION_IDS:
      return addRegionIds(state, action)
    case types.REMOVE_REGION_IDS:
      return removeRegionIds(state, action)
    default:
      return state
  }
}

export default filter
