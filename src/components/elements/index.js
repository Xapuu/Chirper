import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Auth from './Auth'
import Home from './Home'
import Me from './Me'

let ElementBlender = props => {
  if (Object.keys(props.store.auth).length===0) {
    return (
      <Switch>
        <Route path='/' component={Auth} />
      </Switch>
    )
  }
  return (
    <Switch>
      <Route  path="/me" component={Me} />
      <Route exact path="/" component={Home} />
    </Switch>
  )
}
function mapStateToProps (state) {
  return {
    store: state
  }
}

export default connect(mapStateToProps, null)(ElementBlender)
