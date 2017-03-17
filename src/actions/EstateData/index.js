import * as dataAction from './dataAction'
import * as pageAction from './pageAction'
import * as sortRule from './sortRuleAction'

const actions = {
  ...dataAction,
  ...pageAction,
  ...sortRule
}

export default actions
