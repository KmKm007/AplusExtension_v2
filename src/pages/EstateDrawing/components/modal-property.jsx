import React from 'react'
import cs from 'classnames'

class ModalProperty extends React.Component {
  componentWillReceiveProps (nextProps) {
    const { showModal } = this.props
    const { showModal: showModal2 } = nextProps
    if (showModal === 0 && showModal2 === 1) {
    }
  }

  onSearchClick = () => {
    const element = this.refs.no
    const value = element.value
    if (value) {
      this.props.handleSearchProperty(value)
    }
  }

  render () {
    const { showModal, handleClose, propertys, detailIndex, handleClickProperty, handleConfirm } = this.props
    let content
    if (showModal === 1) {
      content = (
        <section className="modal-property-search-result">
          {
            (propertys && propertys.length > 0)
            ? (
              <ul>
                {
                  propertys.map(p => (
                    <li key={p.property.id} onClick={() => handleClickProperty(p.id)}>{`${p.property.estate.name}-${p.property.building.name}-${p.property.houseNo}`}</li>
                  ))
                }
              </ul>
            )
            : <div style={{color: 'red', textAlign: 'center'}}>无搜索结果！</div>
          }
        </section>
      )
    } else if (showModal === 2) {
      const p = propertys[detailIndex]
      content = (
        <section className="modal-property-detail">
          <section>
            <header>{`${p.property.estate.name}-${p.property.building.name}-${p.property.houseNo}`}</header>
            <p>户型：{`${p.property.countF}房${p.property.countT}厅`}</p>
            <p>售价：{`${p.property.salePrice}万`}</p>
            <p>建筑面积：{`${p.property.square}㎡`}</p>
          </section>
          <section className="modal-property-confirm">
            <button className="modal-property-confirm-button" onClick={handleConfirm}>确定</button>
          </section>
        </section>
      )
    } else {
      content = null
    }
    return (
      <div className={cs({
        'modal-property': true,
        undisplay: showModal === 0
      })}
      >
        <div className="modal-property-body">
          <div className="modal-property-close" onClick={handleClose}>
            <svg fill="#9e9e9e" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              <path d="M0 0h24v24H0z" fill="none"/>
            </svg>
          </div>
          <header className="modal-property-header">房源选择</header>
          <section className="modal-property-search">
            <div className="search-bar">
              <input ref="no" className="modal-property-search-input" placeholder="请输入广告编号，如'dgdc0000079566'"/>
              <span className="search-icon" onClick={this.onSearchClick}>
                <svg fill="#707070" height="36" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                    <path d="M0 0h24v24H0z" fill="none"/>
                </svg>
              </span>
            </div>
          </section>
          {content}
        </div>
        <div className="modal-property-cover">
        </div>
      </div>
    )
  }
}

export default ModalProperty
