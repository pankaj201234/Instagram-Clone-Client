import React from 'react';
import { Link } from 'react-router-dom';

const Signin = () => {
  return (
    <div className='mycard'>
      <div className='card auth-card input-field'>
        <h2>Instagram</h2>
        <input type='text' placeholder='email' />
        <input type='text' placeholder='password' />
        <button className='btn waves-effect waves-light #1976d2 blue darken-2'>
          Login
        </button>
        <h5>
          <Link to='/Signup'>Don't have an account? Register here</Link>
        </h5>
      </div>
    </div>
  );
};

export default Signin;
