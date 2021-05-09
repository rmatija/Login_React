// // import { useState } from 'react';
// // import classes from './Login.module.css';
// // import { useHistory } from 'react-router-dom';

// // const SimpleInput = () => {

// //   const history = useHistory();

// //   const [enteredPassword, setenteredPassword] = useState('');
// //   const [enteredPasswordTouched, setenteredPasswordTouched] = useState(false);

// //   const [enteredEmail, setEnteredEmail] = useState('');
// //   const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

// //   const enteredPasswordIsValid = enteredPassword.trim() !== '';
// //   const nameInputIsInvalid = !enteredPasswordIsValid && enteredPasswordTouched;

// //   const enteredEmailIsValid = enteredEmail.trim() !== '' && enteredEmail.includes('@');
// //   const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

// //   // ======== EMAIL CHECK ======== //
// //   const emailInputChangeHandler = (event) => {
// //     setEnteredEmail(event.target.value);
// //   };
// //   const emailInputBlurHandler = () => {
// //     setEnteredEmailTouched(true);
// //   };
  
// //   // ======== PASSWORD CHECK ======== //
// //   const nameInputChangerHandler = (event) => {
// //     setenteredPassword(event.target.value);
// //   };
// //   const nameInputBlurHandler = () => {
// //     setenteredPasswordTouched(true);
// //   };

// //   let formIsValid = false

// //   if (enteredEmailIsValid && enteredPasswordIsValid) {
// //     formIsValid = true
// //   }

// //   const formSubmissionHandler = (event) => {
// //     event.preventDefault();
// //     setenteredPasswordTouched(true);
// //     setEnteredEmailTouched(true);

// //     if (!enteredPasswordIsValid && !enteredEmailIsValid) {
// //       return;
// //     }

// //     setenteredPassword('');
// //     setEnteredEmail('');
// //     setenteredPasswordTouched(false);
// //     setEnteredEmailTouched(false);

// //     fetch('https://api.getcountapp.com/api/v1/authenticate',
// //       {
// //         method: 'POST',
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({
// //           username: enteredEmail,
// //           password: enteredPassword
// //         })
// //       }
// //     ).then(() => {
// //       console.log('uspjeh')
// //       if(enteredPasswordIsValid && enteredEmailIsValid) {
// //         history.push('/profile');
// //       }
// //     })
// //   };


// //   return (
// //     <div className={classes.container}>
// //     <form onSubmit={formSubmissionHandler} className={classes.form}>
// //       <div className={classes.control}>
// //         <label htmlFor='email'>Your Email</label>
// //         <input 
// //           value={enteredEmail} 
// //           type='email' id='email'
// //           onChange={emailInputChangeHandler}
// //           onBlur={emailInputBlurHandler}
// //          />
// //         {emailInputIsInvalid && <p className={classes.errorText}>Email must include @.</p>}
// //       </div>

// //       <div className={classes.control}>
// //         <label htmlFor='password'>Enter password</label>
// //         <input 
// //           value={enteredPassword} 
// //           type='password' id='password'
// //           onChange={nameInputChangerHandler}
// //           onBlur={nameInputBlurHandler}
// //          />
// //         {nameInputIsInvalid && <p className={classes.errorText}>Password must not be empty.</p>}
// //       </div>

// //       <div className={classes.actions}>
// //         <button disabled={!formIsValid}>Submit</button>
// //       </div>
// //     </form>
// //     </div>
// //   );
// // };

// export default SimpleInput;