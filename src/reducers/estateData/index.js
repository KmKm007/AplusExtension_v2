import { combineReducers } from 'redux'
import dataList from './dataListReducer'
import pageObject from './pageObjectReducer'
import sortRule from './sortRuleReducer'
import dataStatus from './dataStatus'
import filter from './filter'

const estateData = combineReducers({
  dataList,
  pageObject,
  sortRule,
  dataStatus,
  filter
})

export default estateData
