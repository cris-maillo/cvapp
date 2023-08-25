// import React from 'react';
import PropTypes from 'prop-types';
import './css/CVSection.css'
// import PDBuilder from "./PDBuilder";

function PDSection({name, phoneNumber, emailAddress, location}) {

    return (
      <div className='CVSection'>
        <h2>{name}</h2>
          <div className='contactDetails'>
            <p>{phoneNumber}</p>
            <p>{emailAddress}</p>
            <p>{location}</p>
          </div>
      </div>
    );
  }

PDSection.propTypes = {
    name: PropTypes.string,
    phoneNumber: PropTypes.string,
    emailAddress: PropTypes.string,
    location: PropTypes.string
};
  
export default PDSection;