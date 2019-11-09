
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
        <Router>
          <Navbar />
          <Route exact path='/login' render={props => <Login {...props} handleLogIn={this.logIn} />} />
          <div className="row">
            <Route path='/' render={props => <ChatWindow {...props} loggedIn={this.state.loggedIn} />} />
            <Route path='/' renter={props => <Sidebar {...props} loggedIn={this.state.loggedIn} users={this.state.users} />} />
          </div>
        </Router>
      </div>
    )
  }
}

export default App
