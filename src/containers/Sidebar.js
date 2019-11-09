import React, { PureComponent } from 'react'
import User from '../components/User'
import PrivacyHOC from '../HOC/PrivacyHOC'

class Sidebar extends PureComponent {

  displayUsers = (users) => {
    return users.map( (user)=> {
      return <User key={user.id} user={user} />
    })
  }
// will refactor to pull from state

  render () {
    return (
      <div className='col sidebar'> {this.displayUsers(this.props.users)}</div>
    )
  }
}

export default PrivacyHOC(Sidebar)
