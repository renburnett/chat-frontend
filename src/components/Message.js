import React, { PureComponent } from 'react'
import CurrentUserMessages from './CurrentUserMessages'
import OtherUserMessages from './OtherUserMessages'

class Message extends PureComponent {
  state = {
    user: {
      name: ''
    },
    time: ''
  }

  componentDidMount () {
    this.findMessageAuthor()
    this.findMessageTime()
  }

  findMessageAuthor = () => {
    const user = this.props.users.find(user => user.id === this.props.message.user_id)
    this.setState({
      user: user
    })
  }

  findMessageTime = () => {
    const time = new Date(this.props.message.created_at).toLocaleString()
    this.setState({
      time: time
    })
  }

  findCurrentUser = () => {
    return JSON.parse(window.localStorage.getItem('currentUser'))
  }

  displayBasedOnUser = () => {
    if (this.findCurrentUser().id === this.state.user.id) {
      return <CurrentUserMessages name={this.state.user.name} content={this.props.message.content} time={this.state.time} />
    } else {
      return <OtherUserMessages name={this.state.user.name} content={this.props.message.content} time={this.state.time} />
    }
  }

  render () {
    return (
      <>
      {this.displayBasedOnUser()}
      </>
    )
  }
}

export default Message
