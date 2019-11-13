import React from 'react'

const Message = (props) => {
  const findMessageAuthor = () => {
    return props.users.find(user => user.id === props.message.user_id)
  }

  const displayTime = () => {
    return new Date(props.message.created_at).toLocaleString()
  }

  const findCurrentUser = () => {
    return JSON.parse(window.localStorage.getItem('currentUser'))
  }

  const displayBasedOnUser = () => {
    if (findCurrentUser().id === findMessageAuthor().id) {
      return 'card bg-primary text-light text-right p-2 shadow-sm'
    } else {
      return 'card bg-secondary text-light text-left p-2 shadow-sm'
    }
  }

  return (
    <div className={displayBasedOnUser()}>
      {findMessageAuthor().name}: {props.message.content} @ {displayTime()}
    </div>
  )
}

export default Message
