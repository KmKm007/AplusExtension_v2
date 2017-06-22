import React from 'react'
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

class MaterialUIComponent extends React.Component {
  getChildContext () {
    return {
      muiTheme: getMuiTheme(baseTheme)
    }
  }
}

MaterialUIComponent.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired
}

export default MaterialUIComponent
