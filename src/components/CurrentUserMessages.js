import React from 'react'

const CurrentUserMessages = (props) => {
  return (
    <div className='row justify-content-end'>
      <div className='card bg-primary text-light text-right p-2 shadow-sm m-1'>
        <span className='message-body'>{props.name}: {props.content}</span>
        <small>@ {props.time}</small>
      </div>
    </div>
  )
}

export default CurrentUserMessages
