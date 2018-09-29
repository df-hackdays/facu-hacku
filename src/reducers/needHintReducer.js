import { combineReducers } from 'redux'
import {GET_HINT} from '../actions/types'


export function needHintReducer(state = {index: 0}, action) {
  const hints = [
    {
      hint: ''
    },
    {
      hint: 'Did you check your errors?' 
    },
    {
      hint: 'Did you make sure all variables were set?'
    }
  ]
  switch(action.type) {
    case GET_HINT: {
      let index = (state.index + 1) % hints.length
      return {
        index: index,
        hint: hints[index].hint,
        
      }
    }
  }
  return {...state}
}

export default needHintReducer