export default (store = {}, action) => {
  switch (action.type) {
    case 'REGISTER':
      return action.payload
    case 'LOGIN':
      return store
    case 'LOGOUT':
      return store
    default:
      return store
  }
}
