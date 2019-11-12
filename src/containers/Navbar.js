import React, { PureComponent } from 'react'
import { NavLink } from 'react-router-dom'

class Navbar extends PureComponent {

  logout = () => {
    window.localStorage.removeItem('currentUser')
  }

  render () {
    return (
      <nav className='row navbar navbar-dark bg-dark'>
        <NavLink to='/'>
          <h1 className='navbar-brand pl-3' to='/'>Chat</h1>
        </NavLink>
        <NavLink to='/login'>
          <div className='pr-3'>Login</div>
        </NavLink>
        <NavLink to='/login'>
          <button className='pr-3' onClick={this.logout}>Logout</button>
        </NavLink>
      </nav>
    )
  }
}

export default Navbar
