import React, { useState } from 'react';
// import './style.css';

// Imports helper function that checks if the email is valid.
// import { validateEmail } from '../../';

function Contact() {
  // Creates State variables for the form fields and sets their initial values to an empty string.
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  // const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Gets value and name of the input that triggered the change.
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, sets the State of either email, name or message.
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Prevents the default behavior of the form submit (default behavior is to refresh the page).
    e.preventDefault();

    // Checks to see if the email is not valid or if the name field is empty. If so an error message is displayed to the user.
    // if (!validateEmail(email) || !userName) {
    //   setErrorMessage('Email or username is invalid');
    //   // Exits out of this code block if something is wrong so that the user can make corrections.
    //   return;
    // }


    // If user successfully sends a message, input fields are cleared out. 
    setEmail('');
    setName('');
    setMessage('');
  };

  return (
    <div>
      <p>Please contact me by filling in your information below.</p>
      <form className="form">
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
        />
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          placeholder="Message"
        />
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {/* {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )} */}
    </div>
  );
}

export default Contact;
  