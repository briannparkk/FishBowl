import auth from "./Auth"
import { createUserWithEmailAndPassword,updateProfile,} from "firebase/auth";
import { useNavigate } from "react-router";
import {doc, setDoc } from "firebase/firestore";
import db from "./Database";

export default function SignUp(){
  let navigate=useNavigate();
  let errorMessage="";
  // Register a new user
  async function signedUp(){
      navigate("/home");
  }
  async function addUser(username, userId) {
    try {
        // add user with default data
        const docRef = doc(db, "users", userId);
        await setDoc(docRef, {
            username: username,
        });
    } catch {
        console.log("couldn't upload information");
    }
}

    async function signIn() {
        navigate("/signin");
    }
  //sign up the user
  async function signUp(){
    let email = document.getElementById("email").value;
    let pwd = document.getElementById("password").value;
    let username = document.getElementById("username").value;
    try{//attempt to create user, then pass username into newly created Profile
      const user= (await createUserWithEmailAndPassword(auth, email, pwd)).user;
      await updateProfile(user,{displayName:username});
      const userID=user.uid;
      await addUser(username,userID);
      console.log("added user ",user);
      signedUp(); //send user to Home page
    }   
    catch (error){     
      const errorCode = error.code;
      errorMessage = error.message; //TODO: make it so error message prints to user
      console.log(errorCode, errorMessage);
    }
  }
  return(
    <div className="login-background">
    <div className='login-section'><br></br><br></br>
    <br></br><br></br><br></br>
                <div className="login-field-section">
                <div className="login-field">
                  <label htmlFor="userEmail"></label>
                  <input className="signin-input-fields" placeholder="email" id="email"></input>
              </div> <br></br><br></br>
              <div className="login-field">
                  <label htmlFor="userPassword"></label>
                  <input className="signin-input-fields" placeholder="password" id="password"></input>
              </div> <br/><br/><br/>
              <div className="login-field">
                  <label htmlFor="userName"></label>
                  <input className="signin-input-fields" placeholder="username" id="username"></input>
              </div> <br/><br/><br/>
              <div className="login-buttons">
                  <button className="login-button" onClick={signUp}>sign up</button>
              </div>
                </div>
    </div>

              <div className="error-message">
                {errorMessage}
              </div>
      </div>
//   <div>
//     <div className="login-field">
//       <input placeholder="Email Address" id="email"/>
//       <input type="password" placeholder="Password" id="password"/>
//       <input placeholder="Username" id="username"></input>
//     </div>
//     <div class="login-buttons">
//       <input value="SIGN UP" class="signup-button" type="submit" onClick={signUp}/>
//     </div>
//     <div class="error-message">
//       {errorMessage}
//     </div>
//   </div>
  );
}