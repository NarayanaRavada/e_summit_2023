import React from 'react';

import './info_bar.styles.scss';

const InfoBar = () => {
  return (
    <div className="d-flex bg-light flex-md-row flex-column rounded border mb-5 px-4">
      <div className="d-flex reg-d p-2">
        <i className="bi bi-calendar2-x"></i>
        <h6 className="mx-3 d-flex flex-column">
          <strong>Registration Deadline</strong> March 12, 2022
        </h6>
      </div>
      <div className="d-flex align-items-center">
        <i className="bi bi-people-fill"></i>
        <h6 className="mx-3">Individual Participation</h6>
      </div>
      <div className="d-flex align-items-center">
        <i className="bi bi-currency-rupee"></i>
        <h6 className="mx-3">Free Participation</h6>
      </div>
    </div>
  );
};

export default InfoBar;
