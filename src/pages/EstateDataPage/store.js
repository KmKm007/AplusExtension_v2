import actions from '@actions/EstateData'
import sortRule from '@service/constant/sortRule'

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
    case sortRule.AVA_SALE_PROPERTYCOUNT_DESC:
      sortFunc = (a, b) => b.avaSalePropertyCount - a.avaSalePropertyCount
      break
    case sortRule.AVA_SALE_PROPERTYCOUNT_ASC:
      sortFunc = (a, b) => a.avaSalePropertyCount - b.avaSalePropertyCount
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
  const { isDataFetched, isShowSearchBar } = currentState.dataStatus
  const { currentPage, pageSize } = pageObject
  const compressedList = getSortList(dataList, sortRule).slice((currentPage - 1) * pageSize, currentPage * pageSize)
  const selectedDistrictIdList = filter.districtIdList
  const childRegionList = regionList.filter(region => {
    const isInclude = selectedDistrictIdList.some(id => id === region.district.id)
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
  handleRealPropertyCountClick (currentSortRule) {
    if (currentSortRule === sortRule.REALSUR_PROPERTYCOUNT_DESC) {
      dispatch(actions.changeOrderRule(sortRule.REALSUR_PROPERTYCOUNT_ASC))
    } else {
      dispatch(actions.changeOrderRule(sortRule.REALSUR_PROPERTYCOUNT_DESC))
    }
    dispatch(actions.fetchSelectedPage(1))
  },
  handlePropertyCountClick (currentSortRule) {
    if (currentSortRule === sortRule.PROPERTYCOUNT_DESC) {
      dispatch(actions.changeOrderRule(sortRule.PROPERTYCOUNT_ASC))
    } else {
      dispatch(actions.changeOrderRule(sortRule.PROPERTYCOUNT_DESC))
    }
    dispatch(actions.fetchSelectedPage(1))
  },
  handleAvaPropertyCountClick (currentSortRule) {
    if (currentSortRule === sortRule.AVA_PROPERTYCOUNT_DESC) {
      dispatch(actions.changeOrderRule(sortRule.AVA_PROPERTYCOUNT_ASC))
    } else {
      dispatch(actions.changeOrderRule(sortRule.AVA_PROPERTYCOUNT_DESC))
    }
    dispatch(actions.fetchSelectedPage(1))
  },
  handleKeyPropertyCountClick (currentSortRule) {
    if (currentSortRule === sortRule.KEY_PROPERTYCOUNT_DESC) {
      dispatch(actions.changeOrderRule(sortRule.KEY_PROPERTYCOUNT_ASC))
    } else {
      dispatch(actions.changeOrderRule(sortRule.KEY_PROPERTYCOUNT_DESC))
    }
    dispatch(actions.fetchSelectedPage(1))
  },
  handleRecomPropertyCountClick (currentSortRule) {
    if (currentSortRule === sortRule.RECOM_PROPERTYCOUNT_DESC) {
      dispatch(actions.changeOrderRule(sortRule.RECOM_PROPERTYCOUNT_ASC))
    } else {
      dispatch(actions.changeOrderRule(sortRule.RECOM_PROPERTYCOUNT_DESC))
    }
    dispatch(actions.fetchSelectedPage(1))
  },
  handleTrustRecPropertyCountClick (currentSortRule) {
    if (currentSortRule === sortRule.TRUSTREC_PROPERTYCOUNT_DESC) {
      dispatch(actions.changeOrderRule(sortRule.TRUSTREC_PROPERTYCOUNT_ASC))
    } else {
      dispatch(actions.changeOrderRule(sortRule.TRUSTREC_PROPERTYCOUNT_DESC))
    }
    dispatch(actions.fetchSelectedPage(1))
  },
  handlePhonePropertyCountClick (currentSortRule) {
    if (currentSortRule === sortRule.PHONE_PROPERTYCOUNT_DESC) {
      dispatch(actions.changeOrderRule(sortRule.PHONE_PROPERTYCOUNT_ASC))
    } else {
      dispatch(actions.changeOrderRule(sortRule.PHONE_PROPERTYCOUNT_DESC))
    }
    dispatch(actions.fetchSelectedPage(1))
  },
  handleAdmPropertyCountClick (currentSortRule) {
    if (currentSortRule === sortRule.ADM_PROPERTYCOUNT_DESC) {
      dispatch(actions.changeOrderRule(sortRule.ADM_PROPERTYCOUNT_ASC))
    } else {
      dispatch(actions.changeOrderRule(sortRule.ADM_PROPERTYCOUNT_DESC))
    }
    dispatch(actions.fetchSelectedPage(1))
  },
  handleAvaSalePropertyCountClick (currentSortRule) {
    if (currentSortRule === sortRule.AVA_SALE_PROPERTYCOUNT_DESC) {
      dispatch(actions.changeOrderRule(sortRule.AVA_SALE_PROPERTYCOUNT_ASC))
    } else {
      dispatch(actions.changeOrderRule(sortRule.AVA_SALE_PROPERTYCOUNT_DESC))
    }
    dispatch(actions.fetchSelectedPage(1))
  },
  handleSearchBarClick (status) {
    if (status) {
      dispatch(actions.showSearchBar())
    } else {
      dispatch(actions.hideSearchBar())
    }
    dispatch(actions.fetchSelectedPage(1))
  },
  handlePageClick (page) {
    dispatch(actions.fetchSelectedPage(page))
  },
  handleDataExport (filter) {
    dispatch(actions.fetchExportDataCode(filter))
  },
  handleDistrictChipCilck (districtId, districtIdList, regionList) {
    const childRegionIdList = regionList.reduce((list, region) => {
      if (region.district.id === districtId) {
        list.push(region.id)
      }
      return list
    }, [])
    const isInDistrictIdList = districtIdList.some(id => id === districtId)
    if (isInDistrictIdList) {
      dispatch(actions.removeDistrictId(districtId))
      dispatch(actions.removeRegionIds(childRegionIdList))
    } else {
      dispatch(actions.addDistrictId(districtId))
      dispatch(actions.addRegionIds(childRegionIdList))
    }
  },
  handleRegionChipClick (regionId, regionIdList) {
    const isInRegionIdList = regionIdList.some(id => id === regionId)
    if (isInRegionIdList) {
      dispatch(actions.removeRegionId(regionId))
    } else {
      dispatch(actions.addRegionId(regionId))
    }
  },
  fetchData (filter) {
    dispatch(actions.fetchData(filter))
  },
  fetchRegionList () {
    dispatch(actions.fetchRegionList())
  },
  handleClearRegionIds () {
    dispatch(actions.clearRegionIds())
  }
})

export { mapStateToProps, mapDispatchToProps }
