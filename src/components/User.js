import React from 'react'

const User = (props) => {
  return (
    <div className='far fa-circle'>
      {props.user.name}
    </div>
  )
}

export default User
