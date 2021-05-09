import classes from './ProfilePage.module.css';
import { useHistory } from 'react-router-dom';

const ProfilePage = (props) => {
 
  const history = useHistory();

  const logOut = () => {
    history.push('/');
  }

  return (
   <div className={classes.container}>
     <div className={classes.actions}>
       <button onClick={ logOut }>Log out</button>
     </div>
     <h1> Welcome {props.user?.firstName} {props.user?.lastName}</h1>
   </div>
  );
};

export default ProfilePage;
