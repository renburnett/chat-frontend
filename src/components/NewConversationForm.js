import React, { PureComponent } from 'react'

class NewConversationForm extends PureComponent {
  state = {
    topic: ''
  }

  handleTyping = (e) => {
    this.setState({
      topic: e.target.value
    })
  }

  render () {
    return (
      <div className='m-2 p-2 rounded shadow'>
        <form onSubmit={e => this.props.handleNewConversation(e, this.state.topic)}>
          <div className='form-group'>
            <input
              onChange={this.handleTyping}
              value={this.state.topic}
              type='text'
              placeholder='Start new conversation'
              required
              className='form-control-sm'
            />
          </div>
          <button type='submit' className='btn btn-outline-primary btn-sm btn-block p-2'>Create</button>
        </form>
      </div>
    )
  }
}

export default NewConversationForm
