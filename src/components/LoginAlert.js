import React from 'react'

const LoginAlert = (props) => {
  return (
    <div className='alert alert-danger mt-3 shadow' role='alert'>
      <p>Unable to login or add new user. Please double check your login information.</p>
    </div>
  )
}

export default LoginAlert
