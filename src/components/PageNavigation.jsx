import React from 'react'
import PropTypes from 'prop-types'
import MaterialUIComponent from '@template/MaterialUIComponent'
import RaisedButton from 'material-ui/RaisedButton'

const style = {
  margin: 5,
  minWidth: 'auto'
}

class PageNavigation extends MaterialUIComponent {
  render () {
    let pageArray = []
    let currentPage = this.props.currentPage
    let pageCount = 5
    let maxPage = this.props.maxPage
    var halfPageCount = parseInt(pageCount / 2)
    if (maxPage > pageCount) {
      let delta = maxPage - currentPage
      if (currentPage >= (halfPageCount + 1) && delta >= halfPageCount) {
        for (let j = 0; j < halfPageCount; j++) {
          pageArray.push(currentPage - (halfPageCount - j))
        }
        pageArray.push(currentPage)
        for (let k = 1; k <= halfPageCount; k++) {
          pageArray.push(currentPage + k)
        }
      } else if (currentPage <= (halfPageCount + 1)) {
        for (let i = 1; i <= pageCount; i++) {
          pageArray.push(i)
        }
      } else if (delta < halfPageCount) {
        for (let i = (pageCount - delta - 1); i > 0; i--) {
          pageArray.push(currentPage - i)
        }
        pageArray.push(currentPage)
        for (let i = 1; i <= delta; i++) {
          pageArray.push(currentPage + i)
        }
      }
    } else {
      for (let j = 1; j <= maxPage; j++) {
        pageArray.push(j)
      }
    }
    const { handlePageClick, handleNextPageClick, handlePrePageClick,
      handleLastPageClick, handleFirstPageClick } = this.props
    return (
      <div style={{
        textAlign: 'center'
      }}>
        <RaisedButton label={'首页'} style={style}
          onClick={handleFirstPageClick}
        />
        <RaisedButton label={'上一页'} style={style}
          onClick={handlePrePageClick}
        />
        {
          pageArray.map((page) => {
            let isActive = currentPage === page
            return (
              <RaisedButton key={page} label={page} primary={isActive} style={style}
                onClick={() => handlePageClick(page)}
              />
            )
          })
        }
        <RaisedButton label={'下一页'} style={style}
          onClick={handleNextPageClick}
        />
        <RaisedButton label={'尾页'} style={style}
          onClick={handleLastPageClick}
        />
      </div>
    )
  }
  }

PageNavigation.propTypes = {
  currentPage: PropTypes.number.isRequired,
  maxPage: PropTypes.number.isRequired,
  handlePageClick: PropTypes.func.isRequired,
  handleNextPageClick: PropTypes.func.isRequired,
  handlePrePageClick: PropTypes.func.isRequired,
  handleLastPageClick: PropTypes.func.isRequired,
  handleFirstPageClick: PropTypes.func.isRequired
}

export default PageNavigation
