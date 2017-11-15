import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from './../../store/actions/fetcher'

class UserCard extends Component {
  render () {
    return (
      <form
        id='formSubmitChirp'
        className='chirp-form'
        onSubmit={e => {
          e.preventDefault()
          let payload = {
            ...this.state,
            author: this.props.store.auth.username
          }
          this.props.postChirp(this.props.store.auth._kmd.authtoken, payload)
        }}
      >
        <textarea
          name='text'
          onChange={e => {
            this.setState({ text: e.target.value })
          }}
          className='chirp-input'
          defaultValue={''}
        />
        <input
          className='chirp-submit'
          id='btnSubmitChirp'
          defaultValue='Chirp'
          type='submit'
        />
      </form>
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
      fetchSubscribedTo: (token, payload) =>
        dispatch(actions.fetchSubscribedTo(token, payload)),
      postChirp: (token, payload) => dispatch(actions.postChirp(token, payload))
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(UserCard)