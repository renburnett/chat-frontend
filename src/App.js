
import React, { Component } from 'react'
import './App.css'
import Sidebar from './containers/Sidebar'
import Navbar from './containers/Navbar'
import Login from './containers/Login'
import ChatWindow from './containers/ChatWindow'



class App extends Component {

  state = {
    users: [],
    loggedIn: false,
  }

  logIn = (event) => {
    event.preventDefault();
    console.log("clicked login!")
    this.setState({
      loggedIn: !this.state.loggedIn
    })
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
      <div className="App container" >
        <Navbar />
        <Login handleLogIn={this.logIn} />
        <div className="row">
          <ChatWindow />
          <Sidebar users={this.state.users} />
        </div>
      </div>
    )
  }
}

export default App
