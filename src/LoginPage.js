import React, {useEffect, useState} from 'react'
import styles from './css/LoginPage.module.css'
import { Link } from 'react-router-dom';
import EnterKeyHandler from './component/EnterKeyHandler';
import Validations from './component/Validations';

export default function LoginPage() {
  const [loginMethod, setLoginMethod] = useState("PhoneLogin");
  
  const [formData, setFormData] = useState({
    countryCode: '852',
    phoneNumber: '',
    email: '',
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  
  const handleChange = e => {
    const {name, value} = e.target;
    let adjustName;
    
    if(name == "emailOrUsername") {
      let loginMethodValue;
      const emailFormatChecker = new RegExp("@");

      if(emailFormatChecker.test(value)) {
        adjustName = "email";
        loginMethodValue = "EmailLogin";
      } 
      else {
        adjustName = "username";
        loginMethodValue = "UsernameLogin";
      }
      setLoginMethod(loginMethodValue);
    }
    else {
      adjustName = name;
    }

    setFormData(preState => ({
      ...preState,
      [adjustName]: value,
    }));
    
  }
  
  const submitLoginForm = (e) => {
    e.preventDefault();

    const submitForm = formMethodChecking();

    const validationsResult = Validations(submitForm);

    setErrors(validationsResult);

    if(Object.keys(validationsResult).length !== 0) {
      return ;
    }

    console.log(submitForm);

    fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(submitForm)
    }).then((response) => {
      return response.json();
    }).then((data) => {
      console.log(data);
    })
  }

  const formMethodChecking = () => {
    let submitForm = {...formData}

    switch(loginMethod) {
      case "PhoneLogin":
        delete submitForm.email;
        delete submitForm.username;
        break;
      case "EmailLogin":
        delete submitForm.countryCode;
        delete submitForm.phoneNumber;
        delete submitForm.username;
        break;
      case "UsernameLogin":
        delete submitForm.countryCode;
        delete submitForm.phoneNumber;
        delete submitForm.email;
        break;
      default:
        break;
    }

    submitForm = {
      ...submitForm,
      loginMethod: loginMethod
    }

    return submitForm;
  }
  
  return (
    <div className={styles.loginSignupBox}>
      {/* Login Box */}
      <div className={styles.loginBox}>
        Login
        <form>
          <div className={styles.loginMethodContainer}>
            <button className={styles.loginMethod} onClick = {() => setLoginMethod("PhoneLogin")} type="button" id="button_phoneLogin">Phone Number</button>
            <button className={styles.loginMethod} onClick = {() => setLoginMethod("UsernameLogin")} type="button" id="button_emailLogin">Email Address / Username</button>
          </div>
          <EnterKeyHandler onEnterKeyDown={submitLoginForm}>
            {/* Show the Phone Login or Email Login */}
            {(loginMethod == "PhoneLogin" && (
              <div className={styles.loginInput} id="Login by Phone">
                <select className="countryCode" id="Country Code" name="countryCode" onChange={handleChange}> 
                  <option value="852">+852</option>
                  <option value="000">+000</option> 
                </select>
              <input className="phoneInput" placeholder="Phone Number" id="LoginPhone" type="tel" name="phoneNumber" onChange={handleChange }/>
              {(errors.phoneNumber) && <div className={styles.errorMessage}>{errors.phoneNumber}</div>}
            </div>
            )) || (
              <div className={styles.loginInput} id="Login by Email/Username">
                <input className="emailOrUserInput" placeholder="Email address / Username" id="LoginEmail" type="text" name="emailOrUsername" onChange={handleChange}/>
                {(errors.email || errors.username) && <div className={styles.errorMessage}>{errors.email}{errors.username}</div>}
              </div>
            )}
            
            <div className="loginInput">
              <input className="passwordInput" placeholder="Password" id="LoginPassword" type="password" name="password" onChange={handleChange}/>
              {(errors.password) && <div className={styles.errorMessage}>{errors.password}</div>}
            </div>
            <div>
              <button className="button_login" onClick={submitLoginForm} type="button" id="Login">
                Login
              </button>
            </div>
          </EnterKeyHandler>
          
        </form>
      </div>

      <div className={styles.separateLine}></div>

      {/* SignUp Box */}
      <div className={styles.signUpBox}>
        Sign Up
        <Link to="/signup">
          <button className="phone_signup">Sign Up with Phone</button>
        </Link>
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
