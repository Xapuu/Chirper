import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import storeGen from './store/store'

let store = storeGen

ReactDOM.render(
  <BrowserRouter><Provider store={store}><App /></Provider></BrowserRouter>,
  document.getElementById('root')
)
registerServiceWorker()


/**
 * 
 * Going ahead of the master branch
 * 
 * 
 * 

/**
 * Hotfix 1
 */