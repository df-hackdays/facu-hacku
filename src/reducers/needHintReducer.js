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
        title: 'CLC Coder Top Tip:',
        text: 'Look carefully at the errors listed in your editor.  They will point you in the right direction'
      }
    },
    {
      hint: {
        title: 'Did you make sure all variables were set?',
        text: 'If there are any unset variables, the program cannot continue as they are not defined.'
      },
      positive: {
        title: 'CLC Coder Top Tip:',
        text: "Don't be afraid to ask questions!  Coding is continous learning!"
      }
    },
    {
      hint: {
        title: 'Make sure you are calling the correct variables and methods!',
        text: 'It can be easy to use the incorrect variable or call the wrong method.  Double check your work!'
      },
      positive: {
        title: 'CLC Coder Top Tip:',
        text: 'Good habits are formed over time, through practice and experience!'
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
