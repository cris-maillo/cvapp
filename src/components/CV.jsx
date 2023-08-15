// import React from 'react';
// import PropTypes from 'prop-types';

import PDSection from "./PDSection";
import EESection from "./EESection";
import PESection from "./PESection";
import './css/CV.css'

function CV() {
    return (
      <div className="CV">
        <PDSection title="Personal Information"/>
        <EESection title="Education"/>
        <PESection title="Experience"/>
      </div>
    );
  }

// CV.propTypes = {
//     title: PropTypes.string.isRequired,
// };
  
export default CV;