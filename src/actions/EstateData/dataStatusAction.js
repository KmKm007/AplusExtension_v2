import types from '../../actionTypes/EstateData'

export const finishDataFetch = () => ({
  type: types.FINISH_DATA_FETCH
})

export const showSearchBar = () => ({
  type: types.SHOW_SEARCH_BAR
})

export const hideSearchBar = () => ({
  type: types.HIDE_SEARCH_BAR
})

export const finishRegionListFetch = () => ({
  type: types.FINISH_REGION_LIST_FETCH
})
