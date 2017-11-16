import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Auth from './Auth'
import Home from './Home'
import Me from './Me'

let ElementBlender = props => {
  if(sessionStorage.length==0){
    return(
      <Switch>
      <Route  path='/' component={Auth} />
      </Switch>
    )
  }
  return (
    <Switch>
      <Route exact path='/' component={Auth} />
      <Route path='/home' component={Home} />
      <Route path='/me' component={Me} />
    </Switch>
  )
}

export default ElementBlender
