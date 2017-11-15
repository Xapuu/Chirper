import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from './../../store/actions/fetcher'


class Home extends Component {

  componentDidMount(){
      console.log(this.props.store.auth)

      
  }

  render () {
    return (
      <section id='viewFeed'>
        <div className='content'>
          <div className='chirper'>
            <h2 className='titlebar'>Pesho</h2>
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
              <span>1 following</span>
              <span>0 followers</span>
            </div>
          </div>
          <div id='chirps' className='chirps'>

            <h2 className='titlebar'>Chirps</h2>

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
    registerFunc: elem => dispatch(actions.fetchSubscribedTo(elem))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
