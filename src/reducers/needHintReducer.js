import { combineReducers } from 'redux'
import { START_HINT, GET_HINT } from '../actions/types'

export function needHintReducer(state = { index: 0 }, action) {
  const hints = [
    {
      hint: 'Are there any highlighted errors in your code?',
      description: 'Make sure there are no highlighted errors, as they are showing parts of the code that the program cannot understand.'
    },
    {
      hint: 'Did you make sure all variables were set?',
      description: 'If there are any unset variables, the program cannot continue as they are not defined. '
    },
    {
      hint: 'Did you blah',
      description: 'blah'
    }
  ]
  console.log(action)
  switch (action.type) {
    case START_HINT: {
      let index = action.index
      console.log('Index: ' + index)
      return {
        index: index,
        hint: hints[index].hint
      }
    }
    case GET_HINT: {
      let index = (state.index + 1) % hints.length
      console.log('Index: ' + index)
      return {
        index: index,
        hint: hints[index].hint
      }
    }
  }
  return {
    ...state,
    hint: hints[state.index].hint
  }
}

export default needHintReducer
