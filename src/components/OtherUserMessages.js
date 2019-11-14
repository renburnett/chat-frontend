import React from 'react'

const OtherUserMessages = (props) => {
  return (
    <div className='row justify-content-start'>
      <div className='card bg-secondary text-light text-left p-2 shadow-sm m-1'>
        <span className='message-body'>{props.name}: {props.content}</span>
        <small>@ {props.time}</small>
      </div>
    </div>
  )
}

export default OtherUserMessages
