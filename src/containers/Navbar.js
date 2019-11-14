import React, { PureComponent } from 'react'
import { NavLink } from 'react-router-dom'
import EditUser from '../components/EditUser'

class Navbar extends PureComponent {

  userIsLoggedIn = () => {
    if (this.props.loggedIn) {
      return (
        <>
          <NavLink to='/edituser'>
            <div className='nav-item nav-link active' 
            >Edit Profile</div>
          </NavLink>
          <NavLink to='/login'>
            <div className='nav-item nav-link active' onClick={this.props.handleLogout}>Logout</div>
          </NavLink>
        </>
      )
    } else {
      return (
        <NavLink to='/login'>
          <div className='nav-item nav-link active'>Login</div>
        </NavLink>
      )
    }
  }

  render () {
    return (
      <nav className='navbar navbar-dark bg-dark'>
        <NavLink to='/'>
          <h1 className='navbar-brand'>Chat</h1>
        </NavLink>
        {this.userIsLoggedIn()}
      </nav>
    )
  }
}

export default Navbar
