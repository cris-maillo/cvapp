// import React from 'react';
import PropTypes from 'prop-types';
import './css/Builder.css'
import PEInputs from './PEInputs';

function PEBuilder({title}) {
    return (
      <div className='CVBuilder'>
          <h3>{title}</h3>
          <PEInputs/>
      </div>
    );
  }

PEBuilder.propTypes = {
    title: PropTypes.string.isRequired,
};
  
export default PEBuilder;