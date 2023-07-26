// import React from 'react';
// import PropTypes from 'prop-types';

import '../App.css'
import './css/Builder.css'
import Section from "./Section";

function Builder() {
    return (
      <div className='Builder'>
          <Section title="Personal Details"/>
          <Section title="Educational Experience"/>
          <Section title="Professional Experience"/>
          <button>Clear</button>
          <button>Download</button>
      </div>
    );
  }

// Builder.propTypes = {
//     title: PropTypes.string.isRequired,
// };
  
export default Builder;