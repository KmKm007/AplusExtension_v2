import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import EstateData from '../components/view/EstateData'
import types from '../actions/EstateData'

class EstateDataContainer extends React.Component {
  static propTypes = {
    dataList: PropTypes.array.isRequired,
    handleRealPropertyCountClick: PropTypes.func.isRequired,
    handlePropertyCountClick: PropTypes.func.isRequired,
    handleAvaPropertyCountClick: PropTypes.func.isRequired,
    handleKeyPropertyCountClick: PropTypes.func.isRequired,
    handleBMRecomPropertyCountClick: PropTypes.func.isRequired,
    handleDMRecomPropertyCountClick: PropTypes.func.isRequired,
    isDataFetched: PropTypes.bool.isRequired
  }

  render() {
    const { dataList, handleRealPropertyCountClick, handlePropertyCountClick,
      handleAvaPropertyCountClick, handleKeyPropertyCountClick, handleBMRecomPropertyCountClick,
      handleDMRecomPropertyCountClick, handleTrustRecPropertyCountClick, isDataFetched } = this.props
    return isDataFetched ? (
      <div>
        <EstateData
          dataList={dataList}
          handleRealPropertyCountClick={handleRealPropertyCountClick}
          handlePropertyCountClick={handlePropertyCountClick}
          handleAvaPropertyCountClick={handleAvaPropertyCountClick}
          handleKeyPropertyCountClick={handleKeyPropertyCountClick}
          handleBMRecomPropertyCountClick={handleBMRecomPropertyCountClick}
          handleDMRecomPropertyCountClick={handleDMRecomPropertyCountClick}
          handleTrustRecPropertyCountClick={handleTrustRecPropertyCountClick}
        />
      </div>
    ) : <div>...lllll</div>
  }
}

const mapStateToProps = state => {
  const estateDateState = state.estateData
  const { pageObject, dataList } = estateDateState
  const isDataFetched = estateDateState.dataStatus.isDataFetched
  const { currentPage, pageSize } = pageObject
  const compressedList = dataList.slice((currentPage -1) * pageSize, currentPage * pageSize)
  return ({
    dataList: compressedList,
    isDataFetched
  })
}

const mapDispatchToProps = dispatch => ({
  handleRealPropertyCountClick: () => dispatch(types.changeOrderRule('1')),
  handlePropertyCountClick: () => dispatch(types.changeOrderRule('1')),
  handleAvaPropertyCountClick: () => dispatch(types.changeOrderRule('1')),
  handleKeyPropertyCountClick: () => dispatch(types.changeOrderRule('1')),
  handleBMRecomPropertyCountClick: () => dispatch(types.changeOrderRule('1')),
  handleDMRecomPropertyCountClick: () => dispatch(types.changeOrderRule('1')),
  handleTrustRecPropertyCountClick: () => dispatch(types.changeOrderRule('1'))
})

export default connect(mapStateToProps, mapDispatchToProps)(EstateDataContainer)
