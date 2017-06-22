import React from 'react'
import { connect } from 'react-redux'
import EstateDataContainer from '@containers/EstateDataContainer'
import { mapStateToProps, mapDispatchToProps } from './store'

class EstateDataPage extends React.Component {
  static defaultProps = {
    title: '楼盘信息统计'
  }

  componentWillMount () {
    document.title = this.props.title
  }

  render () {
    return (
      <div className="cont-estate-data">
        <EstateDataContainer {...this.props}/>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EstateDataPage)
