import actionTypes from '@actionTypes'
import apis from '@service/api'

const { getPropertyAdByAdNo, getImageBase64 } = apis

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
  getPropertyAdByAdNo(params, propertys => {
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

export function estateDrawingUpdateTempSelectedTags (tagId) {
  return {
    type: actionTypes.ESTATE_DRAWING_UPDATE_TEMP_SELECTED_TAGS,
    payload: {
      tagId
    }
  }
}

export function estateDrawingUpdateSelectedTags () {
  return {
    type: actionTypes.ESTATE_DRAWING_UPDATE_SELECTED_TAGS
  }
}

export function estateDrawingRestoreTags () {
  return {
    type: actionTypes.ESTATE_DRAWING_RESTORE_TAGS
  }
}

export function estateDrawingRequestPropertyAdByAdNo (adNo) {
  return {
    type: actionTypes.ESTATE_DRAWING_REQUEST_PROPERTY_AD_BY_AD_NO,
    payload: {
      adNo
    }
  }
}

export function estateDrawingReceivePropertyAd (propertyAd) {
  return {
    type: actionTypes.ESTATE_DRAWING_RECEIVE_PROPERTY_AD,
    payload: {
      propertyAd
    }
  }
}

export function estateDrawingReceivePropertyAdFailed (errorMesg) {
  return {
    type: actionTypes.ESTATE_DRAWING_RECEIVE_PROPERTY_AD_FAILED,
    payload: {
      errorMesg
    }
  }
}

export function estateDrawingRequestQrcodeBase64 (url) {
  return {
    type: actionTypes.ESTATE_DRAWING_REQUEST_QRCODE_BASE64,
    payload: {
      url
    }
  }
}

export function estateDrawingReceiveQrcodeBase64 (qrcodeBase64) {
  return {
    type: actionTypes.ESTATE_DRAWING_RECEIVE_QRCODE_BASE64,
    payload: {
      qrcodeBase64
    }
  }
}

export function estateDrawingReceiveQrcodeBase64Failed (errorMesg) {
  return {
    type: actionTypes.ESTATE_DRAWING_RECEIVE_QRCODE_BASE64_FAILED,
    payload: {
      errorMesg
    }
  }
}

export const estateDrawingFetchQrcodeBase64 = url => dispatch => {
  dispatch(estateDrawingRequestQrcodeBase64())
  const params = {
    url
  }
  getImageBase64(params, qrcodeBase64 => {
    dispatch(estateDrawingReceiveQrcodeBase64(qrcodeBase64))
  }, errorMesg => {
    dispatch(estateDrawingReceiveQrcodeBase64Failed(errorMesg))
  })
}
