import actionTypes from '@actionTypes'

const initialState = {
  showModal: 0,
  propertys: [],
  selectedPropertyId: null,
  isFetchingPropertys: null,
  confirmedProperty: null,
  tempSelectedTags: [],
  selectedTags: [],
  tags: [
    {
      id: 1,
      name: '南北通透'
    },
    {
      id: 2,
      name: '采光好'
    },
    {
      id: 3,
      name: '精装三房'
    },
    {
      id: 4,
      name: '看房方便哦'
    },
    {
      id: 5,
      name: '风水好'
    },
    {
      id: 6,
      name: '南北通透'
    },
    {
      id: 7,
      name: '采光好'
    },
    {
      id: 8,
      name: '精装三房'
    },
    {
      id: 9,
      name: '看房方便哦'
    },
    {
      id: 10,
      name: '风水好'
    }
  ]
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

function requestPropertysByNo (state) {
  return {
    ...state,
    isFetchingPropertys: true
  }
}

function receivePropertys (state, action) {
  const payload = action.payload
  return {
    ...state,
    isFetchingPropertys: false,
    propertys: payload.propertys
  }
}

function changeConfirmedProperty (state, action) {
  const payload = action.payload
  return {
    ...state,
    confirmedProperty: payload.property
  }
}

function updateTempSelectedTags (state, action) {
  const payload = action.payload
  const tagId = payload.tagId
  const tempSelectedTags = state.tempSelectedTags
  const isExist = tempSelectedTags.findIndex(t => t === tagId) >= 0
  let nextTempSelectedTags
  if (isExist) {
    nextTempSelectedTags = tempSelectedTags.filter(t => t !== tagId)
  } else {
    nextTempSelectedTags = [...tempSelectedTags, tagId]
  }
  return {
    ...state,
    tempSelectedTags: nextTempSelectedTags
  }
}

function updateSelectedTags (state, action) {
  return {
    ...state,
    selectedTags: state.tempSelectedTags
  }
}

function restoreTags (state) {
  return {
    ...state,
    tempSelectedTags: state.selectedTags
  }
}

const estateDrawingReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ESTATE_DRAWING_CLOSE_MODAL:
    case actionTypes.ESTATE_DRAWING_CHANGE_MODAL:
      return changeModal(state, action)
    case actionTypes.ESTATE_DRAWING_CHANGE_SELECTED_PROPERTY:
      return changeSelectedProperty(state, action)
    case actionTypes.ESTATE_DRAWING_REQUEST_PROPERTYS_NO:
      return requestPropertysByNo(state)
    case actionTypes.ESTATE_DRAWING_RECEIVE_PROPERTYS:
      return receivePropertys(state, action)
    case actionTypes.ESTATE_DRAWING_CHANGE_CONFIRMED_PROPERTY:
      return changeConfirmedProperty(state, action)
    case actionTypes.ESTATE_DRAWING_UPDATE_TEMP_SELECTED_TAGS:
      return updateTempSelectedTags(state, action)
    case actionTypes.ESTATE_DRAWING_UPDATE_SELECTED_TAGS:
      return updateSelectedTags(state, action)
    case actionTypes.ESTATE_DRAWING_RESTORE_TAGS:
      return restoreTags(state)
    default:
      return state
  }
}

export default estateDrawingReducer
