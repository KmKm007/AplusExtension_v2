import React from 'react'
import cs from 'classnames'

class ModalTag extends React.Component {
  onTagClick (tagId) {
    this.props.handleTagClick(tagId)
  }

  render () {
    const { showModal, tags, tempSelectedTags, handleClose, handleSave } = this.props
    return (
      <div className={cs({
        'modal-property': true,
        undisplay: showModal !== 3
      })}
      >
        <div className="modal-tag-body">
          <div className="modal-property-close" onClick={handleClose}>
            <svg fill="#9e9e9e" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              <path d="M0 0h24v24H0z" fill="none"/>
            </svg>
          </div>
          <header className="modal-property-header">标签选择</header>
          {
            tags
            ? (
              <ul className="modal-tag-list clearfix">
                {
                  tags.map(tag => (
                    <li
                      className={cs({
                        'modal-active-tag': tempSelectedTags.findIndex(t => t === tag.id) >= 0
                      })}
                      key={tag.id}
                      onClick={this.onTagClick.bind(this, tag.id)}
                    >
                      {tag.name}
                    </li>
                  ))
                }
              </ul>
            )
            : null
          }
          <section className="modal-property-confirm">
            <button className="modal-property-confirm-button" onClick={handleSave}>保存</button>
          </section>
          <section className="modal-tag-tips">
            <span>最多选择4个标签哦</span>
          </section>
        </div>
        <div className="modal-property-cover">
        </div>
      </div>
    )
  }
}

export default ModalTag
