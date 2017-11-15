export default (
  store =[],
  action
) => {
  switch(action.type){
    case 'LOAD_HOME':
    return [...store,...action.payload]
    default:
    return store
  }
}
