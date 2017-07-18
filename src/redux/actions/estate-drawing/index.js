import actionTypes from '@actionTypes'

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
