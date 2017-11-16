import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chirp from './Chirp'
import UserCard from './UserCard'
import actions from './../../store/actions/fetcher'

class Me extends Component {
  componentDidMount () {
    let authToken = this.props.store.auth._kmd.authtoken
    this.props.myChirps(authToken, this.props.store.auth.username)
  }

  shouldComponentUpdate (nextProps, nextState) {
    if (nextProps.store.myChirps.lenght != this.props.store.myChirps.lenght) {
      return true
    }
  }

  render () {
    return (
      <section id='viewMe'>
        <div className='content'>
          <div className='chirper'>
            <h2 className='titlebar'>Pesho</h2>
            <UserCard />
            <div id='myStats' className='user-details'>
              <span>0 chirps</span>
              <span> following</span>
              <span>0 followers</span>
            </div>

          </div>
          <div id='myChirps' className='chirps'>
            <h2 className='titlebar'>Chirps</h2>
            <h1>CHirp</h1>
            {this.props.store.myChirps.map((x, i) => {
              return <Chirp key={i} props={x} />
            })}
          </div>
        </div>
      </section>
    )
  }
}

function mapStateToProps (state) {
  return {
    store: state
  }
}

function mapDispatchToProps (dispatch) {
  return {
    myChirps: (token, myName) => dispatch(actions.fetchMyChirps(token, myName)),
    postChirp: (token, payload) => dispatch(actions.postChirp(token, payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Me)
