import React, { PureComponent } from 'react'

class Login extends PureComponent {
  render () {
    return (
      <div className='card bg-light mt-3 shadow'>
        <div className='card-header'>
          <h4>Welcome to Chat! Please login:</h4>
        </div>
        <div className='card-body'>
          <form onSubmit={this.props.handleLogIn}>
            <div className='form-group form-row'>
              <label for='username' className='col-sm-3 col-form-label-sm '>Your Username</label>
              <div className='col'>
                <input type='text' placeholder='enter your username' id='username' className='form-control shadow-sm' required />
              </div>
            </div>
            <div className='fom-group form-row'>
              <label for='email' className='col-sm-3 col-form-label-sm'>Your Email</label>
              <div className='col'>
                <input type='text' placeholder='enter your email' id='email' className='form-control mb-3 shadow-sm' required />
              </div>
            </div>
            <button className='btn btn-outline-primary btn-block shadow-sm' type='submit'>Login</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Login
