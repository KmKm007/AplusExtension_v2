import * as dataListActionType from './dataListActionType'
import * as pageObjectActionType from './pageObjectActionType'
import * as sortRuleActionType from './sortRuleActionType'
import * as dataStatusActionType from './dataStatusActionType'
import * as filterActionTypes from './filterActionType'

const actionTypes = {
  ...dataListActionType,
  ...pageObjectActionType,
  ...sortRuleActionType,
  ...dataStatusActionType,
  ...filterActionTypes
}

export default actionTypes
