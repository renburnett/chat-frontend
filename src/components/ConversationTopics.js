import React from 'react'

const ConversationTopics = (props) => {
  const showActiveConvo = () => {
    if (props.convo.topic === props.currentConversation.topic) {
      return 'text-primary'
    }
  }

  return (
    <div className={showActiveConvo()}>
      {props.convo.topic}
    </div>
  )
}

export default ConversationTopics
