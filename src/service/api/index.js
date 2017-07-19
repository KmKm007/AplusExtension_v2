import * as estateDataAPI from './estateData'
import * as propertyAPI from './propertyAPI'

const apis = {
  ...estateDataAPI,
  ...propertyAPI
}

export default apis
