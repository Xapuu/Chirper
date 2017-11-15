const LOGIN = 'LOGIN'
const REGISTER = 'REGISTER'
const LOGOUT = 'LOGOUT'

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
  },
  logout:()=>{
    return{
      type: LOGOUT
    }
  }
}

