import React from 'react'

const LoginAlert = () => {
  return (
    <div className='alert alert-danger mt-3 shadow' role='alert'>
      <span>Unable to login or add new user. Please double check your login information.</span>
    </div>
  )
}

export default LoginAlert
