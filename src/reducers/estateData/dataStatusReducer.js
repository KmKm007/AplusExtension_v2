import types from '../../actionTypes/EstateData'

const initialState = {
  isDataFetched: false
}

const finishDataFetch = state => {
    return {
      ...state,
      isDataFetched: true
    }
}

const dataStatus = (state = initialState, action) => {
  switch (action.type) {
    case types.FINISH_DATA_FETCH:
      return finishDataFetch(state)
    default:
      return state
  }
}

export default dataStatus
