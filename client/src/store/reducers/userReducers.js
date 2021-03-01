export const userReducers = (state = {}, action) => {
  switch (action.type) {
    case '1':
      return action.payload
    case '2':
      return action.payload
    default:
      return state
  }
}
