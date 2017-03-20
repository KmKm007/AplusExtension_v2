import types from '../../actionTypes/EstateData'

export const changeOrderRule = orderRule => ({
  type: types.CHANGE_ORDER_RULE,
  orderRule
})
