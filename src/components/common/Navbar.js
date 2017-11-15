import React from 'react'
import {connect} from 'react-redux'
import actions from './../../store/actions/fetcher'

let Navbar = props => {
  return (
    <div className='menu'>
      <a href='#'>Home</a>
      <a href='#'>Discover</a>
      <a href='#'>Me</a>
      <a onClick={()=>{props.logoutFunc(props.store._kmd.authtoken)}}>Logout</a>
    </div>
  )
}

function mapStateToProps(store){
  return{
    store:store.auth
  }
}

function mapDispatchToProps (dispatch){
  return{
    logoutFunc: data =>{dispatch(actions.logout(data))}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Navbar)