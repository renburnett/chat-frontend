import React, { PureComponent } from 'react'
import User from '../components/User'
import PrivacyHOC from '../HOC/PrivacyHOC'

class Sidebar extends PureComponent {

  displayUsers = (users) => {
    return users.map( (user)=> {
      return (
        <div className='row col mx-auto px-md-5 p-3 border bg-light' onClick={() => this.props.handleClickUserConversation()} >
          <User key={user.id} user={user} />
        </div> 
      )
    })
  }

  render () {
    return (
        <div className='col sidebar'>{this.displayUsers(this.props.users)}
        </div>
    )
  }
}

export default PrivacyHOC(Sidebar)