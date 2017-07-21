import React from 'react'
import cs from 'classnames'
import html2canvas from 'html2canvas/dist/html2canvas.min'
import canvas2image from '@utils/third/canvas2image'
import ModalProperty from '../../components/modal-property'
import ModalTag from '../../components/modal-tag'
import { QRCODE_URL } from '@service/constant/urls'
import './t1.scss'

const estatePhoto = require('@assets/images/drawing/t1/house01.png')
const estatePhoto2 = require('@assets/images/drawing/t1/house02.png')
const logo = require('@assets/images/logo.png')
const upload = require('@assets/images/drawing/upload.png')
const qrcode = require('@assets/images/qrcode.png')

class T1 extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isShowBtns: true,
      isGenerated: false,
      isUploadFile1: false,
      isUploadFile2: false,
      isCodeOK: false
    }
  }

  componentDidMount () {
    const _this = this
    const { file, file2 } = this.refs
    function imgToDataURL (index) {
      const f = this.files[0]
      if (!/image\/\w+/.test(f.type)) {
        alert('请确保文件类型为图像类型')
        return
      }
      const reader = new FileReader()
      reader.readAsDataURL(f)
      reader.onload = function () {
        const imgElement = _this.refs['img' + index]
        imgElement.src = this.result
        _this.setState({
          ['isUploadFile' + index]: true
        })
      }
    }
    file.onchange = imgToDataURL.bind(file, 1)
    file2.onchange = imgToDataURL.bind(file2, 2)
  }

  componentWillReceiveProps (nextProps) {
    const { qrcodeBase64 } = this.props
    const { qrcodeBase64: qrcodeBase642 } = nextProps
    if (qrcodeBase64 !== qrcodeBase642) {
      this.refs.qrcode.src = qrcodeBase642
    }
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
      const url = QRCODE_URL.replace('_ADNO_', property.adNo)
      this.props.fetchQrcodeBase64(url)
      this.onCloseModal()
    }
  }

  onModalTagClose = () => {
    this.props.handleRestoreTags()
    this.onCloseModal()
  }

  onSaveTags = () => {
    this.props.saveTags()
    this.onCloseModal()
  }

  onPrintClick = () => {
    this.setState({
      isShowBtns: false
    }, () => {
      window.print()
    })
    setTimeout(() => {
      this.setState({
        isShowBtns: true
      })
    }, 0)
  }

  onGenerateClick = () => {
    const isGenerated = this.state.isGenerated
    if (!isGenerated) {
      this.setState({
        isShowBtns: false
      }, () => {
        html2canvas(document.body).then((canvas) => {
          this.canvas = canvas
          this.refs.canvas.appendChild(canvas)
          this.setState({
            isGenerated: true
          })
        })
      })
    }
    setTimeout(() => {
      canvas2image.saveAsJPEG(this.canvas, this.canvas.width, this.canvas.height, '房源纸')
      this.setState({
        isShowBtns: true
      })
    }, 1000)
  }

  render () {
    const { showModal, propertys, selectedPropertyId, confirmedProperty,
      tags, selectedTags, tempSelectedTags, handleTagClick } = this.props
    const { isUploadFile1, isUploadFile2 } = this.state
    const selTags = tags.filter(t => selectedTags.findIndex(i => i === t.id) > -1)
    const detailIndex = propertys && propertys.findIndex(p => p.id === selectedPropertyId)
    return (
      <div className="drawing-t1">
        <section className="t1-section1">
          <div className="t1-estate-photo">
            <img ref="img1" className="t1-estate-photo-img" src={estatePhoto}/>
            {
              isUploadFile1
              ? null
              : <img className="t1-upload" src={upload} onClick={this.fileClick.bind(this, 1)}/>
            }
          </div>
          <div className="t1-estate-type">
            {
              confirmedProperty
              ? (
                <div className="t1-estate-type-c">
                  <div className="t1-estate-type-d">
                    {`${confirmedProperty.property.countF}房${confirmedProperty.property.countT}厅${confirmedProperty.property.countW}卫`}
                  </div>
                  <div className="t1-estate-type-d2">建筑面积：</div>
                  <div className="t1-estate-type-d3">{confirmedProperty.property.square}㎡</div>
                  <div className="t1-estate-type-d4">
                    {
                      selTags.length > 0
                      ? (
                        <ul className="selected-tag-list clearfix">
                          {selTags.map(t => (
                            <li key={t.id}>{t.name}</li>
                          ))}
                        </ul>
                      )
                      : <span onClick={this.onShowTagModal}>选择标签</span>
                    }
                  </div>
                </div>
              )
              : null
            }
          </div>
        </section>
        <section className="t1-section2">
          <div className="t1-qrcode">
            <img
              ref="qrcode"
              src={qrcode}
            />
          </div>
          <div className="t1-design-photo">
            <img ref="img2" className="t1-design-photo-img" src={estatePhoto2}/>
            {
              isUploadFile2
              ? null
              : <img className="t1-upload" src={upload} onClick={this.fileClick.bind(this, 2)}/>
            }
          </div>
        </section>
        <section className="t1-section3">
          {
            confirmedProperty
            ? (
              <div>
                <div className="t1-estate-name">
                  {confirmedProperty.property.estate.name}
                </div>
                <div className="t1-estate-price">
                  <span className="t1-estate-price-show">售</span>
                  <span className="ti-estate-price-detail">{confirmedProperty.property.salePrice}万</span>
                </div>
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
          tempSelectedTags={tempSelectedTags}
          showModal={showModal}
          handleClose={this.onModalTagClose}
          handleTagClick={handleTagClick}
          handleSave={this.onSaveTags}
        />
        <section
          className={cs({
            't1-section4': true,
            'unShow': !this.state.isShowBtns
          })}
          ref="btns"
        >
          <button className="btn-generate" onClick={this.onGenerateClick}>生成图片</button>
          <button className="btn-print" onClick={this.onPrintClick}>打印图片</button>
        </section>
        <input ref="file" className="undisplay" type="file"/>
        <input ref="file2" className="undisplay" type="file"/>
        <div ref="canvas" className="undisplay"></div>
      </div>
    )
  }
}

export default T1
