import React from 'react'
import { connect } from 'react-redux'
import actions from './../../store/actions/fetcher'

let Register = props => {
  return (
    <div>
      {console.log(props)}
      <form
        onSubmit={e => {
          e.preventDefault()
          props.registerFunc(props.userProps)
        }}
        class='form'
        id='formRegister'
      >
        <label>Username</label>
        <input onChange={e => props.dataFunc(e)} name='username' type='text' />
        <label>Password</label>
        <input
          onChange={e => props.dataFunc(e)}
          name='password'
          type='password'
        />
        <label>Repeat Password</label>
        <input
          onChange={e => props.dataFunc(e)}
          name='repeatPass'
          type='password'
        />
        <input id='btnRegister' value='Register' type='submit' />
      </form>
      <button onClick={() => props.viewFunc()}>Log in</button>

    </div>
  )
}

function mapStateToProps (state) {
  return {
    store: state
  }
}

function mapDispatchToProps (dispatch) {
  return {
    registerFunc: elem => dispatch(actions.register(elem))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
