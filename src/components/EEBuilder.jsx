// import React from 'react';
import PropTypes from 'prop-types';
import './css/Builder.css'

function EEBuilder({title}) {
    return (
      <div className='CVBuilder'>
          <h2>{title}</h2>
          <div className='inputs'>
            <input placeholder='Years' type='date'></input>
            <input placeholder='Diploma'></input>
            <input placeholder='School Name'></input>
            <input placeholder='School Location'></input>
          </div>
      </div>
    );
  }

EEBuilder.propTypes = {
    title: PropTypes.string.isRequired,
};
  
export default EEBuilder;