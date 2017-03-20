import { combineReducers } from 'redux'
import dataList from './dataListReducer'
import pageObject from './pageObjectReducer'
import sortRule from './sortRuleReducer'
import dataStatus from './dataStatusReducer'
import filter from './filterReducer'

const estateData = combineReducers({
  dataList,
  pageObject,
  sortRule,
  dataStatus,
  filter
})

export default estateData
