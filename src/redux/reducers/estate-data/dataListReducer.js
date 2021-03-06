import types from '@actionTypes'

const initialState = []

const requestData = state => {
  return state
}

const receiveData = (state, action) => {
  const dataList = action.dataList
  return dataList
}

const dataList = (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_DATA:
      return requestData(state)
    case types.RECEIVE_DATA:
      return receiveData(state, action)
    default:
      return state
  }
}

export default dataList
