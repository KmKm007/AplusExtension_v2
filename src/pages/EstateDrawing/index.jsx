import React from 'react'
import { connect } from 'react-redux'
import './estate-drawing.scss'
import T1 from './template/t1/index'
import { mapStateToProps, mapDispatchToProps } from './store'

class EstateDrawing extends React.Component {
  render () {
    const template = this.props.match.params.template
    let T
    switch (template) {
      case 't1':
        T = T1
        break
      default:
        T = T1
    }
    return <T {...this.props}/>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EstateDrawing)
