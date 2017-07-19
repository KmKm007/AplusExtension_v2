import React from 'react'
import ModalProperty from '../../components/modal-property'
import ModalTag from '../../components/modal-tag'
import './t1.scss'

const estatePhoto = require('@assets/images/drawing/t1/house01.png')
const estatePhoto2 = require('@assets/images/drawing/t1/house02.png')
const logo = require('@assets/images/logo.png')
const upload = require('@assets/images/drawing/upload.png')
const qrcode = require('@assets/images/qrcode.png')

class T1 extends React.Component {
  componentDidMount () {
    const _this = this
    const { file, file2 } = this.refs
    function imgToDataURL (index) {
      console.log(12321312312)
      const f = this.files[0]
      if (!/image\/\w+/.test(f.type)) {
        alert('请确保文件类型为图像类型')
        return
      }
      const reader = new FileReader()
      reader.readAsDataURL(f)
      reader.onload = function () {
        _this.refs['img' + index].src = this.result
      }
    }
    file.onchange = imgToDataURL.bind(file, 1)
    file2.onchange = imgToDataURL.bind(file2, 2)
  }

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

  onShowTagModal = () => {
    this.props.changeModal(3)
  }

  onCloseModal = () => {
    this.props.changeModal(0)
  }

  onClickProperty = id => {
    this.props.changeSelectedProperty(id)
    this.props.changeModal(2)
  }

  onSearchProperty = propertyNo => {
    this.props.fetchPropertyByNo(propertyNo)
  }

  onConfirmClick = () => {
    const { propertys, selectedPropertyId } = this.props
    const property = propertys && propertys.find(p => p.id === selectedPropertyId)
    if (property) {
      this.props.changeConfirmedProperty(property)
      this.onCloseModal()
    }
  }

  render () {
    const { showModal, propertys, selectedPropertyId, confirmedProperty,
      tags, selectedTags, tempSelectTags } = this.props
    const detailIndex = propertys && propertys.findIndex(p => p.id === selectedPropertyId)
    return (
      <div className="drawing-t1">
        <section className="t1-section1">
          <div className="t1-estate-photo">
            <img ref="img1" className="t1-estate-photo-img" src={estatePhoto}/>
            <img className="t1-upload" src={upload} onClick={this.fileClick.bind(this, 1)}/>
          </div>
          <div className="t1-estate-type">
            {
              confirmedProperty
              ? (
                <div className="t1-estate-type-c">
                  <div className="t1-estate-type-d">
                    {`${confirmedProperty.countF}房${confirmedProperty.countT}厅${confirmedProperty.countW}卫`}
                  </div>
                  <div className="t1-estate-type-d2">建筑面积：</div>
                  <div className="t1-estate-type-d3">{confirmedProperty.square}㎡</div>
                  <div className="t1-estate-type-d4">
                    <span onClick={this.onShowTagModal}>选择标签</span>
                  </div>
                </div>
              )
              : null
            }
          </div>
        </section>
        <section className="t1-section2">
          <div className="t1-qrcode">
            <img src={qrcode}/>
          </div>
          <div className="t1-design-photo">
            <img ref="img2" className="t1-design-photo-img" src={estatePhoto2}/>
            <img className="t1-upload" src={upload} onClick={this.fileClick.bind(this, 2)}/>
          </div>
        </section>
        <section className="t1-section3">
          {
            confirmedProperty
            ? (
              <div className="t1-estate-price">
                <span className="t1-estate-price-show">售</span>
                <span className="ti-estate-price-detail">{confirmedProperty.salePrice}万</span>
              </div>
            )
            : (
              <span className="t1-estate-select" onClick={this.onShowSearchModal}>请选择房源</span>
            )
          }
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
          handleSearchProperty={this.onSearchProperty}
          handleConfirm={this.onConfirmClick}
        />
        <ModalTag
          tags={tags}
          selectedTags={selectedTags}
          tempSelectTags={tempSelectTags}
          showModal={showModal}
          handleClose={this.onCloseModal}
        />
        <input ref="file" name="1" className="undisplay" type="file"/>
        <input ref="file2" name="2" className="undisplay" type="file"/>
      </div>
    )
  }
}

export default T1
