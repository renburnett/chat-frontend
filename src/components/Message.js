import React from 'react'

const Message = (props) => {
  return (
    <div>
      {/* user: {TODO: add user} */}
      content: {props.message.content}
    </div>
  )
}

export default Message
