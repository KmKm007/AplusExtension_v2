import types from '../../actionTypes/EstateData'

export const addRegionId = regionId => ({
  type: types.ADD_REGION_ID,
  regionId
})

export const removeRegionId = regionId => ({
  type: types.REMOVE_REGION_ID,
  regionId
})

export const addDistrictId = districtId => ({
  type: types.ADD_DISTRICT_ID,
  districtId
})

export const removeDistrictId = districtId => ({
  type: types.REMOVE_DISTRICT_ID,
  districtId
})
