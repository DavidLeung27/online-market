import React, {useState} from 'react'
import styles from './css/LoginPage.module.css'

export default function LoginPage() {
  const [phoneLogin, setPhoneLogin] = useState(true);
  
  return (
    <div className={styles.loginSignupBox}>
      {/* Login Box */}
      <div className={styles.loginBox}>
        Login
        <form>
          <div>
            <button className="loginMethod" onClick = {() => setPhoneLogin(true)} type="button" id="button_phoneLogin">Phone Number</button>
            <button className="loginMethod" onClick = {() => setPhoneLogin(false)} type="button" id="button_emailLogin">Email Address</button>
          </div>

          {/* Show the Phone Login or Email Login */}
          {(phoneLogin && (
            <div className="loginInput" id="Login by Phone">
            <select className="countryCode" name="Country Code" id="Country Code"> 
              <option value="852">+852</option>
              <option value="000">+000</option> 
            </select>
            <input className="phoneInput" placeholder="Phone Number" id="LoginPhone" type="tel" name="Logine Phone"/>
          </div>
          )) || (
            <div className="loginInput" id="Login by Email">
            <input className="emailInput" placeholder="Email address" id="LoginEmail" type="email" name="Logine Email"/>
          </div>
          )}
          
          <div className="loginInput">
            <input className="passwordInput" placeholder="Password" id="Phone Password" type="password" name="Password"/>
          </div>
          <button className="button_login" onClick="notDone" type="button" id="Login">
            <div className="button_loginText">
              Login
            </div>
          </button>
        </form>
      </div>

      {/* SignUp Box */}
      <div className={styles.signUpBox}>
        Sign Up
        <button className="phone_signup">Sign Up with Phone</button>
        <button className="google_signup">Sign Up with Google Account</button>
        <button className="facebook_signup">Sign Up with Facebook Account</button>
      </div>
    </div>

  )
}
