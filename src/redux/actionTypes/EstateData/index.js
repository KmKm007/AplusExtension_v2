import * as dataListActionType from './dataListActionType'
import * as pageObjectActionType from './pageObjectActionType'
import * as sortRuleActionType from './sortRuleActionType'
import * as dataStatusActionType from './dataStatusActionType'
import * as filterActionType from './filterActionType'
import * as regionListActionType from './regionListActionType'

const actionTypes = {
  ...dataListActionType,
  ...pageObjectActionType,
  ...sortRuleActionType,
  ...dataStatusActionType,
  ...filterActionType,
  ...regionListActionType
}

export default actionTypes
