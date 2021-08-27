import React, { useState } from 'react';
import '../css/Form.css';
import SignUpArtist from './SignUpArtist';
import Login from './Login';
import { Link } from 'react-router-dom';
const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <img className='form-img' src='img/img-2.svg' alt='spaceship' />
        </div>
        {!isSubmitted ? (
          <SignUpArtist submitForm={submitForm} />
        ) : (
          <Login />
        )}
      </div>
    </>
  );
};

export default Form;