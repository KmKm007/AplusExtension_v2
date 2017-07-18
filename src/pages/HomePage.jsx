import React from 'react'
import html2canvas from 'html2canvas/dist/html2canvas'

class HomePage extends React.Component {
  componentDidMount () {
    html2canvas(document.body).then(function (canvas) {
      document.body.appendChild(canvas)
    })
  }

  render () {
    return (
      <div style={{color: 'black'}}>
        首页
      </div>
    )
  }
}

export default HomePage
