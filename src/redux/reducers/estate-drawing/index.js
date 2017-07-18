import actionTypes from '@actionTypes'

const initialState = {
  showModal: 0,
  propertys: [
    {
      building: {
        name: '03栋'
      },
      countF: 4,
      countT: 2,
      estate: {
        name: '中信凯旋城(塘厦)'
      },
      id: 'D0C28031-F963-4210-9196-DA32183283C7',
      keyCount: 0,
      no: 'LSQ009882',
      salePrice: 312.00,
      square: 142.39,
      houseNo: '1203'
    }
  ],
  selectedPropertyId: null
}

function changeModal (state, action) {
  if (action.payload) {
    return {
      ...state,
      showModal: action.payload.type
    }
  } else {
    return {
      ...state,
      showModal: 0
    }
  }
}

function changeSelectedProperty (state, action) {
  const id = action.payload.id
  return {
    ...state,
    selectedPropertyId: id
  }
}

const estateDrawingReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ESTATE_DRAWING_CLOSE_MODAL:
    case actionTypes.ESTATE_DRAWING_CHANGE_MODAL:
      return changeModal(state, action)
    case actionTypes.ESTATE_DRAWING_CHANGE_SELECTED_PROPERTY:
      return changeSelectedProperty(state, action)
    default:
      return state
  }
}

export default estateDrawingReducer
