
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
    conversations: [],
    currentConversation: {
      messages: []
    },
  }

  logIn = (user) => {
    this.setState({
      loggedIn: true
    })
    window.localStorage.setItem('currentUser', JSON.stringify(user))
  }

  getUsers = () => {
    fetch('http://localhost:3000/users')
    .then(res=>res.json())
    .then(usersList => this.setState({users: usersList}))
  }

  getConvos = () => {
    fetch('http://localhost:3000/conversations')
    .then(res => res.json())
    .then((convoList) => this.setState({conversations: convoList}))
  }

  componentDidMount(){
    this.getUsers()
    this.getConvos()
  }

  addNewConversation = (newTopic) => {
    this.setState(prevState => {
      return { conversations: [...prevState.conversations, newTopic] }
    })  }

  addNewUser = (newUser) => {
    this.setState(prevState => {
      return { users: [...prevState.users, newUser] }
    })
  }

  handleClickConversation = (convo) => {
    this.setState({currentConversation: convo})
  }

  updateCurrentConversation = (newMessage) => {
    this.setState(prevState => {
      return {currentConversation: {
        ...prevState.currentConversation,
        messages: [...prevState.currentConversation.messages, newMessage]
      }}
    })
  }

  render(){
    return (
      <div className="App" >
        <Router>
          <Navbar />
          <div className="container">
            <Route exact path='/login' render={props => {
              return <Login 
                {...props}
                handleLogIn={this.logIn}
                users={this.state.users}
                addNewUser={this.addNewUser}
                loggedIn={this.state.loggedIn}
              />}
            }/>
            <div className="card shadow mt-3 p-3">
              <div className="row">
                <Route path='/' render={props => {
                  return <ChatWindow 
                    {...props}
                    currentConversation={this.state.currentConversation}
                    updateCurrentConversation={this.updateCurrentConversation}
                    loggedIn={this.state.loggedIn}
                    users={this.state.users}
                  />}
                }/>
                <Route path='/' render={props => {
                  return <Sidebar 
                    {...props}
                    loggedIn={this.state.loggedIn}
                    convos={this.state.conversations}
                    handleClickConversation={this.handleClickConversation}
                    addNewConversation={this.addNewConversation}
                  />}
                }/>
              </div>
            </div>
          </div>
        </Router>
      </div>
    )
  }
}

export default App

