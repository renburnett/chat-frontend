import React, { PureComponent } from 'react'
import User from '../components/User'

class Sidebar extends PureComponent {

  displayUsers = (users) => {
    return users.map( (user)=> {
      return <User key={user.id} user={user} />
    })
  }
// will refactor to pull from state

  render () {
    return (
      <div className='mt-5'> {this.displayUsers(this.props.users)}</div>
    )
  }
}

export default Sidebar
