import React from 'react'
import version from '@service/constant/version'

const Footer = () => {
  return (
    <div className="footer">
      <span>{version}</span><br/>
      <span>东莞中原 信息运营中心</span>
    </div>
  )
}

export default Footer
