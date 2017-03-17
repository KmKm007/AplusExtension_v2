import * as dataListActionType from './dataListActionType'
import * as pageObjectActionType from './pageObjectActionType'
import * as sortRuleActionType from './sortRuleActionType'
import * as dataStatusActionType from './dataStatusActionType'

const actionTypes = {
  ...dataListActionType,
  ...pageObjectActionType,
  ...sortRuleActionType,
  ...dataStatusActionType
}

export default actionTypes
