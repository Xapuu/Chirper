import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from './../../store/actions/fetcher'

import Chirp from './Chirp'

class Home extends Component {

  componentDidMount(){
    let authToken = this.props.store.auth._kmd.authtoken
    let subscribedTo = this.props.store.auth.subscriptions
    this.props.fetchSubscribedTo(authToken,subscribedTo)   
  }
  render () {
    return (
      <section id='viewFeed'>
        {console.log(this.props.store.auth)}
        <div className='content'>
          <div className='chirper'>
            <h2 className='titlebar'>{this.props.store.auth.username}</h2>
            <form id='formSubmitChirp' className='chirp-form'>
              <textarea name='text' className='chirp-input' defaultValue={''} />
              <input
                className='chirp-submit'
                id='btnSubmitChirp'
                defaultValue='Chirp'
                type='submit'
              />
            </form>
            <div id='userStats' className='user-details'>
              <span>0 chirps</span>
              <span>{this.props.store.auth.subscriptions.length} following</span>
              <span>0 followers</span>
            </div>
          </div>
          <div id='chirps' className='chirps'>

            <h2 className='titlebar'>Chirps</h2>
            {this.props.store.subscribedTo.map((x,i)=>{
              return <Chirp key={i} props={x}/>
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
    fetchSubscribedTo: elem => dispatch(actions.fetchSubscribedTo(elem))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
