import types from '@actionTypes'

const initialStatus = {
  currentPage: 1,
  pageSize: 20,
  maxPage: null,
  pageCount: 9,
  totalRow: null
}

const fetchSelectedPage = (state, action) => {
  const { currentPage, maxPage } = state
  const selectedPage = action.selectedPage
  if (currentPage === selectedPage || selectedPage > maxPage || selectedPage < 1) {
    return state
  }
  return {
    ...state,
    currentPage: selectedPage
  }
}

const updatePageObject = (state, action) => {
  const dataList = action.dataList
  const pageSize = state.pageSize
  const length = dataList.length
  const maxPage = length % pageSize === 0 ? length / pageSize : (parseInt(length / pageSize) + 1)
  return {
    ...state,
    currentPage: 1,
    maxPage,
    totalRow: length
  }
}

const pageObject = (state = initialStatus, action) => {
  switch (action.type) {
    case types.FETCH_SELECTED_PAGE:
      return fetchSelectedPage(state, action)
    case types.UPDATE_PAGE_OBJECT:
      return updatePageObject(state, action)
    default:
      return state
  }
}

export default pageObject
