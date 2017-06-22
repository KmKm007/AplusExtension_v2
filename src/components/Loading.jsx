import React from 'React'
import MaterialUIComponent from '@template/MaterialUIComponent'
import CircularProgress from 'material-ui/CircularProgress'

const style = {
  textAlign: 'center',
  marginTop: '50px'
}

class Loading extends MaterialUIComponent {
  render () {
    return (
     <div style={style}>
       <CircularProgress size={60} thickness={7} />
     </div>
    )
  }
}

export default Loading
