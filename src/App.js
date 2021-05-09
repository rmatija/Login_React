import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';
import { useState } from 'react';

import ProfilePage from './components/ProfilePage/ProfilePage';
 

function App() {

  const history = useHistory();

  const [enteredPassword, setenteredPassword] = useState('');
  const [enteredPasswordTouched, setenteredPasswordTouched] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const [user, setUser] = useState({});

  const enteredPasswordIsValid = enteredPassword.trim() !== '';
  const nameInputIsInvalid = !enteredPasswordIsValid && enteredPasswordTouched;

  const enteredEmailIsValid = enteredEmail.trim() !== '' && enteredEmail.includes('@');
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  // ======== EMAIL CHECK ======== //
  const emailInputChangeHandler = event => {
    setEnteredEmail(event.target.value);
  };
  const emailInputBlurHandler = () => {
    setEnteredEmailTouched(true);
  };
  
  // ======== PASSWORD CHECK ======== //
  const nameInputChangerHandler = event => {
    setenteredPassword(event.target.value);
  };
  const nameInputBlurHandler = () => {
    setenteredPasswordTouched(true);
  };

  const formSubmissionHandler = event => {
    event.preventDefault();
    setenteredPasswordTouched(true);
    setEnteredEmailTouched(true);

    if (!enteredPasswordIsValid || !enteredEmailIsValid) {
      return;
    }

    setenteredPasswordTouched(false);
    setEnteredEmailTouched(false);

    fetch('https://api.getcountapp.com/api/v1/authenticate',
      {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: enteredEmail,
          password: enteredPassword
        })
      }
    ).then( async (res) => {  
        if (res.ok) {
          const resJson = await res.json()
          setUser(resJson.user); 
          history.push('/profile');
        } else {
          console.log('Not successful')
        }
      }
    )
  };

  return (
      <Switch>
        <Route path='/' exact>
          <div className='container'>
            <form onSubmit={formSubmissionHandler} className='form'>
              <div className='control'>
                <label htmlFor='email'>Your Email</label>
                <input 
                  value={enteredEmail} 
                  type='email' id='email'
                  onChange={emailInputChangeHandler}
                  onBlur={emailInputBlurHandler}
                />
                {emailInputIsInvalid && <p className='errorText'>Email must include @.</p>}
              </div>

              <div className='control'>
                <label htmlFor='password'>Enter password</label>
                <input 
                  value={enteredPassword} 
                  type='password' id='password'
                  onChange={nameInputChangerHandler}
                  onBlur={nameInputBlurHandler}
                />
                {nameInputIsInvalid && <p className='errorText'>Password must not be empty.</p>}
              </div>

              <div className='actions'>
                <button>Submit</button>
              </div>
            </form>
          </div>
        </Route>

        <Route path='/profile'>
          <ProfilePage user={user}/>
        </Route>
      </Switch>
     
  );
}

export default App;
