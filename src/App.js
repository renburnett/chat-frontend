
import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Sidebar from './containers/Sidebar'
import Navbar from './containers/Navbar'
import Login from './containers/Login'
import ChatWindow from './containers/ChatWindow'

class App extends Component {

  state = {
    users: [],
    loggedIn: false,
    loggedInUser: {}
  }

  logIn = (user) => {
    this.setState({
      loggedIn: true,
      loggedInUser: user
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

  addNewUser = (newUser) => {
    this.setState(prevState => {
      return { users: [...prevState.users, newUser] }
    })
  }

  render(){
    return (
      <div className="App" >
        <Router>
          <Navbar />
          <div className="container">
            <Route exact path='/login' render={props => <Login {...props} handleLogIn={this.logIn} users={this.state.users} addNewUser={this.addNewUser} />} />
            <div className="row">
              <Route path='/' render={props => <ChatWindow {...props} loggedIn={this.state.loggedIn} />} />
              <Route path='/' render={props => <Sidebar {...props} loggedIn={this.state.loggedIn} users={this.state.users} />} />
            </div>
          </div>
        </Router>
      </div>
    )
  }
}

export default App
