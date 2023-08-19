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
          <EEBuilder title="Education"/>
          <PEBuilder title="Experience"/>
          <div className='builderButtons main'>
            <button>Clear All</button>
            <button>Download</button>
          </div>
      </div>
    );
  }

// Builder.propTypes = {
//     title: PropTypes.string.isRequired,
// };
  
export default Builder;