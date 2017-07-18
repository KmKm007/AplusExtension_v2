import * as dataListActionType from './estate-data/dataListActionType'
import * as pageObjectActionType from './estate-data/pageObjectActionType'
import * as sortRuleActionType from './estate-data/sortRuleActionType'
import * as dataStatusActionType from './estate-data/dataStatusActionType'
import * as filterActionType from './estate-data/filterActionType'
import * as regionListActionType from './estate-data/regionListActionType'
import * as estateDrawingActionTypes from './estate-drawing'

const actionTypes = {
  ...dataListActionType,
  ...pageObjectActionType,
  ...sortRuleActionType,
  ...dataStatusActionType,
  ...filterActionType,
  ...regionListActionType,
  ...estateDrawingActionTypes
}

export default actionTypes
