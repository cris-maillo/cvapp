import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './css/Builder.css'

function PDBuilder({onInputChange}) {
  const [inputValue, setInputValue] = useState('');
  

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    onInputChange(e.target.value);
  };

    return (
      <div className='CVBuilder'>
          <div className='inputs'>
            <input placeholder='Full Name' value={inputValue} onChange={handleInputChange}></input>
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
    onInputChange: PropTypes.func
};
  
export default PDBuilder;