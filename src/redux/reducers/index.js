import estateData from './estate-data'
import estateDrawing from './estate-drawing'
import { combineReducers } from 'redux'

const app = combineReducers({
  estateData,
  estateDrawing
})

export default app
