const LOGIN = 'LOGIN'
const REGISTER = 'REGISTER'

export default {
  register: payload => {
    return {
      type: REGISTER,
      payload: payload
    }
  }
}

