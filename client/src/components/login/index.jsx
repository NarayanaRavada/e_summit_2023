import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.styles.css';
import { useGoogleLogin } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import { signinGoogle, signin } from '../../redux/actions/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleGoogleLoginSuccess = tokenResponse => {
    const accessToken = tokenResponse.access_token;
    dispatch(signinGoogle(accessToken, navigate));
  };
  const login = useGoogleLogin({ onSuccess: handleGoogleLoginSuccess });

  const handleSubmit = event => {
    event.preventDefault();
    if (email !== '' && password !== '') {
      dispatch(signin({ email, password }, navigate));
    }
  };

  const handleChange = event => {
    if (event.target.id === 'email') {
      setEmail(event.target.value);
      return;
    }
    setPassword(event.target.value);
  };

  return (
    <div className='login'>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div>
          <label>username</label>
          <input
            id='email'
            type='text'
            value={email}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label>password</label>
          <input
            id='password'
            type='password'
            value={password}
            onChange={handleChange}
          ></input>
        </div>
        <button type='submit'>Login</button>
        <span>or</span>
        <button onClick={() => login()}>Signin with Google</button>
        <p>
          Dont have and account?<Link to='/signup'>sign up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
