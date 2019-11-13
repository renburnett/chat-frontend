import React from 'react'
import { ActionCable } from 'react-actioncable-provider'

const Cable = (props) => {
  const createCables = () => {
    return props.conversations.map((convo) => {
      return (
        <ActionCable
          key={convo.id}
          channel={{ channel: 'MessagesChannel', conversation: convo.id }}
          onReceived={(e) => props.handleReceivedMessage(e.message)}
        />
      )
    })
  }

  return (
    <>
      {createCables()}
    </>
  )
}

export default Cable
