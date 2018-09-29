import { START_HINT } from './types'

export function startHint(index) {
  return dispatch => {
    dispatch({
      type: START_HINT,
      index
    })
  }
}
