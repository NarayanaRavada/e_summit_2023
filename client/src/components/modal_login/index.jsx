import React, { useEffect, useRef, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import { Link, useNavigate } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import { signinGoogle } from '../../redux/actions/auth';

import './modal_login.styles.scss';

const LoginModal = ({ show, handleClose }) => {
  const [data, setData] = useState({});
  const [errors, setErrors] = useState({});

  const didMount = useRef(false);
  const showErrors = useRef(false);
  const modalFirstFocus = useRef(null);

  console.log(data);

  useEffect(() => {
    isValid();
  }, [data]);

  useEffect(() => {
    modalFirstFocus.current?.focus();
  }, []);

  const setField = (field, value) => {
    setData({
      ...data,
      [field]: value,
    });
  };

  const isValid = (field, value) => {
    const { college, contact } = data;
    const newErrors = {};

    //contact number erros
    const contactre = /[0-9]{10}/;
    if (!contactre.test(contact)) {
      newErrors.contact = 'Enter a valid mobile number';
    } else if (contact.length !== 10) {
      newErrors.contact = 'Mobile number must contain 10 digits';
    }
    // college name erros
    if (!college || college === '') {
      newErrors.college = 'college name cannot be empty';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length !== 0;
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleGoogleLoginSuccess = (tokenResponse) => {
    const accessToken = tokenResponse.access_token;
    dispatch(signinGoogle(accessToken, navigate));
  };
  const login = useGoogleLogin({ onSuccess: handleGoogleLoginSuccess });

  const handleGoogleSignUp = (event) => {
    event.preventDefault();
    if (Object.keys(errors).length !== 0) return;
  };
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton className="text-white gradient-bg">
          <Modal.Title>E-Summit 2023</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex flex-column align-items-center">
            <Form onSubmit={handleGoogleSignUp}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>College/Institute Name</Form.Label>
                <Form.Control
                  placeholder="Enter college name"
                  ref={modalFirstFocus}
                  isValid={data.college}
                  isInvalid={
                    errors.college &&
                    data.college === '' &&
                    data.college != null
                  }
                  onChange={(event) =>
                    setField('college', event.target.value.trim())
                  }
                />
                <Form.Control.Feedback type="invalid">
                  {errors.college}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Contact Number</Form.Label>
                <Form.Control
                  type="tel"
                  isValid={data.contact}
                  isInvalid={errors.contact && data.contact}
                  placeholder="Enter contact number"
                  onChange={(event) =>
                    setField('contact', event.target.value.trim())
                  }
                />
                <Form.Control.Feedback type="invalid" className="animatedEntry">
                  {errors.contact}
                </Form.Control.Feedback>
              </Form.Group>
              <button type="submit" className="login-with-google-btn mb-2">
                Sign up with Google
              </button>
              <p className="tnc">
                * By Signing up, you agree our <Link>Terms & Conditions</Link>
              </p>
            </Form>
            or
            <button type="button" className="login-with-google-btn my-2">
              Sign in with Google
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default LoginModal;
