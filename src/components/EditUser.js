import React from 'react'


const EditUser = (props) => {

  return (
   <div>
    inside of edit user
      <form onSubmit={() => this.props.handleUpdatingUser}>
      // <input
    value={localStorage.currentUser.name}
    type="text"
    />
     </form>
     <input
     value={localStorage.currentUser.email}
     type="text"
     />
     <form>

     </form>
   </div> 
  )
}

export default EditUser