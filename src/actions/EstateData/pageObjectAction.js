import types from '../../actionTypes/EstateData'

export const fetchFirstPage = () => ({
  type: types.FETCH_FIRST_PAGE
})

export const fetchLastPage = () => ({
  type: types.FETCH_LAST_PAGE
})

export const fetchSelectedPage = selectedPage => ({
  type: types.FETCH_SELECTED_PAGE,
  selectedPage
})

export const fetchNextPage = () => ({
  type: types.FETCH_NEXT_PAGE
})

export const fetchPrePage = () => ({
  type: types.FETCH_PRE_PAGE
})
