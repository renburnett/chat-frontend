import React, { PureComponent } from 'react'
import { NavLink } from 'react-router-dom'

class Navbar extends PureComponent {
  render () {
    return (
      <nav className='row navbar navbar-dark bg-dark'>
        <NavLink to='/'>
          <h1 className='navbar-brand pl-3' to='/'>Chat</h1>
        </NavLink>
        <NavLink to='/login'>
          <div className='pr-3'>Login</div>
        </NavLink>
      </nav>
    )
  }
}

export default Navbar
