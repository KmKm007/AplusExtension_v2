import actions from '@actions'

const mapStateToProps = state => ({
  propertys: state.estateDrawing.propertys,
  selectedPropertyId: state.estateDrawing.selectedPropertyId,
  showModal: state.estateDrawing.showModal,
  confirmedProperty: state.estateDrawing.confirmedProperty,
  tags: state.estateDrawing.tags,
  selectedTags: state.estateDrawing.selectedTags,
  tempSelectedTags: state.estateDrawing.tempSelectedTags,
  qrcodeBase64: state.estateDrawing.qrcodeBase64
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
  },
  fetchPropertyByNo (propertyNo) {
    dispatch(actions.estateDrawingFetchPropertysByNo(propertyNo))
  },
  changeConfirmedProperty (property) {
    dispatch(actions.estateDrawingChangeConfirmedProperty(property))
  },
  saveTags () {
    dispatch(actions.estateDrawingUpdateSelectedTags())
  },
  handleRestoreTags () {
    dispatch(actions.estateDrawingRestoreTags())
  },
  handleTagClick (tagId) {
    dispatch(actions.estateDrawingUpdateTempSelectedTags(tagId))
  },
  fetchQrcodeBase64 (url) {
    dispatch(actions.estateDrawingFetchQrcodeBase64(url))
  }
})

export {
  mapStateToProps,
  mapDispatchToProps
}
