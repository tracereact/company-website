import React, { useState, useEffect } from 'react';
import '../styles/contact.css';
import SaveMessage from './firebase/firebase-message';

const Contact = () => {
  // Error message states
  const [nameErrorMessage, setNameErrorMessage] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');

  // Error class states
  const [nameErrorClass, setNameErrorClass] = useState('error');
  const [emailErrorClass, setEmailErrorClass] = useState('error');

  const showError = (target) => {
    switch (target.name) {
      case 'name': {
        if (target.validity.valueMissing) {
          setNameErrorMessage('You need to enter your name.');
        } else if (target.validity.tooShort) {
          setNameErrorMessage(
            `Name should be at least ${target.minLength} characters; you entered ${target.value.length}.`
          );
        } else if (target.validity.patternMismatch) {
          setNameErrorMessage(
            'Please enter a valid name (only letters allowed).'
          );
        }
        setNameErrorClass('error active');
        break;
      }
      case 'email': {
        if (target.validity.valueMissing) {
          setEmailErrorMessage('You need to enter an e-mail address.');
        } else if (target.validity.typeMismatch) {
          setEmailErrorMessage(
            'Please enter a valid email. Example: john.doe@gmail.com.'
          );
        } else if (target.validity.tooShort) {
          setEmailErrorMessage(
            `Email should be at least ${target.minLength} characters; you entered ${target.value.length}.`
          );
        }
        setEmailErrorClass('error active');
        break;
      }
      default: {
        throw new Error('Cannot read form input id!');
      }
    }
  };

  const checkInput = (e) => {
    e.preventDefault();
    if (e.target.validity.valid) {
      // Reset states for error messages
      setNameErrorMessage('');
      setEmailErrorMessage('');

      // Reset states for error classes
      setNameErrorClass('error');
      setEmailErrorClass('error');
    } else {
      showError(e.target);
    }
  };

  // Check if form can be submitted
  const canSubmit = () => {
    if (document.querySelectorAll(':invalid')[1]) {
      // Found an entry that was invalid, prevent refresh of the page and point to it
      document.querySelectorAll(':invalid')[1].focus();
      return false;
    }
    return true;
  };

  // Append reCAPTCHA script to page on load
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.REACT_APP_SITE_KEY_PROD}`;
    document.body.appendChild(script);
  }, []);

  // Helper function to get form inputs
  const getInputVal = (name) => {
    return document.getElementsByName(name)[0]
      ? document.getElementsByName(name)[0].value
      : '';
  };

  // Send data to firebase
  const sendInfo = () => {
    SaveMessage({
      name: getInputVal('name'),
      email: getInputVal('email'),
      question: getInputVal('question'),
      phone: getInputVal('phone'),
      message: getInputVal('message')
    });
  };

  // Submit form after verifying reCAPTCHA
  const submitForm = (e) => {
    e.preventDefault(); // Prevent page from reloading
    if (!canSubmit()) return false;
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute(process.env.REACT_APP_SITE_KEY_PROD, { action: 'submit' })
        .then(() => {
          console.info('Sending contact info to db...');
          sendInfo();
        })
        .catch((error) => {
          console.error('Error occurred while handling captcha', error);
        });
    });
    return true;
  };

  return (
    <div className="contact">
      <div className="message">Hello, reach out!</div>
      <form method="post" onSubmit={submitForm} noValidate>
        <input
          type="text"
          id="name"
          name="name"
          pattern="[A-zÀ-ž -]+"
          minLength="2"
          placeholder="Name"
          onInput={checkInput}
          required
        />
        <span aria-live="polite" className={nameErrorClass}>
          {nameErrorMessage}
        </span>
        <input
          type="email"
          id="email"
          name="email"
          minLength="8"
          placeholder="Email Address"
          onInput={checkInput}
          required
        />
        <span aria-live="polite" className={emailErrorClass}>
          {emailErrorMessage}
        </span>
        <textarea
          maxLength="1000"
          name="message"
          id="textarea"
          placeholder="Write a message here! Give more details about what you're looking for."
        />
        <button type="submit" id="send">
          Send
        </button>
        <div
          className="g-recaptcha"
          data-sitekey={process.env.REACT_APP_SITE_KEY_PROD}
          data-size="invisible"
        />
      </form>
    </div>
  );
};

export default Contact;
