import actionTypes from '@actionTypes'

const initialState = {
  showModal: 0,
  propertys: [],
  selectedPropertyId: null,
  isFetchingPropertys: null,
  isFetchingQrcodeBase64: null,
  confirmedProperty: null,
  tempSelectedTags: [],
  selectedTags: [],
  qrcodeBase64: null,
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
      name: '看房方便'
    },
    {
      id: 5,
      name: '风水好'
    },
    {
      id: 6,
      name: '房本满两年'
    },
    {
      id: 7,
      name: '视野开阔'
    },
    {
      id: 8,
      name: '优质教育'
    },
    {
      id: 9,
      name: '带车位'
    },
    {
      id: 10,
      name: '采光明亮'
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
    if (tempSelectedTags.length < 4) {
      nextTempSelectedTags = [...tempSelectedTags, tagId]
    } else {
      nextTempSelectedTags = tempSelectedTags
    }
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

function requestQrcodeBase64 (state) {
  return {
    ...state,
    isFetchingQrcodeBase64: true
  }
}

function receiveQrcodeBase64 (state, action) {
  const { payload } = action
  let { qrcodeBase64 } = payload
  qrcodeBase64 = 'data:image/png;base64,' + qrcodeBase64
  return {
    ...state,
    isFetchingQrcodeBase64: false,
    qrcodeBase64
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
    case actionTypes.ESTATE_DRAWING_REQUEST_QRCODE_BASE64:
      return requestQrcodeBase64(state)
    case actionTypes.ESTATE_DRAWING_RECEIVE_QRCODE_BASE64:
      return receiveQrcodeBase64(state, action)
    default:
      return state
  }
}

export default estateDrawingReducer
