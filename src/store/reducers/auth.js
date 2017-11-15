export default (store = {}, action) => {
  switch (action.type) {
    case 'REGISTER':
      return { ...store, ...action.payload }
    case 'LOGIN':
      return { ...store, ...action.payload }
    case 'LOGOUT':
      return {}
    default:
      return store
  }
}
