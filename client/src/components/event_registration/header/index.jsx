import React from 'react';

import './header.styles.scss';

const Header = ({ event }) => {
  return (
    <div className='bg mb-5'>
      <div>
        <svg>
          <rect x='0' y='0' fill='none' width='100%' height='100%' />
        </svg>
        <div className='reg-title'>{event}</div>
      </div>
    </div>
  );
};

export default Header;
