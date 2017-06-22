import types from '@actionTypes/EstateData'
import SORT_RULE from '@service/constant/sortRule'

const sortRule = (state = SORT_RULE.AVA_PROPERTYCOUNT_DESC, action) => {
  switch (action.type) {
    case types.CHANGE_ORDER_RULE:
      return action.orderRule
    default:
      return state
  }
}

export default sortRule
