import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './signup.styles.css';
import { useGoogleLogin } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import { signup, signupGoogle } from '../../redux/actions/auth';

const InitState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const Signup = () => {
  const nagivate = useNavigate();
  const dispatch = useDispatch();
  const [sForm, setsForm] = useState(InitState);

  const handleChange = event =>
    setsForm({
      ...sForm,
      [event.target.name]: event.target.value,
    });

  const handleGoogleLoginSuccess = tokenResponse => {
    const accessToken = tokenResponse.access_token;
    dispatch(signupGoogle(accessToken, nagivate));
  };
  const login = useGoogleLogin({ onSuccess: handleGoogleLoginSuccess });

  const handleSubmit = event => {
    event.preventDefault();
    if (
      sForm.firstName !== '' &&
      sForm.lastName !== '' &&
      sForm.password !== '' &&
      sForm.confirmPassword !== '' &&
      sForm.email !== '' &&
      sForm.password === sForm.confirmPassword &&
      sForm.password.length >= 4
    ) {
      dispatch(signup(sForm, nagivate));
    }
  };

  return (
    <div className='login'>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div>
          <label>First Name</label>
          <input
            name='firstName'
            type='text'
            value={sForm.firstName}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label>Last Name</label>
          <input
            name='lastName'
            type='text'
            value={sForm.lastName}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label>email</label>
          <input
            name='email'
            type='text'
            value={sForm.email}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label>password</label>
          <input
            name='password'
            type='password'
            value={sForm.password}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label>confirm password</label>
          <input
            name='confirmPassword'
            type='password'
            value={sForm.confirmPassword}
            onChange={handleChange}
          ></input>
        </div>
        <button type='submit'>Sign up</button>
        <span>or</span>
        <button onClick={() => login()}>Signup with Google</button>
        <p>
          Already have an account?<Link to='/login'>log in</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
