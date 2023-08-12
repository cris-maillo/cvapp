// import React from 'react';
import PropTypes from 'prop-types';
import './css/Builder.css'

function PDBuilder({title}) {
    return (
      <div className='CVBuilder'>
          <h2>{title}</h2>
          <div className='inputs'>
            <input placeholder='Full Name'></input>
            <input placeholder='Phone Number' type='tel'></input>
            <input placeholder='Email' type='email'></input>
            <input placeholder='Location'></input>
          </div>
      </div>
    );
  }

PDBuilder.propTypes = {
    title: PropTypes.string.isRequired,
};
  
export default PDBuilder;