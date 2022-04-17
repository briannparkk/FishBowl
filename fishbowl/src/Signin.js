import React from 'react'
import { useNavigate } from "react-router-dom";
// database shit
import auth from "./Auth"
import { signInWithEmailAndPassword,signOut,} from "firebase/auth";

export default function SignIn(){
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });

    let navigate=useNavigate();
    let errorMessage="";

    async function goToSignUp(){
     navigate("/signup");
    }

    async function goToHome(){
       navigate("/home");
    }

    async function signUp() {
        navigate("/signup")
    }

    //have user try to login
  //have user try to login
  function logIn(){
    let email = document.getElementById("email").value;
    let pwd = document.getElementById("password").value;
    //attempt to use submitted email and password and sign in
    signInWithEmailAndPassword(auth, email, pwd)
      .then((userCredential) => { //sign in successful
        goToHome(); //send user to home page; auth.currentUser will now hold the user's information, including UID
      })
      .catch((error) => { //send error information to console
        const errorCode = error.code;
        errorMessage = error.message; //TODO: make it so error message prints to user
        console.log(errorCode, errorMessage);
      });
    
  }
    return(<div className="login-background">
        <div className='login-section'><br></br><br></br>
        <div className="login-title">Fishbowl</div><br></br><br></br><br></br>
                    <div className="login-field-    section">
                    <div className="login-field">
                      <label htmlFor="userEmail"></label>
                      <input className="signin-input-fields" placeholder="email" id="email"></input>
                  </div> <br></br><br></br>
                  <div className="login-field">
                      <label htmlFor="userPassword"></label>
                      <input className="signin-input-fields" placeholder="password" id="password"></input>
                  </div> <br/><br/><br/>
                  <div className="login-buttons">
                      <button className="login-button"  onClick={logIn}>log in</button>
                      <br/> <br/>
                      <button className="login-button"  onClick={goToSignUp}>sign up</button>
                  </div>
                    </div>
        </div>

                  <div className="error-message">
                    {errorMessage}
                  </div>
          </div>);
  }