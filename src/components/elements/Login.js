import React from 'react'

let Login = props => {
  return (
    <div>
      <form  id='formLogin' class='form'>
        <label>Username</label>
        <input onChange={e => props.dataFunc(e)} name='username' type='text' />
        <label>Password</label>
        <input
          onChange={e => props.dataFunc(e)}
          name='password'
          type='password'
        />
        <input id='btnLogin' value='Sign In' type='submit' />

      </form>
      <button
        onClick={() => {
          props.viewFunc()
        }}
      >
        Register
      </button>
    </div>
  )
}

export default Login
