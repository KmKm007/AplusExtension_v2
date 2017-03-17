import * as types from '../../actionTypes/EstateData'

const initialStatus = {
  currentPage: 1,
  pageSize: 20,
  maxPage: null,
  pageCount: 9,
  totalRow: null
}

const fetchNextPage = state => {
  const { currentPage, maxPage } = state
  return currentPage < maxPage ?
    {
      ...state,
      currentPage: currentPage + 1
    }
    : state
  default:
  return state
}

const fetchPrePage = state => {
  const currentPage  = state.currentPage
  if (currentPage <= 1)
    return state
  return {
    ...state,
    currentPage: currentPage -1
  }
}

const fetchSelectedPage = (state, action) => {
  const { currentPage, maxPage } = state
  const selectedPage = action.selectedPage
  if (currentPage === selectedPage ||
      selectedPage > maxPage ||
      selectedPage < 1)
      return state
  return {
    ...state,
    currentPage: selectedPage
}

const fetchFirstPage = state => {
  const currentPage = state.currentPage
  if (currentPage === 1)
    return state
  return {
    ...state,
    currentPage: 1
  }
}

const fetchLastPage = state => {
  const { currentPage,maxPage }= state
  if (currentPage === maxPage)
    return state
  return {
    ...state,
    currentPage: maxPage
  }
}

const pageObject = (state = initialStatus, action) {
  case types.FETCH_NEXT_PAGE:
    return fetchNextPage(state)
  case types.FETCH_PRE_PAGE:
    return fetchPrePage(state)
  case types.FETCH_FIRST_PAGE:
    return fetchFirstPage(state)
  case types.FETCH_LAST_PAGE:
    return fetchLastPage(state)
  case types.FETCH_SELECTED_PAGE:
    return fetchSelectedPage(state, action)
  default:
    return state
}

export default pageObject
