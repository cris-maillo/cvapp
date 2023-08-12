// import React from 'react';
// import PropTypes from 'prop-types';

import './css/Builder.css'
import PDBuilder from "./PDBuilder";
import EEBuilder from "./EEBuilder";
import PEBuilder from "./PEBuilder";

function Builder() {
    return (
      <div className='Builder'>
          <PDBuilder title="Personal Details"/>
          <EEBuilder title="Educational Experience"/>
          <PEBuilder title="Professional Experience"/>
          <div className='builderButtons'>
            <button>Clear</button>
            <button>Download</button>
          </div>
      </div>
    );
  }

// Builder.propTypes = {
//     title: PropTypes.string.isRequired,
// };
  
export default Builder;