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
            <button className={styles.loginMethod} onClick = {() => setPhoneLogin(true)} type="button" id="button_phoneLogin">Phone Number</button>
            <button className={styles.loginMethod} onClick = {() => setPhoneLogin(false)} type="button" id="button_emailLogin">Email Address</button>
          </div>

          {/* Show the Phone Login or Email Login */}
          {(phoneLogin && (
            <div className={styles.loginInput} id="Login by Phone">
              <select className="countryCode" name="Country Code" id="Country Code"> 
                <option value="852">+852</option>
                <option value="000">+000</option> 
              </select>
            <input className="phoneInput" placeholder="Phone Number" id="LoginPhone" type="tel" name="Logine Phone"/>
          </div>
          )) || (
            <div className={styles.loginInput} id="Login by Email">
              <input className="emailInput" placeholder="Email address" id="LoginEmail" type="email" name="Logine Email"/>
          </div>
          )}
          
          <div className="loginInput">
            <input className="passwordInput" placeholder="Password" id="Phone Password" type="password" name="Password"/>
          </div>
          <div>
            <button className="button_login" onClick="notDone" type="button" id="Login">
              Login
            </button>
          </div>
          
        </form>
      </div>

      <div className={styles.separateLine}></div>

      {/* SignUp Box */}
      <div className={styles.signUpBox}>
        Sign Up
        <div>
          <button className="phone_signup">Sign Up with Phone</button>
        </div>
        <div>
          <button className="facebook_signup">Sign Up with Facebook Account</button>
        </div>
        <div>
          <button className="google_signup">Sign Up with Google Account</button>
        </div>
      </div>
    </div>

  )
}
