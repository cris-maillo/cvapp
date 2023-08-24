// import React from 'react';
import PropTypes from 'prop-types';
import './css/CVSection.css'
// import PDBuilder from "./PDBuilder";

function PDSection({name}) {

    return (
      <div className='CVSection'>
        <h2>{name}</h2>
          <div className='contactDetails'>
            <p>07869494911</p>
            <p>cristinamaillo.r@gmail.com</p>
            <p>London, UK</p>
          </div>
      </div>
    );
  }

PDSection.propTypes = {
    name: PropTypes.string,
};
  
export default PDSection;