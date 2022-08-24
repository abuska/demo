import Avatar from '@mui/material/Avatar';
import ListItem from '@mui/material/ListItem';
import Collapse from '@mui/material/Collapse';
import styles from "styles/userListItem.module.css"

const UserListItem=({user, style})=> { 
    
    return (
        
        <ListItem style={style }>
            <Avatar alt="user.id" src={user.image} />
            <div className={styles.user_data_container}>
                <div>
                    {user.firstName+" "+user.lastName}
                
                </div>
                <div>
            
                    {user.phone}
                </div>
            </div>
        </ListItem>
    )
  }
  export default UserListItem;