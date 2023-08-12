// import React from 'react';
import PropTypes from 'prop-types';
import './css/CVSection.css'

function EESection({title}) {
    return (
      <div className='CVSection'>
          <h2>{title}</h2>
          <div className='details'>
            <div>
                <p>2013 - 2019</p>
                <p>Title of Education</p>
            </div>
            <div>
                <p>School Name</p>
                <p>Location</p>
            </div>
          </div>
      </div>
    );
  }

EESection.propTypes = {
    title: PropTypes.string.isRequired,
};
  
export default EESection;