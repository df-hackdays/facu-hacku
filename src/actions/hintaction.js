import { GET_HINT } from './types'

export function getHint() {
  return dispatch => {
    dispatch({
      type: GET_HINT
    })
  }
}
