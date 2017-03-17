import sortRule from './sortRule'
import * as types from '../../actionTypes/EstateData'

const estateData = (state = {}, action) => {
  switch (action.type) {
    case types.CHANGE_ORDER_RULE:
      return sortRule(state.sortRule, action)
    default:
      return state
  }
}

export default estateData
