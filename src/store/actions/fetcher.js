import status from './status'
import action from './action'

const appKey = 'kid_SJnmNchR-'
const appSecret = '65641a6ffdd0400e8619f72defe550af'
const baseUrl = 'https://baas.kinvey.com'

const defaultHeader = {
  Authorization: 'Basic ' + btoa(appKey + ':' + appSecret),
  'Content-Type': 'application/json'
}

export default {
  register: payload => {
    return dispatch => {
      dispatch(status.requestCalling())
      return fetch(`${baseUrl}/user/${appKey}`, {
        method: 'POST',
        headers: defaultHeader,
        body: JSON.stringify(payload)
      })
        .then(
          res => res.json(),
          error => {
            console.log(error)
            dispatch(status.error)
          }
        )
        .then(json => {
          dispatch(action.register(json))
          dispatch(status.requestFinished)
        })
    }
  },
  login: payload => {
    return dispatch => {
      dispatch(status.requestCalling())
      return fetch(`${baseUrl}/user/${appKey}/login`, {
        method: 'POST',
        headers: defaultHeader,
        body: JSON.stringify(payload)
      })
        .then(res => res.json(), err => dispatch(status.error))
        .then(json => {
          if (json.error) {
            dispatch(status.error)
            return
          }
          dispatch(action.login(json))
          dispatch(status.requestFinished)
        })
    }
  },
  logout: payload => {
    return dispatch => {
      dispatch(status.requestCalling())
      return fetch(`${baseUrl}/user/${appKey}/_logout`, {
        method: 'POST',
        headers: {
          Authorization: 'Kinvey ' + payload
        }
      })
        .then(res => res, err => dispatch(status.error))
        .then(json => {
          if (json.error) {
            dispatch(status.error())
            return
          }
          dispatch(action.logout())
          dispatch(status.requestFinished())
        })
    }
  }
}
