import types from '@actionTypes'

const initialState = {
  isDataFetched: false,
  isShowSearchBar: false,
  isRegionListFetched: false
}

const finishDataFetch = state => {
  return {
    ...state,
    isDataFetched: true
  }
}

const finishRegionListFetch = state => {
  return {
    ...state,
    isRegionListFetched: true
  }
}

const showSearchBar = state => {
  return {
    ...state,
    isShowSearchBar: true
  }
}

const hideSearchBar = state => {
  return {
    ...state,
    isShowSearchBar: false
  }
}

const dataStatus = (state = initialState, action) => {
  switch (action.type) {
    case types.FINISH_DATA_FETCH:
      return finishDataFetch(state)
    case types.SHOW_SEARCH_BAR:
      return showSearchBar(state)
    case types.HIDE_SEARCH_BAR:
      return hideSearchBar(state)
    case types.FINISH_REGION_LIST_FETCH:
      return finishRegionListFetch(state)
    default:
      return state
  }
}

export default dataStatus
