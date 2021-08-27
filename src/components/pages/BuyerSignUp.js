import React, { useState } from 'react';
import '../css/Form.css';
import SignUpBuyer from './SignUpBuyer';
import Login from './Login';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
      
        {!isSubmitted ? (
          <SignUpBuyer submitForm={submitForm} />
        ) : (
          <Login />
        )}
      </div>
    </>
  );
};

export default Form;