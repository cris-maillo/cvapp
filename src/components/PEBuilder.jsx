import { useState } from 'react';
import PropTypes from 'prop-types';
import './css/Builder.css'
import PEInputs from './PEInputs';

function PEBuilder({title}) {
  const [experienceCount, setExperienceCount] = useState(1);

  function newExperience() {
    setExperienceCount(prevCount => prevCount + 1);
  }
    return (
      <div className='CVBuilder'>
          <h3>{title}</h3>
          {[...Array(experienceCount)].map((_, index) => (
            <PEInputs key={index} />
          ))}
          <div className='builderButtons'>
            <button>Clear</button>
            <button onClick={() => newExperience()}>Add Experience</button>
          </div>
      </div>
    );
  }

PEBuilder.propTypes = {
    title: PropTypes.string.isRequired,
};
  
export default PEBuilder;