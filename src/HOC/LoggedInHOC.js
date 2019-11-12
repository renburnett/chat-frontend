import React from 'react'
import { Redirect } from 'react-router-dom'

const LoggedInHOC = (WrappedComponent) => {
  return class LoggedInHOC extends React.Component {
    render () {
      return (
        <>
          {window.localStorage.currentUser ? <Redirect to='/' /> : <WrappedComponent {...this.props} />}
        </>
      )
    }
  }
}

export default LoggedInHOC
