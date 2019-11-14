import React from 'react'
import API_URL from '../constants/constants'

class EditUser extends React.Component {
  state = {
    username:'',
    email: ''
  }

  handleEmailInput = (e) => {
    this.setState({
      email: e.target.value
    })
  }

  handleUserNameInput = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  updateUserInformation = () => {
    const userId = JSON.parse(localStorage.getItem('currentUser'))['id'];
    const config = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        name: this.state.username.toLowerCase(),
        email: this.state.email.toLowerCase()
      })
    }
    fetch(`${API_URL}/users/${userId}`, config) 
    .then(res => res.json())
    .then(res => this.displayChanges(res))
    .then(this.props.getUsers())
  }

  displayChanges = (updatedUser) => {
    // console.log("updating user information", updatedUser) TODO show user changed information
  }

    render(){
      return (
        <div>
      <div className='card bg-light mt-3 mb-3 shadow'>
        <div className='card-header'>
          <h3>Edit Your Account</h3> 
          <h6>Please edit username or email</h6>
        </div>
      <form className='card-body' onSubmit={this.updateUserInformation}> 
        <div className='form-group form-row'>
          <label htmlFor='username' className='col-sm-3 col-form-label-sm far fa-user'>  Username</label>
          <div className='col'>
            <input 
              type='text' 
              id='username' 
              placeholder={JSON.parse(localStorage.getItem('currentUser'))['name']}
              className='form-control shadow-sm'
              onChange={this.handleUserNameInput}  
              required 
              />
          </div>
        </div>
        <div className='form-group form-row'>
          <label htmlFor='email' className='col-sm-3 col-form-label-sm far fa-envelope'> Email</label>
          <div className='col'>
            <input 
              type='text' 
              id='email' 
              placeholder={JSON.parse(localStorage.getItem('currentUser'))['email']}
              className='form-control mb-3 shadow-sm'
              onChange={this.handleEmailInput} 
              required 
              />
          </div>
        </div>
        <button className='btn btn-outline-primary btn-block shadow-sm' type='submit'>Update User</button>
      </form>
      </div>
    </div> 
    )
  }
}

export default EditUser