import actions from '@actions'

const mapStateToProps = state => ({
  propertys: state.estateDrawing.propertys,
  selectedPropertyId: state.estateDrawing.selectedPropertyId,
  showModal: state.estateDrawing.showModal
})

const mapDispatchToProps = dispatch => ({
  changeModal (type) {
    dispatch(actions.estateDrawingChangeModal(type))
  },
  closeModal () {
    dispatch(actions.estateDrawingCloseModal())
  },
  changeSelectedProperty (id) {
    dispatch(actions.estateDrawingChangeSelectedProperty(id))
  }
})

export {
  mapStateToProps,
  mapDispatchToProps
}
