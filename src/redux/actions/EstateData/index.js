import * as dataListAction from './dataListAction'
import * as pageObjectAction from './pageObjectAction'
import * as sortRuleAction from './sortRuleAction'
import * as dataStatusAction from './dataStatusAction'
import * as filterAction from './filterAction'
import * as regionListAction from './regionListAction'

const actions = {
  ...dataListAction,
  ...pageObjectAction,
  ...sortRuleAction,
  ...dataStatusAction,
  ...filterAction,
  ...regionListAction
}

export default actions
