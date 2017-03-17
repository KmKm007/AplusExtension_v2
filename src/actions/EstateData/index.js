import * as dataListAction from './dataListAction'
import * as pageObjectAction from './pageObjectAction'
import * as sortRuleAction from './sortRuleAction'
import * as dataStatusAction from './dataStatusAction'

const actions = {
  ...dataListAction,
  ...pageObjectAction,
  ...sortRuleAction,
  ...dataStatusAction
}

export default actions
