import 'bootstrap/dist/css/bootstrap.min.css'
import $ from 'jquery'
import Popper from 'popper.js'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { ActionCableProvider } from 'react-actioncable-provider'
import API_URL from './constants/constants'

ReactDOM.render(
  <ActionCableProvider url={`ws://kir-chat-app-backend.herokuapp.com/cable`}>
    <App />
  </ActionCableProvider>, document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
