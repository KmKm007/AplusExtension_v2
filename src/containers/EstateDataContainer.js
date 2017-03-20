import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import EstateData from '../components/estateData/EstateData'
import PageObjectContainer from './PageObjectContainer'
import types from '../actions/EstateData'
import sortRule from '../constant/sortRule'
import EstateDataToolbar from '../components/EstateData/EstateDataToolbar'
import EstateSearchBarView from '../components/EstateData/EstateSearchBarView'
import districtList from '../constant/districtList'

class EstateDataContainer extends React.Component {
  static propTypes = {
    dataList: PropTypes.array.isRequired,
    handleRealPropertyCountClick: PropTypes.func.isRequired,
    handlePropertyCountClick: PropTypes.func.isRequired,
    handleAvaPropertyCountClick: PropTypes.func.isRequired,
    handleKeyPropertyCountClick: PropTypes.func.isRequired,
    handleBMRecomPropertyCountClick: PropTypes.func.isRequired,
    handleDMRecomPropertyCountClick: PropTypes.func.isRequired,
    sortRule: PropTypes.string.isRequired,
    isDataFetched: PropTypes.bool.isRequired,
    isShowSearchBar: PropTypes.bool.isRequired
  }

  static defaultProps = {
    tableTitle: '楼盘信息统计表'
  }

  componentDidMount() {
    this.props.fetchData(null)
  }

  render() {
    const { dataList, pageObject, sortRule, filter, isDataFetched, isShowSearchBar } = this.props
    const { handleRealPropertyCountClick, handlePropertyCountClick,
      handleAvaPropertyCountClick, handleKeyPropertyCountClick, handleBMRecomPropertyCountClick,
      handleDMRecomPropertyCountClick, handleTrustRecPropertyCountClick,
      handlePageClick, handleDataExport, handleSearchBarClick } = this.props
    const { regionIdList, districtIdList } = filter
    console.log(handleDataExport)
    return isDataFetched ? (
      <div>
        <EstateDataToolbar
          title={this.props.tableTitle}
          handleDataExport={() => handleDataExport(filter)}
          handleSearchBarClick={() => handleSearchBarClick(true)}
        />
        <EstateData
          dataList={dataList}
          sortRule={sortRule}
          handleRealPropertyCountClick={handleRealPropertyCountClick}
          handlePropertyCountClick={handlePropertyCountClick}
          handleAvaPropertyCountClick={handleAvaPropertyCountClick}
          handleKeyPropertyCountClick={handleKeyPropertyCountClick}
          handleBMRecomPropertyCountClick={handleBMRecomPropertyCountClick}
          handleDMRecomPropertyCountClick={handleDMRecomPropertyCountClick}
          handleTrustRecPropertyCountClick={handleTrustRecPropertyCountClick}
        />
        <PageObjectContainer
          pageObject={pageObject}
          handlePageClick={handlePageClick}
        />
        <EstateSearchBarView
          open={isShowSearchBar}
          handleSearchBarClick ={this.handleSearchBarClick}
          districtList={districtList}
          regionList={[]}
          selectedDistrictIdList={districtIdList}
          selectedRegionIdList={regionIdList}
          handleDistrictChipCilck={this.handleDistrictChipCilck}
          handleRegionChipClick={this.handleRegionChipClick}
          handleSearchSubmit={this.handleSearchSubmit}
          handleRegionClearBtnClick={this.handleRegionClear}
        />
      </div>
    ) : <div>loading data...</div>
  }
}

const getSortList = (dataList, currentSortRule) => {
  let sortFunc
  switch (currentSortRule) {
    case sortRule.AVA_PROPERTYCOUNT_ASC:
      sortFunc = (a, b) => a.avaPropertyCount - b.avaPropertyCount
      break
    case sortRule.PROPERTYCOUNT_DESC:
      sortFunc = (a, b) => b.propertyCount - a.propertyCount
      break
    case sortRule.PROPERTYCOUNT_ASC:
      sortFunc = (a, b) => a.propertyCount - b.propertyCount
      break
    case sortRule.TRUSTREC_PROPERTYCOUNT_DESC:
      sortFunc = (a, b) => b.trustRecPropertyCount - a.trustRecPropertyCount
      break
    case sortRule.TRUSTREC_PROPERTYCOUNT_ASC:
      sortFunc = (a, b) => a.trustRecPropertyCount - b.trustRecPropertyCount
      break
    case sortRule.KEY_PROPERTYCOUNT_DESC:
      sortFunc = (a, b) => b.keyPropertyCount - a.keyPropertyCount
      break
    case sortRule.KEY_PROPERTYCOUNT_ASC:
      sortFunc = (a, b) => a.keyPropertyCount - b.keyPropertyCount
      break
    case sortRule.REALSUR_PROPERTYCOUNT_DESC:
      sortFunc = (a, b) => b.realSurPropertyCount - a.realSurPropertyCount
      break
    case sortRule.REALSUR_PROPERTYCOUNT_ASC:
      sortFunc = (a, b) => a.realSurPropertyCount - b.realSurPropertyCount
      break
    case sortRule.BMRECOM_PROPERTYCOUNT_DESC:
      sortFunc = (a, b) => b.bmRecomPropertyCount - a.bmRecomPropertyCount
      break
    case sortRule.BMRECOM_PROPERTYCOUNT_ASC:
      sortFunc = (a, b) => a.bmRecomPropertyCount - b.bmRecomPropertyCount
      break
    case sortRule.DMRECOM_PROPERTYCOUNT_DESC:
      sortFunc = (a, b) => b.dmRecomPropertyCount - a.dmRecomPropertyCount
      break
    case sortRule.DMRECOM_PROPERTYCOUNT_ASC:
      sortFunc = (a, b) => a.dmRecomPropertyCount - b.dmRecomPropertyCount
      break
    case sortRule.AVA_PROPERTYCOUNT_DESC:
    default:
      sortFunc = (a, b) => b.avaPropertyCount - a.avaPropertyCount
  }
  return dataList.sort(sortFunc)
}

const mapStateToProps = state => {
  const currentState = state.estateData
  const { pageObject, dataList, sortRule, filter } = currentState
  const { isDataFetched,isShowSearchBar }= currentState.dataStatus
  const { currentPage, pageSize } = pageObject
  const compressedList = getSortList(dataList, sortRule).slice((currentPage -1) * pageSize, currentPage * pageSize)
  return ({
    dataList: compressedList,
    pageObject,
    isDataFetched,
    isShowSearchBar,
    sortRule,
    filter
  })
}

const mapDispatchToProps = dispatch => ({
  handleRealPropertyCountClick: currentSortRule => {
    if (currentSortRule === sortRule.REALSUR_PROPERTYCOUNT_DESC)
      dispatch(types.changeOrderRule(sortRule.REALSUR_PROPERTYCOUNT_ASC))
    else
      dispatch(types.changeOrderRule(sortRule.REALSUR_PROPERTYCOUNT_DESC))
  },
  handlePropertyCountClick: currentSortRule => {
    if (currentSortRule === sortRule.PROPERTYCOUNT_DESC)
      dispatch(types.changeOrderRule(sortRule.PROPERTYCOUNT_ASC))
    else
      dispatch(types.changeOrderRule(sortRule.PROPERTYCOUNT_DESC))
  },
  handleAvaPropertyCountClick: currentSortRule => {
    if (currentSortRule === sortRule.AVA_PROPERTYCOUNT_DESC)
      dispatch(types.changeOrderRule(sortRule.AVA_PROPERTYCOUNT_ASC))
    else
      dispatch(types.changeOrderRule(sortRule.AVA_PROPERTYCOUNT_DESC))
  },
  handleKeyPropertyCountClick: currentSortRule => {
    if (currentSortRule === sortRule.KEY_PROPERTYCOUNT_DESC)
      dispatch(types.changeOrderRule(sortRule.KEY_PROPERTYCOUNT_ASC))
    else
      dispatch(types.changeOrderRule(sortRule.KEY_PROPERTYCOUNT_DESC))
  },
  handleBMRecomPropertyCountClick: currentSortRule => {
    if (currentSortRule === sortRule.BMRECOM_PROPERTYCOUNT_DESC)
      dispatch(types.changeOrderRule(sortRule.BMRECOM_PROPERTYCOUNT_ASC))
    else
      dispatch(types.changeOrderRule(sortRule.BMRECOM_PROPERTYCOUNT_DESC))
  },
  handleDMRecomPropertyCountClick: currentSortRule => {
    if (currentSortRule === sortRule.DMRECOM_PROPERTYCOUNT_DESC)
      dispatch(types.changeOrderRule(sortRule.DMRECOM_PROPERTYCOUNT_ASC))
    else
      dispatch(types.changeOrderRule(sortRule.DMRECOM_PROPERTYCOUNT_DESC))
  },
  handleTrustRecPropertyCountClick: currentSortRule => {
    if (currentSortRule === sortRule.TRUSTREC_PROPERTYCOUNT_DESC)
      dispatch(types.changeOrderRule(sortRule.TRUSTREC_PROPERTYCOUNT_ASC))
    else
      dispatch(types.changeOrderRule(sortRule.TRUSTREC_PROPERTYCOUNT_DESC))
  },
  handleSearchBarClick: status => {
    if (status)
      dispatch(types.showSearchBar())
    else
      dispatch(types.hideSearchBar())
  },
  handlePageClick: page => dispatch(types.fetchSelectedPage(page)),
  handleDataExport: filter => dispatch(types.fetchExportDataCode(filter)),
  handleDistrictChipCilck: (districtId, districtIdList) => {
    if (districtIdList.includes(districtId))
      dispatch(types.removeDistrictId(districtId))
    else
      dispatch(types.addDistrictId(districtId))
  },
  handleRegionChipClick: (regionId, regionIdList) => {
    if (regionIdList.includes(regionId))
      dispatch(types.removeRegionId(regionId))
    else
      dispatch(types.addRegionId(regionId))
  },
  fetchData: filter => dispatch(types.fetchData(filter))
})

export default connect(mapStateToProps, mapDispatchToProps)(EstateDataContainer)
