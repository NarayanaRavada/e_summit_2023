import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './globalStyle.css';

// import Home from './pages/Home';
import Login from './pages/Login';
import EventRegistration from './pages/event_registration';
import SignupPage from './pages/Signup';

import Navbaar from './layout/Navbar';

function App() {
  return (
    <div className='App'>
      <Navbaar />
      <Routes>
        {/* <Route element={<Home />} path='/' /> */}
        <Route element={<EventRegistration />} path='/events/:event' />
        <Route element={<Login />} path='/login' />
        <Route element={<SignupPage />} path='/signup' />
      </Routes>
    </div>
  );
}

export default App;
