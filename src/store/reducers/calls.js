export default (store = {}, action) => {
  switch (action.type) {
    case 'AJAX_CALL':
    console.log('Im fetching data')
      return store
    case 'AJAX_END':
    console.log('I finished')
      return store
    default:
      return store
  }
}
