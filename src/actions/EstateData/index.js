import * as dataListAction from './dataListAction'
import * as pageObjectAction from './pageObjectAction'
import * as sortRuleAction from './sortRuleAction'
import * as dataStatusAction from './dataStatusAction'
import * as filterAction from './filterAction'

const actions = {
  ...dataListAction,
  ...pageObjectAction,
  ...sortRuleAction,
  ...dataStatusAction,
  ...filterAction
}

export default actions
