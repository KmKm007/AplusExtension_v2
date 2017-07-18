import types from '@actionTypes'

export const updatePageObject = dataList => ({
  type: types.UPDATE_PAGE_OBJECT,
  dataList
})

export const fetchSelectedPage = selectedPage => ({
  type: types.FETCH_SELECTED_PAGE,
  selectedPage
})
