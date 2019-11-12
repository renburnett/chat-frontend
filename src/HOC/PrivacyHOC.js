import React from 'react'
import { Redirect } from 'react-router-dom'

const PrivacyHOC = (WrappedComponent) => {
  return class PrivacyHOC extends React.Component {
    render () {
      return (
        <>
          {window.localStorage.currentUser ? <WrappedComponent {...this.props} /> : <Redirect to='/login' />}
        </>
      )
    }
  }
}

export default PrivacyHOC
