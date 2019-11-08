
import React from 'react'
import './App.css'
import Sidebar from './containers/Sidebar'
import Navbar from './containers/Navbar'
import Login from './containers/Login'
import ChatWindow from './containers/ChatWindow'



function App () {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Navbar />
      <Sidebar />
      <Login />
      <ChatWindow />
    </div>
  )
}

export default App
