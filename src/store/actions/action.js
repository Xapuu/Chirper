const LOGIN = 'LOGIN'
const REGISTER = 'REGISTER'

export default {
  register: payload => {
    return {
      type: REGISTER,
      payload: payload
    }
  },
  login: payload =>{
    return{
      type: LOGIN,
      payload :payload
    }
  }
}

