// import React from 'react';
import PropTypes from 'prop-types';
import './css/Builder.css'

function PEBuilder({title}) {
    return (
      <div className='CVBuilder'>
          <h2>{title}</h2>
          <div className='inputs'>
            <div>
                <input placeholder='Years' type='date'></input>
                <input placeholder='Job Title'></input>
            </div>
            <div>
                <input placeholder='Company Name'></input>
                <input placeholder='Company Location'></input>
            </div>
            <div>
                <textarea placeholder='Role Description'></textarea>
            </div>
          </div>
      </div>
    );
  }

PEBuilder.propTypes = {
    title: PropTypes.string.isRequired,
};
  
export default PEBuilder;