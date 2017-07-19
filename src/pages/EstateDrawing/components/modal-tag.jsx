import React from 'react'
import cs from 'classnames'

class ModalTag extends React.Component {
  render () {
    const { showModal, tags, handleClose } = this.props
    return (
      <div className={cs({
        'modal-property': true,
        undisplay: showModal !== 3
      })}
      >
        <div className="modal-property-body">
          <div className="modal-property-close" onClick={handleClose}>
            <svg fill="#9e9e9e" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              <path d="M0 0h24v24H0z" fill="none"/>
            </svg>
          </div>
          <header className="modal-property-header">标签选择</header>
          <ul className="modal-tag-list clearfix">
            {
              tags.map(tag => (
                <li key={tag.id}>{tag.name}</li>
              ))
            }
          </ul>
          <section className="modal-property-confirm">
            <button className="modal-property-confirm-button">保存</button>
          </section>
        </div>
        <div className="modal-property-cover">
        </div>
      </div>
    )
  }
}

export default ModalTag
