// import React from 'react';
import PropTypes from 'prop-types';
import './css/Builder.css'

function PDBuilder({title}) {
    return (
      <div className='CVBuilder'>
          <h3>{title}</h3>
          <div className='inputs'>
            <input placeholder='Full Name'></input>
            <input placeholder='Phone Number' type='tel'></input>
            <input placeholder='Email' type='email'></input>
            <input placeholder='Location'></input>
          </div>
          <div className='builderButtons'>
            <button>Clear</button>
            <button>Add Experience</button>
          </div>
      </div>
    );
  }

PDBuilder.propTypes = {
    title: PropTypes.string.isRequired,
};
  
export default PDBuilder;