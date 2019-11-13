import React, { PureComponent } from 'react'
import { NavLink } from 'react-router-dom'

class Navbar extends PureComponent {

  logout = () => {
    window.localStorage.removeItem('currentUser')
  }

  render () {
    return (
      <nav className='navbar navbar-dark bg-dark'>
        <NavLink to='/'>
          <h1 className='navbar-brand'>Chat</h1>
        </NavLink>
        <NavLink to='/user'>
          <div className='navbar-brand'> Edit Profile</div>
        </NavLink>
        <div className='navbar-nav'>
          {window.localStorage.currentUser
          ? (<NavLink to='/login'>
              <div className='nav-item nav-link active' onClick={this.logout}>Logout</div>
            </NavLink>)
          : (<NavLink to='/login'>
              <div className='nav-item nav-link active'>Login</div>
            </NavLink>)
          }
        </div>
      </nav>
    )
  }
}

export default Navbar
