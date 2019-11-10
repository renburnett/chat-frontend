import React, { PureComponent } from 'react'
import { NavLink } from 'react-router-dom'

class Navbar extends PureComponent {
  render () {
    return (
      <nav className='row navbar navbar-dark bg-dark'>
        <NavLink to='/'>
          <h1 className='navbar-brand' to='/'>Chat</h1>
        </NavLink>
        <NavLink to='/login'>
          Login
        </NavLink>
      </nav>
    )
  }
}

export default Navbar
