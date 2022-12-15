import { AUTH } from '../constants/actionTypes';
import * as api from '../../utils/api';

export const loadUser = () => async dispatch => {
  const localUser = JSON.parse(localStorage.getItem('user_info'));

  if (localUser) {
    dispatch({ type: AUTH, data: localUser });
  }
};

export const signin = (formData, navigate) => async dispatch => {
  //login user
  try {
    const { user } = api.signIn(formData);
    dispatch({ type: AUTH, user });
    navigate('/');
  } catch (error) {
    console.log(error);
  }
};

export const signinGoogle = (accessToken, navigate) => async dispatch => {
  try {
    // login user
    const { data } = await api.signInGoogle(accessToken);

    dispatch({ type: AUTH, data });
    navigate('/');
  } catch (err) {
    console.log(err);
  }
};

export const signup = (formData, navigate) => async dispatch => {
  try {
    // signup user
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });
    navigate('/');
  } catch (err) {
    console.log(err);
  }
};

export const signupGoogle = (accessToken, navigate) => async dispatch => {
  try {
    // signup user

    const { data } = await api.signUpGoogle(accessToken);

    dispatch({ type: AUTH, data });
    navigate('/');
  } catch (err) {
    console.log(err);
  }
};
