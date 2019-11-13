import React, { PureComponent } from 'react'
import ConversationTopics from '../components/ConversationTopics'
import NewConversationForm from '../components/NewConversationForm'
import PrivacyHOC from '../HOC/PrivacyHOC'

class Sidebar extends PureComponent {

  displayConversation = (convos) => {
    return convos.map( (convo)=> {
      return (
        <div key={convo.id} className='row col mx-auto px-md-5 p-3 border bg-light' onClick={(e) => this.props.handleClickConversation(convo)} >
          <ConversationTopics  convo={convo} />
        </div> 
      )
    })
  }

  handleNewConversation = (e) => {
    e.preventDefault()

    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify({
        topic: e.target.children[0].value
      })
    }
    e.target.children[0].value = ""

    fetch('http://localhost:3000/conversations', config)
    .then(res => res.json())
    .then(newTopic => {
      if (newTopic.id) {
        this.props.addNewConversation(newTopic)
      }
    })
  }

  render () {
    return (
      <div className='col sidebar'>
        <NewConversationForm handleNewConversation={this.handleNewConversation}/>
        {this.displayConversation(this.props.convos)}
      </div>
    )
  }
}

export default PrivacyHOC(Sidebar)
