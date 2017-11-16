export default (store = [], action) => {
    switch (action.type) {
      case 'LOAD_ME':
        return [...store, ...action.payload]
      default:
        return store
    }
  }
  