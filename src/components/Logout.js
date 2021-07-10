import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

export function Logout() {
  return (
    <Link to='/'>
      <button className='btn'>Logout</button>
    </Link>
  );
}