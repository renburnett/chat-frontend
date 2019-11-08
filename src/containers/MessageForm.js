import React, { PureComponent } from 'react'

class MessageForm extends PureComponent {
  state = {
    text: ''
  }
  handleSubmit = (e) => {
    e.preventDefault()
    console.log("are we clicking on the button")
  }
  
  handleTyping = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  render () {
    return (
      <div className='row message-form'>
        <form onSubmit={this.handleSubmit}>
          <input 
            value={this.state.text} 
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
