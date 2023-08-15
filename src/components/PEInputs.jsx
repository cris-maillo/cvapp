// import React from 'react';
// import PropTypes from 'prop-types';
import './css/Builder.css'

function PEInputs() {
    return (
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
    );
  }

// PEInputs.propTypes = {
//     title: PropTypes.string.isRequired,
// };
  
export default PEInputs;