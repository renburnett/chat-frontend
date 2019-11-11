import React from 'react'

const NewConversationForm = (props) => {
  return (
    <form onSubmit={e => props.handleNewConversation(e)}>
      <input type="text" placeholder="New conversation topic" required />
      <button type="submit" className="btn btn-primary"> Create </button>
    </form>
  )
}

export default NewConversationForm
