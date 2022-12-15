import React from 'react';
import { useParams } from 'react-router-dom';
import About from '../components/event_registration/about';
import Timeline from '../components/event_registration/timeline';
import Header from '../components/event_registration/header';

import { competitions } from '../assets/data/comeptitons';
import InfoBar from '../components/event_registration/info_bar';

const EventRegistration = () => {
  const { event } = useParams();
  const eventData = competitions[event];
  return (
    <div className='d-flex flex-column align-items-center w-100'>
      <Header event={event} />
      <InfoBar {...eventData} />
      <Timeline {...eventData} />
      <About {...eventData} />
    </div>
  );
};

export default EventRegistration;
