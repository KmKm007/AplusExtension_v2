import React from 'react'
import ModalProperty from '../../components/modal-property'
import './t1.scss'

class T1 extends React.Component {
  fileClick (index) {
    switch (index) {
      case 1:
        this.refs.file.click()
        break
      case 2:
        this.refs.file2.click()
        break
    }
  }

  onShowSearchModal = () => {
    this.props.changeModal(1)
  }

  onCloseModal = () => {
    this.props.changeModal(0)
  }

  onClickProperty = id => {
    this.props.changeSelectedProperty(id)
    this.props.changeModal(2)
  }

  render () {
    const estatePhoto = require('@assets/images/drawing/t1/house01.png')
    const estatePhoto2 = require('@assets/images/drawing/t1/house02.png')
    const logo = require('@assets/images/logo.png')
    const upload = require('@assets/images/drawing/upload.png')
    const qrcode = require('@assets/images/qrcode.png')
    const { showModal, propertys, selectedPropertyId } = this.props
    const detailIndex = propertys && propertys.findIndex(p => p.id === selectedPropertyId)
    return (
      <div className="drawing-t1">
        <section className="t1-section1">
          <div className="t1-estate-photo">
            <img className="t1-estate-photo-img" src={estatePhoto}/>
            <img className="t1-upload" src={upload} onClick={this.fileClick.bind(this, 1)}/>
          </div>
          <div className="t1-estate-type">

          </div>
        </section>
        <section className="t1-section2">
          <div className="t1-qrcode">
            <img src={qrcode}/>
          </div>
          <div className="t1-design-photo">
            <img className="t1-design-photo-img" src={estatePhoto2}/>
            <img className="t1-upload" src={upload} onClick={this.fileClick.bind(this, 1)}/>
          </div>
        </section>
        <section className="t1-section3">
          <span className="t1-estate-price" onClick={this.onShowSearchModal}>请选择房源</span>
        </section>
        <footer className="t1-footer">
          <div className="t1-footer-d">
            <div>中原官网 真房源，真价格</div>
            <div style={{marginTop: '10px'}}>
              http://dg.centanet.com
            </div>
          </div>
          <div className="t1-footer-d2">
            <img src={logo}/>
          </div>
        </footer>
        <ModalProperty
          showModal={showModal}
          handleClose={this.onCloseModal}
          propertys={propertys}
          handleClickProperty={this.onClickProperty}
          detailIndex={detailIndex}
        />
        <input ref="file" className="undisplay" type="file"/>
        <input ref="file2" className="undisplay" type="file"/>
      </div>
    )
  }
}

export default T1
