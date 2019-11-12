import React from 'react'

const Message = (props) => {
  const findUser = () => {
    return props.users.find(user => user.id === props.message.user_id)
  }

  return (
    <div>
      <p>{findUser().name}: {props.message.content} @ {props.message.created_at}</p>
    </div>
  )
}

export default Message
