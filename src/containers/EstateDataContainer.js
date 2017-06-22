import React from 'react'
import PropTypes from 'prop-types'
import EstateData from '@components/estateData/EstateData'
import PageObjectContainer from './PageObjectContainer'
import EstateDataToolbar from '@components/EstateData/EstateDataToolbar'
import EstateSearchBarView from '@components/EstateData/EstateSearchBarView'
import districtList from '@service/constant/districtList'
import Loading from '@components/Loading'
import Footer from '@components/footer'

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

  componentDidMount () {
    this.props.fetchData(null)
    this.props.fetchRegionList()
  }

  render () {
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
        <Footer />
      </div>
    ) : <Loading />
  }
}

export default EstateDataContainer
