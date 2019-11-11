import React, { PureComponent } from 'react'
import User from '../components/User'
import PrivacyHOC from '../HOC/PrivacyHOC'

class Sidebar extends PureComponent {

  displayUsers = (users) => {
    console.timeLog(users,"users is it the full object?")
    return users.map( (user)=> {
      return (
        <div className='row col mx-auto px-md-5 p-3 border bg-light'>
        <User key={user.id} user={user} /></div> 
      )
    })
  }
// will refactor to pull from state


  render () {
    return (
        <div className='col sidebar'>{this.displayUsers(this.props.users)}
        </div>
    )
  }
}

export default Sidebar

// export default PrivacyHOC(Sidebar) will turn back on when i do a commit nov 10 4pm pst 