import * as dataActionType from './dataActionType'
import * as pageActionType from './pageActionType'
import * as sortRuleActionType from './sortRuleActionType'

const actionTypes = {
  ...dataActionType,
  ...pageActionType,
  ...sortRuleActionType
}

export default actionTypes
