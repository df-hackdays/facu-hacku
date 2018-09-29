export function needHintReducer(state = null, action) {
  const hints = [
    {
      hint: 'Did you check your errors?'
    },
    {
      hint: 'Did you make sure all variables were set?'
    }
  ]
  return hints[0]
}
