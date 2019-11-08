
import React, { Component } from 'react'
import './App.css'
import Sidebar from './containers/Sidebar'
import Navbar from './containers/Navbar'
import Login from './containers/Login'
import ChatWindow from './containers/ChatWindow'



class App extends Component {

  state = {
    users: []
  }

  getUsers = () => {
    fetch('http://http.localhost:3000/users')
    .then(res=>res.json())
    .then(usersList => this.setState({
      users: usersList
    }))
  }

  componentDidMount(){
    this.getUsers()
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <Navbar />
        <Sidebar users={this.state.users} />
        <Login />
        <ChatWindow />
      </div>
    )
  }
}

export default App
