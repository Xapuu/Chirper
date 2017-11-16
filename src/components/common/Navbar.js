import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import actions from './../../store/actions/fetcher'

let Navbar = props => {
  return (
    <div className='menu'>
      <Link to='/home'>Home</Link>
      <Link to='/me'>Me</Link>
      <div onClick={()=>{props.logoutFunc(props.store._kmd.authtoken)}}>Logout</div>
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