import React, { PureComponent } from 'react'
import { NavLink } from 'react-router-dom'
import EditUser from '../components/EditUser'

class Navbar extends PureComponent {

  userIsLoggedIn = () => {
    if (this.props.loggedIn) {
      return (
        <>
          <NavLink to='/edituser' className='nav-item nav-link'>Edit Profile</NavLink>
          <NavLink to='/login' className='nav-item nav-link' onClick={this.props.handleLogout}>Logout</NavLink>
        </>
      )
    } else {
      return (
        <NavLink className='nav-item nav-link' to='/login'>Login</NavLink>
      )
    }
  }

  render () {
    return (
      <nav className='navbar navbar-dark bg-dark'>
        <NavLink className='navbar-brand' to='/'>
          <h1>Chat</h1>
        </NavLink>
        {this.userIsLoggedIn()}
      </nav>
    )
  }
}

export default Navbar
