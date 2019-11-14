import React from 'react'

const ConversationTopics = (props) => {
  const showActiveConvo = () => {
    if (props.convo.topic === props.currentConversation.topic) {
      return 'selected-topic text-primary'
    } else {
      return 'topics'
    }
  }

  return (
    <div className={showActiveConvo()}>
      <strong>{props.convo.topic}</strong>
    </div>
  )
}

export default ConversationTopics
