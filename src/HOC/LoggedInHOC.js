import React from 'react'
import { Redirect } from 'react-router-dom'

const LoggedInHOC = (WrappedComponent) => {
  return class LoggedInHOC extends React.Component {
    render () {
      return (
        <>
          {this.props.loggedIn ? <Redirect to='/' /> : <WrappedComponent {...this.props} />}
        </>
      )
    }
  }
}

export default LoggedInHOC
