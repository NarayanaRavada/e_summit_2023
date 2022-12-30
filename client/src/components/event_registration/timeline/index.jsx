import React from 'react';
import 'react-bootstrap';

import './timeline.styles.scss';

const Timeline = ({ timeline }) => {
  return (
    <div>
      <div className="d-flex flex-column align-items-center p-3">
        <div className="col-xs-10 col-xs-offset-1 px-md-5 px-lg-5">
          <ul className="timeline">
            <li className="timeline-item period">
              <div className="timeline-info"></div>
            </li>
            {timeline.map((el, idx) => (
              <li className="timeline-item" key={idx}>
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h3 className="timeline-title">{el.title}</h3>
                  <p>{el.info}</p>
                  <div className="d-flex flex-column flex-lg-row flex-md-row">
                    <p className="me-5 sm-col">
                      <span>Start-Date:</span> {el.start}
                    </p>
                    <p>
                      <span>End-Date:</span> {el.end}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
