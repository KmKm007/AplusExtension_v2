import * as dataListAction from './dataAction'
import * as pageObjectAction from './pageAction'
import * as sortRuleAction from './sortRuleAction'
import * as dataStatusAction from './dataStatusAction'

const actions = {
  ...dataAction,
  ...pageAction,
  ...sortRuleAction,
  ...dataStatusAction
}

export default actions
