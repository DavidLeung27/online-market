import React, { useState } from 'react'

function SignUpTable() {

  const [formData, setFormData] = useState({
    email: '',
    countryCode: '',
    phoneNumber: '',
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    address: ''
  });

  const handelChange = e => {
    const {name, value} = e.target;
    setFormData(preState => ({
      ...preState,
      [name]: value
    }));
  }

  // const handleKeyPress = (event) => {
  //   if (event.key === 'Enter') {
  //     event.preventDefault(); // Prevent default Enter key behavior (e.g., line break in textarea)
  //     handleSubmit(event); // Manually trigger form submission
  //   }
  // };

  const submitSignUpForm = (e) => {
    e.preventDefault();
    console.log(formData);

    let submitForm;

    if(formData.email === '') {
      const {email, ...rest} = formData;
      submitForm = rest;
    }
    else {
      const {countryCallingCode, phoneNumber, ...rest} = formData;
      submitForm = rest;
    }

    console.log(submitForm);

    fetch('http://localhost:8080/signup', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(submitForm)
    }).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    })
  }

  return (
    <div>
      <form className='signUpForm'>
        Country Code: *
        <input className="phoneInput" placeholder="Country Code" id="SignUpCountryCode" type="tel" name="countryCode" onChange={handelChange}/>
        Phone Number: *
        <input className="phoneInput" placeholder="Phone Number" id="SignUpPhone" type="tel" name="phoneNumber" onChange={handelChange}/>
        User Name: *
        <input className="phoneInput" placeholder="Username" id="SignUpUsername" type="tel" name="username" onChange={handelChange}/>
        Password: *
        <input className="phoneInput" placeholder="Password" id="SignUpPassword" type="password" name="password" onChange={handelChange}/>
        First Name: *
        <input className="phoneInput" placeholder="First Name" id="SignUpFirstName" type="tel" name="firstName" onChange={handelChange}/>
        Last Name: *
        <input className="phoneInput" placeholder="Last Name" id="SignUpLastName" type="tel" name="lastName" onChange={handelChange}/>
        Address Name: *
        <input className="phoneInput" placeholder="Address" id="SignUpAddress" type="tel" name="address" onChange={handelChange}/>
        <div>
          <button className="button_login" onClick={submitSignUpForm} type="button" id="SignUp">
            SignUp
          </button>
        </div>   
      </form>
    </div>
  )
}

export default SignUpTable