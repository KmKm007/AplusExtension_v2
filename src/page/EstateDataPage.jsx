import React from 'react'
import EstateDataContainer from '../containers/EstateDataContainer'

class EstateDataPage extends React.Component {
  static defaultProps = {
    title: '楼盘信息统计'
  }

  componentWillMount() {
    document.title = this.props.title
  }

  render () {
    return (
      <div className="cont-estate-data">
        <EstateDataContainer />
      </div>
    )
  }
}

export default EstateDataPage
