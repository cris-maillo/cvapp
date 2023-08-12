// import React from 'react';
import PropTypes from 'prop-types';
import './css/CVSection.css'

function PESection({title}) {
    return (
      <div className='CVSection'>
          <h2>{title}</h2>
          <div className='details'>
            <div>
                <p>2013 - 2019</p>
                <p>Job Title</p>
            </div>
            <div>
                <p>Company Name</p>
                <p>Company Location</p>
            </div>
            <p>Role Description</p>
          </div>
      </div>
    );
  }

PESection.propTypes = {
    title: PropTypes.string.isRequired,
};
  
export default PESection;