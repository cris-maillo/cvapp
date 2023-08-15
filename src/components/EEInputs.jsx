// import React from 'react';
// import PropTypes from 'prop-types';
import './css/Builder.css'

function EEInputs() {
    return (
        <div className='inputs'>
            <input placeholder='Years' type='date'></input>
            <input placeholder='Diploma'></input>
            <input placeholder='School Name'></input>
            <input placeholder='School Location'></input>
        </div>
    );
  }

// EEBuilder.propTypes = {
//     title: PropTypes.string.isRequired,
// };
  
export default EEInputs;