import React from 'react'
import { connect } from 'react-redux'
import actions from './../../store/actions/fetcher'

let Login = props => {
  return (
    <div>
      <form
        id='formLogin'
        className='form'
        onSubmit={e => {
          e.preventDefault()
          props.registerFunc(props.userProps)
        }}
      >
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

function mapDispatchToProps (dispatch) {
  return {
    registerFunc: data => dispatch(actions.login(data))
  }
}

export default connect(null, mapDispatchToProps)(Login)
