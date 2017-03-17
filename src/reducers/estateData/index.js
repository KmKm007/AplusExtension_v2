import sortRule from './sortRule'
import * as types from '../../actionTypes/EstateData'
import { combineReducers } from 'redux'
import dataList from './dataListReducer'
import pageObject from './pageObjectReducer'
import sortRule from './sortRuleReducer'
import dataStatus from './dataStatus'

const estateData = combineReducers({
  dataList,
  pageObject,
  sortRule,
  dataStatus
})

export default estateData
