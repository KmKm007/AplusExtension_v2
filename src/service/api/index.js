import * as estateDataAPI from './estateData'
import * as propertyAPI from './propertyAPI'
import * as propertyAdAPI from './propertyAdAPI'
import * as commonAPI from './commonAPI'

const apis = {
  ...estateDataAPI,
  ...propertyAPI,
  ...propertyAdAPI,
  ...commonAPI
}

export default apis
