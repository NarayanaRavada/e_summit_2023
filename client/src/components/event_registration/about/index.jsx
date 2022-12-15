import React from 'react';

const About = ({ guidelines, submissionformat, themes }) => {
  return (
    <div className='d-flex justify-content-center px-lg-5 py-lg-5 py-md-5 px-sm-3 px-xs-3 bg-light w-100'>
      <div className='w-70 px-5 py-3 border'>
        <h2>GuideLines</h2>
        {guidelines && (
          <ul className='w-70 mb-4'>
            {guidelines.map((el, idx) => (
              <li key={idx}>{el}</li>
            ))}
          </ul>
        )}
        <h2>Submission Formats</h2>
        {submissionformat && (
          <ul className='w-70 mb-4'>
            {submissionformat.map((el, idx) => (
              <li key={idx}>{el}</li>
            ))}
          </ul>
        )}
        <h2>Themes</h2>
        {themes && (
          <ul className='w-70 mb-4'>
            {themes.map((el, idx) => (
              <li key={idx}>{el}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default About;
