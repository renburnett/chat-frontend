import React from 'react'

const Message = (props) => {
  const findMessageAuthor = () => {
    return props.users.find(user => user.id === props.message.user_id)
  }

  const findCurrentUser = () => {
    return JSON.parse(window.localStorage.getItem('currentUser'))
  }

  return (
    <>
      {findCurrentUser().id === findMessageAuthor().id
        ? (<div className='card bg-primary text-light text-right p-2'>
          {findMessageAuthor().name}: {props.message.content} @ {props.message.created_at}
        </div>)
        : (<div className='card bg-secondary text-light text-left p-2'>
          {findMessageAuthor().name}: {props.message.content} @ {props.message.created_at}
        </div>)}
    </>
  )
}

export default Message
