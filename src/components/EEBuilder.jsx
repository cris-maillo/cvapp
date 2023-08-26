import { useState } from 'react';
import PropTypes from 'prop-types';
import './css/Builder.css'

function EEBuilder({title, onInputChange}) {
  const [experienceCount, setExperienceCount] = useState(1);

  function newExperience() {
    setExperienceCount(prevCount => prevCount + 1);
  }
  return (
    <div className='CVBuilder'>
        <h3>{title}</h3>
        {[...Array(experienceCount)].map((_, index) => (
          <div key={index} className='inputs'>
                <input placeholder='Years' type='date' onChange={(e) => onInputChange(0, e.target.value)}></input>
                <input placeholder='Diploma' onChange={(e) => onInputChange(1, e.target.value)}></input>
                <input placeholder='School Name' onChange={(e) => onInputChange(2, e.target.value)}></input>
                <input placeholder='School Location' onChange={(e) => onInputChange(3, e.target.value)}></input>
          </div>
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
  onInputChange: PropTypes.func
};
  
export default EEBuilder;

