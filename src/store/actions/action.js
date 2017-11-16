const LOGIN = 'LOGIN'
const REGISTER = 'REGISTER'
const LOGOUT = 'LOGOUT'
const LOAD_HOME = 'LOAD_HOME'
const LOAD_ME = 'LOAD_ME'

export default {
  register: payload => {
    return {
      type: REGISTER,
      payload: payload
    }
  },
  login: payload => {
    return {
      type: LOGIN,
      payload: payload
    }
  },
  logout: () => {
    return {
      type: LOGOUT
    }
  },
  loadHome: payload => {
    return {
      type: LOAD_HOME,
      payload: payload
    }
  },
  loadMe: payload => {
    return {
      type: LOAD_ME,
      payload: payload
    }
  }
}
