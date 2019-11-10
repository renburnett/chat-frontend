import React, { PureComponent } from 'react'
// import LoginAlert from '../components/LoginAlert'
class Login extends PureComponent {
  state = {
    username: '',
    email: ''
  }

  handleTyping = (e) => {
    this.setState({ [e.target.id]: e.target.value })
  }

  userLogin = (e) => {
    e.preventDefault()
    let currentUser = this.props.users.find(user => user.email === this.state.email && user.name === this.state.username)
    if (!currentUser) {
      this.createUser().then(newUser => {
        if (newUser.id) {
          this.props.addNewUser(newUser)
          this.props.handleLogin(newUser)
        } else {
          this.errorLoggingIn(true)
        }
      })
    } else {
      this.props.handleLogIn(currentUser)
    }
  }

  createUser = () => {
    console.log('creating user:', this.state.username, this.state.email)
    return fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        name: this.state.username,
        email: this.state.email
      })
    }).then(resp => resp.json())
  }

  errorLoggingIn = (errorPresent) => {
    if (errorPresent) {
      console.log('There was an error. Unable to add new user to database.')
      return (
        <div className='alert alert-danger mt-3 shadow' role='alert'>
          <p>Unable to login or add new user. Please double check your login information.</p>
        </div>
      )
    //   return <LoginAlert />
    }
  }

  render () {
    return (
      <>
        {this.errorLoggingIn()}
        <div className='card bg-light mt-3 shadow'>
          <div className='card-header'>
            <h3>Welcome to Chat!</h3> 
            <h6>Please login</h6>
          </div>
          <div className='card-body'>
            <form onSubmit={this.userLogin}>
              <div className='form-group form-row'>
                <label htmlFor='username' className='col-sm-3 col-form-label-sm'>Your Username</label>
                <div className='col'>
                  <input 
                    type='text' 
                    placeholder='enter your username' 
                    id='username' 
                    value={this.state.username}
                    className='form-control shadow-sm' 
                    required 
                    onChange={this.handleTyping}/>
                </div>
              </div>
              <div className='fom-group form-row'>
                <label htmlFor='email' className='col-sm-3 col-form-label-sm'>Your Email</label>
                <div className='col'>
                  <input 
                    type='text' 
                    placeholder='enter your email' 
                    id='email' 
                    value={this.state.email}
                    className='form-control mb-3 shadow-sm' 
                    required 
                    onChange={this.handleTyping}/>
                </div>
              </div>
              <button className='btn btn-outline-primary btn-block shadow-sm' type='submit'>Login</button>
            </form>
          </div>
        </div>
      </>
    )
  }
}

export default Login
