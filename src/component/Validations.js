import React from 'react'

function Validations(formData) {
    const errors = {};


    const phoneNumberPattern = /^[0-9]{8,9}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^s@]{1,30}$/;
    const usernamePattern = /^[0-9a-zA-Z]{1,20}$/
    const passwordPattern = /^[0-9a-zA-Z`!@#$%^&*?]{1,20}$/;

    switch(formData.loginMethod) {
        case "PhoneLogin":
            if (formData.phoneNumber === "") {
                errors.phoneNumber = "Phone Number is Required";
            }
            else if (!phoneNumberPattern.test(formData.phoneNumber)) {
                errors.phoneNumber = "Phone Number format is not correct";
            }
            break;
        case "EmailLogin":
            if (formData.email === "") {
                errors.email = "Email or Username is Required";
            }
            else if (!emailPattern.test(formData.email)) {
                errors.email = "Email format is not correct";
            }
            break;
        case "UsernameLogin":
            if (formData.username === "") {
                errors.username = "Email or Username is Required";
            }
            else if (!usernamePattern.test(formData.username)) {
                errors.username = "Username format is not correct";
            }
            break;

    }


    if (formData.password === "") {
        errors.password = "Password is Required";
    }
    else if (!passwordPattern.test(formData.password)) {
        errors.password = "Password format is not correct";
    }

    console.log(errors);

    return errors;
}

export default Validations