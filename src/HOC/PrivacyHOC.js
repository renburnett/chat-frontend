import React from 'react'
import { Redirect } from 'react-router-dom'

const PrivacyHOC = (WrappedComponent) => {

  return class PrivacyHOC extends React.Component {
    isAuthorized = () => {
      if (this.props.loggedIn) {
        return <WrappedComponent {...this.props} />
      }
    }

    render() {
      return (
        <>
          {this.isAuthorized()}
        </>
      )
    }
  }
}

export default PrivacyHOC
