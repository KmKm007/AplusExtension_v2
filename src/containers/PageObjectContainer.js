import React, { PropTypes } from 'react'
import PageNavigation from '../components/PageNavigation'

class PageObjectContainer extends React.Component {
  static propTypes = {
    pageObject: PropTypes.shape({
      currentPage: PropTypes.number.isRequired,
      maxPage: PropTypes.number.isRequired,
      pageSize: PropTypes.number.isRequired,
      totalRow: PropTypes.number.isRequired,
      pageCount: PropTypes.number.isRequired
    }).isRequired
   }

  onPageChange = page => {
    this.props.handlePageClick(page)
  }

  onNextPageClick = () => {
    const { currentPage,maxPage } = this.props.pageObject
    if ( currentPage >= maxPage)
      return
    this.props.handlePageClick(currentPage + 1)
  }

  onPrePageClick = () => {
    const { currentPage } = this.props.pageObject
    if (currentPage <= 1)
      return
    this.props.handlePageClick(currentPage -1)
  }

  onLastPageClick = () => {
    const { currentPage,maxPage } = this.props.pageObject
    if (currentPage === maxPage)
      return
    this.props.handlePageClick(maxPage)
  }

  onFirstPageClick = () => {
    const { currentPage } = this.props.pageObject
    if (currentPage === 1)
      return
    this.props.handlePageClick(1)
  }

  render () {
    const pageObject = this.props.pageObject
    return (
      <div>
        <PageNavigation
          currentPage={ pageObject.currentPage }
          maxPage={ pageObject.maxPage }
          pageSize={ pageObject.pageSize }
          pageCount={ pageObject.pageCount }
          handleFirstPageClick = {this.onFirstPageClick}
          handleLastPageClick= {this.onLastPageClick}
          handlePrePageClick ={this.onPrePageClick}
          handleNextPageClick ={this.onNextPageClick}
          handlePageClick ={this.onPageChange}
        />
      </div>
    )
  }
}

export default PageObjectContainer
