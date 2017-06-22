import React from 'react'
import PropTypes from 'prop-types'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import Chip from 'material-ui/Chip'
import Toggle from 'material-ui/Toggle'
import MaterialUIComponent from '@template/MaterialUIComponent'

const styles = {
  chip: {
    margin: 4,
    width: '75px',
    justifyContent: 'center'
  },
  regionChip: {
    margin: 4,
    width: '114px',
    justifyContent: 'center'
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap'
  }
}

class EstateSearchBarView extends MaterialUIComponent {
  constructor (props) {
    super(props)
    this.state = {
      isShowDistrictBar: false,
      isShowRegionBar: false
    }
  }

  handleDistrictSwitch = isShowDistrictBar => {
    this.setState({
      isShowDistrictBar
    })
  }

  handleRegionSwitch = (isShowRegionBar) => {
    this.setState({
      isShowRegionBar
    })
  }

  handleSearchSubmitBtnClick= () => {
    this.props.handleSearchSubmit()
    this.handleDistrictSwitch(false)
    this.handleRegionSwitch(false)
    this.props.handleSearchBarClick(false)
  }

  handleSearchClose = () => {
    this.handleDistrictSwitch(false)
    this.handleRegionSwitch(false)
    this.props.handleSearchBarClick(false)
  }

  isSelectedDistrictEmpty () {
    if (!this.props.selectedDistrictIdList || this.props.selectedDistrictIdList.length === 0) {
      return true
    } else {
      return false
    }
  }

  render () {
    const actions = [
      <FlatButton
        label="关闭"
        primary={true}
        onTouchTap={ () => this.handleSearchClose() }
      />,
      <FlatButton
        label="提交"
        primary={true}
        onTouchTap={ () => this.handleSearchSubmitBtnClick() }
      />
    ]

    const defaultChipColor = '#eee'
    const selectedChipColor = '#00BCD4'
    const selectedDistrictIdList = this.props.selectedDistrictIdList
    const districtChipList = (
      <div style={styles.wrapper}>
        {this.props.districtList.map(district => {
          let isExist = selectedDistrictIdList.some(d => district.id === d)
          return (
            <Chip
              style={styles.chip}
              backgroundColor={isExist ? selectedChipColor : defaultChipColor}
              key={district.id}
              onTouchTap={() => this.props.handleDistrictChipCilck(district.id)}
            >
              { district.name }
            </Chip>
          )
        })}
      </div>
    )

    const selectedRegionIdList = this.props.selectedRegionIdList
    const regionList = (
      <div style={styles.wrapper}>
        {this.props.regionList.map(region => {
          let isExist = selectedRegionIdList.some(d => region.id === d)
          return (
            <Chip
              style={styles.regionChip}
              backgroundColor={isExist ? selectedChipColor : defaultChipColor}
              key={region.id}
              onTouchTap={() => this.props.handleRegionChipClick(region.id)}
            >
              { region.name }
            </Chip>
          )
        })}
      </div>
    )

    let isSelectedDistrictEmpty = this.isSelectedDistrictEmpty()

    return (
      <div>
        <Dialog
          contentStyle={{width: '800px', maxWidth: '1000px', transform: 'initial'}}
          title="搜索工具"
          actions={actions}
          model={true}
          open={this.props.open}
        >
          <div className="districtbar">
            <header className="searchBar-title">
              <h4 className="searchBar-title-item">城区</h4>
                <Toggle
                  style={{width: '80px'}}
                  label="展开"
                  onToggle={(object, isOpen) => this.handleDistrictSwitch(isOpen)}
                />
            </header>
            {this.state.isShowDistrictBar ? districtChipList : null}
          </div>
          <div className="regionBar">
            <header className="searchBar-title">
              <h4 className="searchBar-title-item">片区</h4>
              <div className="con-flex1">
                <FlatButton
                  disabled={isSelectedDistrictEmpty}
                  label="清除"
                  onTouchTap={this.props.handleRegionClearBtnClick}
                  style={{lineHeight: 'auto', height: 'auto'}}
                />
                <Toggle
                  disabled={isSelectedDistrictEmpty}
                  style={{width: '80px'}}
                  label="展开"
                  onToggle={(object, isOpen) => this.handleRegionSwitch(isOpen)}
                />
              </div>
            </header>
            <div className="list-region">
              {this.state.isShowRegionBar ? regionList : null}
            </div>
          </div>
        </Dialog>
      </div>
    )
  }
}

EstateSearchBarView.PropTypes = {
  open: PropTypes.bool.isRequired,
  handleSearchBarClick: PropTypes.func.isRequired,
  handleSearchSubmit: PropTypes.func.isRequired,
  handleDistrictChipCilck: PropTypes.func.isRequired,
  handleRegionChipClick: PropTypes.func.isRequired,
  handleRegionClearBtnClick: PropTypes.func.isRequired,
  districtList: PropTypes.array.isRequired,
  regionList: PropTypes.array.isRequired
}

export default EstateSearchBarView
