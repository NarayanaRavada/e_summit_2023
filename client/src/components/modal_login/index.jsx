import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import { useGoogleLogin } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import { signinGoogle } from '../../redux/actions/auth';

import './modal_login.styles.scss';

const LoginModal = ({ show, handleClose }) => {
  const handleSignUp = event => {
    event.preventDefault();
  };
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
      >
        <Modal.Header closeButton className='text-white gradient-bg'>
          <Modal.Title>E-Summit 2023</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='d-flex flex-column align-items-center'>
            <Form onSubmit={handleSignUp}>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>College/Institute Name</Form.Label>
                <Form.Control type='email' placeholder='Enter email' />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Contact Number</Form.Label>
                <Form.Control type='tel' placeholder='Enter email' />
              </Form.Group>

              <Form.Group className='mb-3' controlId='formBasicCheckbox'>
                <Form.Check type='checkbox' label='Check me out' />
              </Form.Group>
              <button type='submit' class='login-with-google-btn mb-2'>
                Sign up with Google
              </button>
            </Form>
            or
            <button type='button' class='login-with-google-btn mt-2'>
              Sign in with Google
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default LoginModal;
