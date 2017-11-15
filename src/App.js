import React, { Component } from 'react';
import './App.css';
import Header from './components/common/Header'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import ElementBlender from './components/elements'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Navbar />
        <ElementBlender />
        <Footer />
      </div>
    );
  }
}

export default App;
