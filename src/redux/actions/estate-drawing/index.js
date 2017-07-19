import actionTypes from '@actionTypes'
import apis from '@service/api'

const { getPropertyByNo } = apis

export function estateDrawingCloseModal () {
  return {
    type: actionTypes.ESTATE_DRAWING_CLOSE_MODAL
  }
}

export function estateDrawingChangeModal (type) {
  return {
    type: actionTypes.ESTATE_DRAWING_CHANGE_MODAL,
    payload: {
      type
    }
  }
}

export function estateDrawingChangeSelectedProperty (id) {
  return {
    type: actionTypes.ESTATE_DRAWING_CHANGE_SELECTED_PROPERTY,
    payload: {
      id
    }
  }
}

export function estateDrawingRequestPropertysByNo (propertyNo) {
  return {
    type: actionTypes.ESTATE_DRAWING_REQUEST_PROPERTYS_BY_NO,
    payload: {
      propertyNo
    }
  }
}

export function estateDrawingReceivePropertys (propertys) {
  return {
    type: actionTypes.ESTATE_DRAWING_RECEIVE_PROPERTYS,
    payload: {
      propertys
    }
  }
}

export function estateDrawingReceivePropertysFailed (errorMesg) {
  return {
    type: actionTypes.ESTATE_DRAWING_RECEIVE_PROPERTYS_FAILED,
    payload: {
      errorMesg
    }
  }
}

export const estateDrawingFetchPropertysByNo = propertyNo => dispatch => {
  const params = {
    propertyNo
  }
  dispatch(estateDrawingRequestPropertysByNo(propertyNo))
  getPropertyByNo(params, propertys => {
    dispatch(estateDrawingReceivePropertys(propertys))
  }, errorMesg => {
    dispatch(estateDrawingReceivePropertysFailed(errorMesg))
  })
}

export function estateDrawingChangeConfirmedProperty (property) {
  return {
    type: actionTypes.ESTATE_DRAWING_CHANGE_CONFIRMED_PROPERTY,
    payload: {
      property
    }
  }
}

export function estateDrawingUpdateTempSelectedTags (tags) {
  return {
    type: actionTypes.ESTATE_DRAWING_UPDATE_TEMP_SELECTED_TAGS,
    payload: {
      tags
    }
  }
}

export function estateDrawingUpdateSelectedTags (tags) {
  return {
    type: actionTypes.ESTATE_DRAWING_UPDATE_SELECTED_TAGS,
    payload: {
      tags
    }
  }
}
