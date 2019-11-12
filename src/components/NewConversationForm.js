import React from 'react'

const NewConversationForm = (props) => {
  return (
    <div className='m-2 p-2 rounded shadow'>
      <form onSubmit={e => props.handleNewConversation(e)}>
        <div className='form-group'>
          <input type='text' placeholder='Start new conversation' required className='form-control-sm' />
        </div>
        <button type='submit' className='btn btn-outline-primary btn-sm btn-block p-2'>Create</button>
      </form>
    </div>
  )
}

export default NewConversationForm
