import { combineReducers } from 'redux'
import dataList from './dataListReducer'
import pageObject from './pageObjectReducer'
import sortRule from './sortRuleReducer'
import dataStatus from './dataStatusReducer'
import filter from './filterReducer'
import regionList from './regionListReducer'

const estateData = combineReducers({
  dataList,
  pageObject,
  sortRule,
  dataStatus,
  filter,
  regionList
})

export default estateData
