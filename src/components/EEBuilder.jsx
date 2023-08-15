import { useState } from 'react';
import PropTypes from 'prop-types';
import './css/Builder.css'
import EEInputs from './EEInputs';

function EEBuilder({title}) {
  const [experienceCount, setExperienceCount] = useState(1); // Initialize with one experience

  function newExperience() {
    setExperienceCount(prevCount => prevCount + 1); // Increment experience count
  }
    return (
      <div className='CVBuilder'>
          <h3>{title}</h3>
          {[...Array(experienceCount)].map((_, index) => (
            <EEInputs key={index} />
          ))}
          <div className='builderButtons'>
            <button>Clear</button>
            <button onClick={() => newExperience()}>Add Experience</button>
          </div>
      </div>
    );
  }

EEBuilder.propTypes = {
  title: PropTypes.string.isRequired,
};
  
export default EEBuilder;