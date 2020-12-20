import React, { useContext } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebase.config';
import googleICON from '../../googleICON.png';
import './Login.css';
import { UserContext } from '../../App';

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email };
        setLoggedInUser(signedInUser);
        // sessionStorage.setItem('isAdmin', loggedInUser.isAdmin);
        // storeAuthToken();
      })
      .catch(function (error) {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div className='container text-center mt-3'>
      <div className='login-container'>
        <div className='login-text'>
          <h1>Log In</h1>
        </div>
        <button
          onClick={handleGoogleSignIn}
          className='google-login d-flex justify-content-between '
        >
          <div className='social-icon '>
            <img src={googleICON} alt='' />
          </div>
          <div className='social-text '>
            <p> Continue With Google</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Login;
