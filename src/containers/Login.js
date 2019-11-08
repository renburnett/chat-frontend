import React, { PureComponent } from 'react'

class Login extends PureComponent {
  render () {
    return (
      <div>
        <form onSubmit={this.props.handleLogIn}>
          <input type='text' placeholder='name' />
          <button type='submit'>Login</button>
        </form>
      </div>
    )
  }
}

export default Login
