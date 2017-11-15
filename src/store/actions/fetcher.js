import status from './status'
import action from './action'

const appKey = 'kid_SJnmNchR-'
const appSecret = '65641a6ffdd0400e8619f72defe550af'

export default {
  register: payload => {
    return dispatch => {
      dispatch(status.requestCalling())
      return fetch(`https://baas.kinvey.com/user/${appKey}`, {
        method: 'POST',
        headers: {
          Authorization: 'Basic ' + btoa(appKey + ':' + appSecret),
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })
        .then(
          res => res.json(),
          error => {
            dispatch(status.error)
          }
        )
        .then(json => {
          dispatch(action.register(json))
          dispatch(status.requestFinished)
        })
    }
  }
}
