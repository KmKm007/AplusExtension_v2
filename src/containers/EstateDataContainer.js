import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import EstateData from '@components/estateData/EstateData'
import PageObjectContainer from './PageObjectContainer'
import actions from '@actions/EstateData'
import sortRule from '@service/constant/sortRule'
import EstateDataToolbar from '@components/EstateData/EstateDataToolbar'
import EstateSearchBarView from '@components/EstateData/EstateSearchBarView'
import districtList from '@service/constant/districtList'
import Loading from '@components/Loading'

class EstateDataContainer extends React.Component {
  static propTypes = {
    dataList: PropTypes.array.isRequired,
    handleRealPropertyCountClick: PropTypes.func.isRequired,
    handlePropertyCountClick: PropTypes.func.isRequired,
    handleAvaPropertyCountClick: PropTypes.func.isRequired,
    handleKeyPropertyCountClick: PropTypes.func.isRequired,
    handleRecomPropertyCountClick: PropTypes.func.isRequired,
    sortRule: PropTypes.string.isRequired,
    isDataFetched: PropTypes.bool.isRequired,
    isShowSearchBar: PropTypes.bool.isRequired
  }

  static defaultProps = {
    tableTitle: '楼盘信息统计表'
  }

  componentDidMount() {
    this.props.fetchData(null)
    this.props.fetchRegionList()
  }

  render() {
    const { dataList, pageObject, sortRule, filter, regionList, isDataFetched, isShowSearchBar } = this.props
    const { handleRealPropertyCountClick, handlePropertyCountClick,
      handleAvaPropertyCountClick, handleKeyPropertyCountClick,
      handleRecomPropertyCountClick, handleTrustRecPropertyCountClick,
      handlePhonePropertyCountClick, handleAdmPropertyCountClick,
      handlePageClick, handleDataExport, handleSearchBarClick,
      handleDistrictChipCilck, handleRegionChipClick, handleClearRegionIds,
      fetchData } = this.props
    const { regionIdList, districtIdList } = filter
    return isDataFetched ? (
      <div>
        <EstateDataToolbar
          title={this.props.tableTitle}
          handleDataExport={() => handleDataExport(filter)}
          handleSearchBarClick={handleSearchBarClick}
        />
        <EstateData
          dataList={dataList}
          sortRule={sortRule}
          handleRealPropertyCountClick={handleRealPropertyCountClick}
          handlePropertyCountClick={handlePropertyCountClick}
          handleAvaPropertyCountClick={handleAvaPropertyCountClick}
          handleKeyPropertyCountClick={handleKeyPropertyCountClick}
          handleRecomPropertyCountClick={handleRecomPropertyCountClick}
          handleTrustRecPropertyCountClick={handleTrustRecPropertyCountClick}
          handlePhonePropertyCountClick={handlePhonePropertyCountClick}
          handleAdmPropertyCountClick={handleAdmPropertyCountClick}
        />
        <PageObjectContainer
          pageObject={pageObject}
          handlePageClick={handlePageClick}
        />
        <EstateSearchBarView
          open={isShowSearchBar}
          handleSearchBarClick ={handleSearchBarClick}
          districtList={districtList}
          regionList={regionList}
          selectedDistrictIdList={districtIdList}
          selectedRegionIdList={regionIdList}
          handleDistrictChipCilck={districtId => handleDistrictChipCilck(districtId, filter.districtIdList, regionList)}
          handleRegionChipClick={regionId => handleRegionChipClick(regionId, filter.regionIdList)}
          handleSearchSubmit={() => fetchData(filter)}
          handleRegionClearBtnClick={handleClearRegionIds}
        />
      </div>
    ) : <Loading />
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
    case sortRule.RECOM_PROPERTYCOUNT_DESC:
      sortFunc = (a, b) => (b.bmRecomPropertyCount + b.dmRecomPropertyCount) - (a.bmRecomPropertyCount + a.dmRecomPropertyCount)
      break
    case sortRule.RECOM_PROPERTYCOUNT_ASC:
      sortFunc = (a, b) => (a.bmRecomPropertyCount + a.dmRecomPropertyCount) - (b.bmRecomPropertyCount + b.dmRecomPropertyCount)
      break
    case sortRule.PHONE_PROPERTYCOUNT_DESC:
      sortFunc = (a, b) => b.phonePropertyCount - a.phonePropertyCount
      break
    case sortRule.PHONE_PROPERTYCOUNT_ASC:
      sortFunc = (a, b) => a.phonePropertyCount - b.phonePropertyCount
      break
    case sortRule.ADM_PROPERTYCOUNT_DESC:
      sortFunc = (a, b) => b.admPropertyCount - a.admPropertyCount
      break
    case sortRule.ADM_PROPERTYCOUNT_ASC:
      sortFunc = (a, b) => a.admPropertyCount - b.admPropertyCount
      break
    case sortRule.AVA_PROPERTYCOUNT_DESC:
    default:
      sortFunc = (a, b) => b.avaPropertyCount - a.avaPropertyCount
  }
  return dataList.sort(sortFunc)
}

const mapStateToProps = state => {
  const currentState = state.estateData
  const { pageObject, dataList, sortRule, filter, regionList } = currentState
  const { isDataFetched,isShowSearchBar }= currentState.dataStatus
  const { currentPage, pageSize } = pageObject
  const compressedList = getSortList(dataList, sortRule).slice((currentPage -1) * pageSize, currentPage * pageSize)
  const selectedDistrictIdList = filter.districtIdList
  const childRegionList = regionList.filter(region => {
    const isInclude = selectedDistrictIdList.some(id => id ===region.district.id )
    if (isInclude) {
      return true
    } else {
      return false
    }
  })
  return ({
    dataList: compressedList,
    pageObject,
    isDataFetched,
    isShowSearchBar,
    sortRule,
    filter,
    regionList: childRegionList
  })
}

const mapDispatchToProps = dispatch => ({
  handleRealPropertyCountClick: currentSortRule => {
    if (currentSortRule === sortRule.REALSUR_PROPERTYCOUNT_DESC)
      dispatch(actions.changeOrderRule(sortRule.REALSUR_PROPERTYCOUNT_ASC))
    else
      dispatch(actions.changeOrderRule(sortRule.REALSUR_PROPERTYCOUNT_DESC))
  },
  handlePropertyCountClick: currentSortRule => {
    if (currentSortRule === sortRule.PROPERTYCOUNT_DESC)
      dispatch(actions.changeOrderRule(sortRule.PROPERTYCOUNT_ASC))
    else
      dispatch(actions.changeOrderRule(sortRule.PROPERTYCOUNT_DESC))
  },
  handleAvaPropertyCountClick: currentSortRule => {
    if (currentSortRule === sortRule.AVA_PROPERTYCOUNT_DESC)
      dispatch(actions.changeOrderRule(sortRule.AVA_PROPERTYCOUNT_ASC))
    else
      dispatch(actions.changeOrderRule(sortRule.AVA_PROPERTYCOUNT_DESC))
  },
  handleKeyPropertyCountClick: currentSortRule => {
    if (currentSortRule === sortRule.KEY_PROPERTYCOUNT_DESC)
      dispatch(actions.changeOrderRule(sortRule.KEY_PROPERTYCOUNT_ASC))
    else
      dispatch(actions.changeOrderRule(sortRule.KEY_PROPERTYCOUNT_DESC))
  },
  handleRecomPropertyCountClick: currentSortRule => {
    if (currentSortRule === sortRule.RECOM_PROPERTYCOUNT_DESC)
      dispatch(actions.changeOrderRule(sortRule.RECOM_PROPERTYCOUNT_ASC))
    else
      dispatch(actions.changeOrderRule(sortRule.RECOM_PROPERTYCOUNT_DESC))
  },
  handleTrustRecPropertyCountClick: currentSortRule => {
    if (currentSortRule === sortRule.TRUSTREC_PROPERTYCOUNT_DESC)
      dispatch(actions.changeOrderRule(sortRule.TRUSTREC_PROPERTYCOUNT_ASC))
    else
      dispatch(actions.changeOrderRule(sortRule.TRUSTREC_PROPERTYCOUNT_DESC))
  },
  handlePhonePropertyCountClick (currentSortRule) {
    if (currentSortRule === sortRule.PHONE_PROPERTYCOUNT_DESC) {
      dispatch(actions.changeOrderRule(sortRule.PHONE_PROPERTYCOUNT_ASC))
    } else {
      dispatch(actions.changeOrderRule(sortRule.PHONE_PROPERTYCOUNT_DESC))
    }
  },
  handleAdmPropertyCountClick (currentSortRule) {
    if (currentSortRule === sortRule.ADM_PROPERTYCOUNT_DESC) {
      dispatch(actions.changeOrderRule(sortRule.ADM_PROPERTYCOUNT_ASC))
    } else {
      dispatch(actions.changeOrderRule(sortRule.ADM_PROPERTYCOUNT_DESC))
    }
  },
  handleSearchBarClick: status => {
    if (status)
      dispatch(actions.showSearchBar())
    else
      dispatch(actions.hideSearchBar())
  },
  handlePageClick: page => dispatch(actions.fetchSelectedPage(page)),
  handleDataExport: filter => dispatch(actions.fetchExportDataCode(filter)),
  handleDistrictChipCilck: (districtId, districtIdList, regionList) => {
    const childRegionIdList = regionList.reduce((list, region) => {
      if (region.district.id === districtId) {
        list.push(region.id)
      }
      return list
    },[])
    const isInDistrictIdList = districtIdList.some(id => id === districtId)
    if (isInDistrictIdList) {
      dispatch(actions.removeDistrictId(districtId))
      dispatch(actions.removeRegionIds(childRegionIdList))
    } else {
      dispatch(actions.addDistrictId(districtId))
      dispatch(actions.addRegionIds(childRegionIdList))
    }
  },
  handleRegionChipClick: (regionId, regionIdList) => {
    const isInRegionIdList = regionIdList.some(id => id === regionId)
    if (isInRegionIdList) {
      dispatch(actions.removeRegionId(regionId))
    } else {
      dispatch(actions.addRegionId(regionId))
    }
  },
  fetchData: filter => dispatch(actions.fetchData(filter)),
  fetchRegionList: () => dispatch(actions.fetchRegionList()),
  handleClearRegionIds: () => dispatch(actions.clearRegionIds())
})

export default connect(mapStateToProps, mapDispatchToProps)(EstateDataContainer)
