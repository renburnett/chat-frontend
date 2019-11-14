import React, { PureComponent } from 'react'
import ConversationTopics from '../components/ConversationTopics'
import NewConversationForm from '../components/NewConversationForm'
import PrivacyHOC from '../HOC/PrivacyHOC'

class Sidebar extends PureComponent {

  displayConversation = (convos) => {
    return convos.map( (convo)=> {
      return (
        <div key={convo.id} className='card mr-3 ml-3 mb-1 shadow-sm p-2' onClick={(e) => this.props.handleClickConversation(convo)} >
          <ConversationTopics convo={convo} currentConversation={this.props.currentConversation} />
        </div>
      )
    })
  }

  render () {
    return (
      <div className='col-sm-3 bg-light sidebar card shadow mt-3'>
        <div className='card-header p-3 mb-3'>
          <NewConversationForm addNewConversation={this.props.addNewConversation}/>
        </div>
        <div className='bard-body overflow-auto'>
          {this.displayConversation(this.props.convos)}
        </div>
      </div>
    )
  }
}

export default PrivacyHOC(Sidebar)
