import * as dataListAction from './estate-data/dataListAction'
import * as pageObjectAction from './estate-data/pageObjectAction'
import * as sortRuleAction from './estate-data/sortRuleAction'
import * as dataStatusAction from './estate-data/dataStatusAction'
import * as filterAction from './estate-data/filterAction'
import * as regionListAction from './estate-data/regionListAction'
import * as estateDrawingActions from './estate-drawing'

const actions = {
  ...dataListAction,
  ...pageObjectAction,
  ...sortRuleAction,
  ...dataStatusAction,
  ...filterAction,
  ...regionListAction,
  ...estateDrawingActions
}

export default actions
