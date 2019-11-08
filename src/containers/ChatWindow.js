import React, { PureComponent } from 'react'
import MessageForm from './MessageForm'

class ChatWindow extends PureComponent {
  render () {
    return (
      <div className='col-9 chat-window'>
        <MessageForm />
        ChatWindow
      </div>
    )
  }
}

export default ChatWindow
