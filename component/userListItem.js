const UserListItem=({user, style})=> { 
    return (
        <div style={style}>
            {console.log(user)}
            {user.firstName+" "+user.lastName}
        </div>
    )
  }
  export default UserListItem;