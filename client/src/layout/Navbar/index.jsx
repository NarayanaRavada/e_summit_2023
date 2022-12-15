import React from 'react';
import './navbar.styles.scss';
import logo from '../../assets/images/navbar/logo.png';
import LoginModal from '../../components/modal_login';
import { useState } from 'react';

const Naavbar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='nav'>
      <img className='logo' src={logo} alt='logo' />
      <button className='btn border border-dark' onClick={handleShow}>
        Login
      </button>
      <LoginModal
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
      />
    </div>
  );
};

export default Naavbar;
