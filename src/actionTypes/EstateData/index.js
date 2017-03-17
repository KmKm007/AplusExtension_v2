import * as dataListActionType from './dataActionType'
import * as pageObjectActionType from './pageActionType'
import * as sortRuleActionType from './sortRuleActionType'
import * as dataStatusActionType from './dataStatusActionType'

const actionTypes = {
  ...dataActionType,
  ...pageActionType,
  ...sortRuleActionType,
  ...dataStatusActionType
}

export default actionTypes
