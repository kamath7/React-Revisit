import { useContext, useRef } from 'react';
import { useHistory } from 'react-router';
import AuthContext from '../../store/auth-context';
import classes from './ProfileForm.module.css';

const ProfileForm = () => {
  const history = useHistory()
  const newPassRef = useRef()
  const authCtx = useContext(AuthContext)
  const submitHandler = (e) => {
    e.preventDefault()
    const enteredNewPass = newPassRef.current.value;

    fetch(`https://identitytoolkit.googleapis.com/v1/accounts:update?key=${process.env.REACT_APP_FIREBASE_KEY}`, {
      method: 'POST',
      body: JSON.stringify({
        idToken: authCtx.token,
        password: enteredNewPass,
        returnSecureToken: false
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      alert("Password succesfully changed 🥳")
      history.replace('/')
    })

  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' ref={newPassRef} minLength="7" id='new-password' />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
