const mapStateToProps = state => ({
  propertys: state.estateDrawing.propertys,
  selectedPropertyId: state.estateDrawing.selectedPropertyId,
  showModal: state.estateDrawing.showModal
})

export {
  mapStateToProps
}
