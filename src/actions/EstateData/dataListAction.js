import * as types from '../../actionTypes/EstateData'

export const requestData = () => ({
  type: types.REQUEST_DATA
})

export const receiveData = (dataList) => ({
  type: types.RECEIVE_DATA,
  dataList
})

export const fetchData = () => dispatch => {
  dispatch(requestData())
  console.log(123)
  dispatch(receiveData([]))
}
