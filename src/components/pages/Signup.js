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