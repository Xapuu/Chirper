import React, { Component } from 'react'
import './App.css'
import Header from './components/common/Header'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import ElementBlender from './components/elements'
import { connect } from 'react-redux'

class App extends Component {

  componentDidMount(){
    this.setState({isAuth:sessionStorage})
  }

  render () {
    return (
      <div className='App'>
        <Header />
        <Navbar />
        <ElementBlender/>
        <Footer />
      </div>
    )
  }
}

export default (App)
