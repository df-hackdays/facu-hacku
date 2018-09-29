import { combineReducers } from 'redux'
import { loadingReducer } from './loadingReducer'
import { needHintReducer } from './needHintReducer'

export default combineReducers({
  loadingReducer,
  needHintReducer
})
