import React, { PureComponent } from 'react'
import MessageForm from './MessageForm'
import Message from '../components/Message'
import PrivacyHOC from '../HOC/PrivacyHOC'

class ChatWindow extends PureComponent {

  displayConversationMessages = () => {
    return this.props.currentConversation.messages.map((message) => {
      return <Message users={this.props.users} key={message.id} message={message}/>
    })
  }

  render () {
    return (
      <div className='col-9 chat-window'>
        {this.displayConversationMessages()}
        {this.props.currentConversation.topic 
        ? <MessageForm 
            currentConversation={this.props.currentConversation} 
            updateCurrentConversation={this.props.updateCurrentConversation} 
          /> 
        : null}
      </div>
    )
  }
}

export default PrivacyHOC(ChatWindow)

