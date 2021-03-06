import React from 'react'
import PropTypes from 'prop-types'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table'
import cs from 'classnames'
import MaterialUIComponent from '@template/MaterialUIComponent'

const style = {
  heanderTitle: {
    margin: '8px 0'
  },
  t1: {
    width: '20px'
  },
  t2: {
    width: '40px'
  },
  t3: {
    width: '60px'
  },
  t4: {
    width: '80px'
  },
  t5: {
    width: '100px'
  },
  t6: {
    width: '120px'
  },
  t7: {
    width: '140px'
  },
  t8: {
    width: '160px'
  },
  t9: {
    width: '180px'
  },
  t10: {
    width: '200px'
  }
}

class EstateData extends MaterialUIComponent {
  render () {
    let activeHeaderClass = cs('table-header', 'active-table-header')
    let headerClass = cs('table-header')
    const { sortRule, handlePropertyCountClick, handleAvaPropertyCountClick,
      handleRealPropertyCountClick, handleKeyPropertyCountClick, handleTrustRecPropertyCountClick,
      handleRecomPropertyCountClick, handlePhonePropertyCountClick, handleAdmPropertyCountClick,
      handleAvaSalePropertyCountClick } = this.props
    return (
      <div>
        <Table fixedHeader={true} >
          <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}
          >
            <TableRow>
              <TableHeaderColumn>行政区</TableHeaderColumn>
              <TableHeaderColumn style={style.t6}>片区</TableHeaderColumn>
              <TableHeaderColumn style={style.t7}>楼盘</TableHeaderColumn>
              <TableHeaderColumn>
                <a className={sortRule === 'PROPERTYCOUNT_ASC' || sortRule === 'PROPERTYCOUNT_DESC' ? activeHeaderClass : headerClass}
                  onClick={() => handlePropertyCountClick(sortRule)}>房源总数
                </a>
              </TableHeaderColumn>
              <TableHeaderColumn>
                <a className={sortRule === 'AVA_PROPERTYCOUNT_DESC' || sortRule === 'AVA_PROPERTYCOUNT_ASC' ? activeHeaderClass : headerClass}
                  onClick={() => handleAvaPropertyCountClick(sortRule)}>有效房源数
                </a>
              </TableHeaderColumn>
              <TableHeaderColumn>
                <a className={sortRule === 'AVA_SALE_PROPERTYCOUNT_DESC' || sortRule === 'AVA_SALE_PROPERTYCOUNT_ASC' ? activeHeaderClass : headerClass}
                  onClick={() => handleAvaSalePropertyCountClick(sortRule)}>有效售房数
                </a>
              </TableHeaderColumn>
              <TableHeaderColumn>
                <a className={sortRule === 'REALSUR_PROPERTYCOUNT_ASC' || sortRule === 'REALSUR_PROPERTYCOUNT_DESC' ? activeHeaderClass : headerClass}
                  onClick={() => handleRealPropertyCountClick(sortRule)}>实勘房源数
                </a>
              </TableHeaderColumn>
              <TableHeaderColumn>
                <a className={sortRule === 'KEY_PROPERTYCOUNT_ASC' || sortRule === 'KEY_PROPERTYCOUNT_DESC' ? activeHeaderClass : headerClass}
                  onClick={() => handleKeyPropertyCountClick(sortRule)}>钥匙房源数
                </a>
              </TableHeaderColumn>
              <TableHeaderColumn>
                <a className={sortRule === 'TRUSTREC_PROPERTYCOUNT_ASC' || sortRule === 'TRUSTREC_PROPERTYCOUNT_DESC' ? activeHeaderClass : headerClass}
                  onClick={() => handleTrustRecPropertyCountClick(sortRule)}>委托房源数
                </a>
              </TableHeaderColumn>
              <TableHeaderColumn>
                <a className={sortRule === 'PHONE_PROPERTYCOUNT_DESC' || sortRule === 'PHONE_PROPERTYCOUNT_ASC' ? activeHeaderClass : headerClass}
                  onClick={() => handlePhonePropertyCountClick(sortRule)}>电话房源数
                </a>
              </TableHeaderColumn>
              <TableHeaderColumn>
                <a className={sortRule === 'ADM_PROPERTYCOUNT_DESC' || sortRule === 'ADM_PROPERTYCOUNT_ASC' ? activeHeaderClass : headerClass}
                  onClick={() => handleAdmPropertyCountClick(sortRule)}>官网房源数
                </a>
              </TableHeaderColumn>
              <TableHeaderColumn>
                <a className={sortRule === 'RECOM_PROPERTYCOUNT_ASC' || sortRule === 'RECOM_PROPERTYCOUNT_DESC' ? activeHeaderClass : headerClass}
                  onClick={() => handleRecomPropertyCountClick(sortRule)}>经理推荐
                </a>
              </TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={false}
          >
          {this.props.dataList.map((data, index) => {
            return (
              <TableRow key={index}>
                <TableRowColumn>{data.estate.district.name}</TableRowColumn>
                <TableRowColumn style={style.t6}>{data.estate.region.name}</TableRowColumn>
                <TableRowColumn style={style.t7}><span title={data.estate.name}>{data.estate.name}</span></TableRowColumn>
                <TableRowColumn>{data.propertyCount}</TableRowColumn>
                <TableRowColumn>{data.avaPropertyCount}</TableRowColumn>
                <TableRowColumn>{data.avaSalePropertyCount}</TableRowColumn>
                <TableRowColumn>{data.realSurPropertyCount}</TableRowColumn>
                <TableRowColumn>{data.keyPropertyCount}</TableRowColumn>
                <TableRowColumn>{data.trustRecPropertyCount}</TableRowColumn>
                <TableRowColumn>{data.phonePropertyCount}</TableRowColumn>
                <TableRowColumn>{data.admPropertyCount}</TableRowColumn>
                <TableRowColumn>{data.bmRecomPropertyCount + data.dmRecomPropertyCount}</TableRowColumn>
            </TableRow>
            )
          })}
          </TableBody>
        </Table>
      </div>
    )
  }
}

EstateData.propTypes = {
  dataList: PropTypes.array.isRequired,
  handlePropertyCountClick: PropTypes.func.isRequired,
  handleAvaPropertyCountClick: PropTypes.func.isRequired,
  handleRealPropertyCountClick: PropTypes.func.isRequired,
  handleKeyPropertyCountClick: PropTypes.func.isRequired,
  handleTrustRecPropertyCountClick: PropTypes.func.isRequired
}

export default EstateData
