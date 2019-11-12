import React, { PureComponent } from 'react'

class MessageForm extends PureComponent {
  state = {
    content: ''
  }
  handleSubmit = (e) => {
    e.preventDefault()

    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        content: this.state.content,
        conversation_id: this.props.currentConversation.id,
        user_id: 1, // TODO: need to update this to current user! 
        is_read: false
      })
    }

    fetch('http://localhost:3000/messages', config)
    .then(res => res.json())
    .then(newMessage => {
      this.props.updateCurrentConversation(newMessage)
      this.resetState()
    })
  }
  
  handleTyping = (e) => {
    this.setState({
      content: e.target.value
    })
  }

  resetState = () => {
    this.setState({
      content: ''
    })
  }

  render () {
    return (
      <div className='row message-form'>
        <form onSubmit={this.handleSubmit}>
          <input 
            value={this.state.content} 
            placeholder='enter a message' 
            id='message-input' 
            type='text' 
            onChange={this.handleTyping} />
          <button type='submit' className='btn btn-outline-secondary'  >Send</button>
        </form>
         

      </div>
    )
  }
}
export default MessageForm
