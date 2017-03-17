import * as types from '../../actionTypes/EstateData'
import SORT_RULE from '../../constant/sortRule'

export default const sortRule = (state = SORT_RULE.AVA_PROPERTYCOUNT_DESC, action) => {
  switch (action.type) {
    case types.CHANGE_ORDER_RULE:
      return action.orderRule
    default:
      return state
  }
}