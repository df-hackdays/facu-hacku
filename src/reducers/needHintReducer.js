import { combineReducers } from 'redux'
import { START_HINT, GET_HINT } from '../actions/types'

export function needHintReducer(state = { index: 0 }, action) {
  const hints = [
    {
      hint: {
        title: 'Are there any highlighted errors in your code?',
        text: 'Make sure there are no highlighted errors, as they are showing parts of the code that the program cannot understand.'
      },
      positive: {
        title: 'Good job!',
        text: "Don't worry!  Everyone makes misakes!"
      }
    },
    {
      hint: {
        title: 'Did you make sure all variables were set?',
        text: 'If there are any unset variables, the program cannot continue as they are not defined.'
      },
      positive: {
        title: 'Good catch!',
        text: 'Forgetting to set variables is a common mistake everyone makes!'
      }
    },
    {
      hint: {
        title: 'Hint 3',
        text: 'Text 3'
      },
      positive: {
        title: 'Positive 3',
        text: 'Text 3'
      }
    },
    {
      hint: {
        title: 'Hint 4',
        text: 'Text 4'
      },
      positive: {
        title: 'Positive 4',
        text: 'Text 4'
      }
    }
  ]
  console.log(hints)
  switch (action.type) {
    case START_HINT: {
      let index = action.index
      console.log('Index: ' + index)
      return {
        index: index,
        hint: hints[index]
      }
    }
    case GET_HINT: {
      let index = (state.index + 1) % hints.length
      console.log('Index: ' + index)
      return {
        index: index,
        hint: hints[index]
      }
    }
  }
  return {
    ...state,
    hint: hints[state.index]
  }
}

export default needHintReducer
