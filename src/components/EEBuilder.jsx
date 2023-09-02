import { useState } from 'react';
import PropTypes from 'prop-types';
import './css/Builder.css'

function EEBuilder({ onInputChange, handleClear}) {
  const [experiences, setExperiences] = useState([{ years: '', diploma: '', schoolName: '', schoolLocation: '' }]);

  function newExperience() {
    setExperiences((prevExperiences) => [...prevExperiences, { years: '', diploma: '', schoolName: '', schoolLocation: '' }]);
  }

  return (
    <div className="CVBuilder">
      <h3>Educational Experience</h3>
      {experiences.map((experience, experienceIndex) => (
        <div key={experienceIndex} className="inputs">
          <input
            id={`years-${experienceIndex}`}
            placeholder="Years"
            // type="date"
            value={experience.years}
            onChange={(e) => onInputChange(experienceIndex, 'years', e.target.value)}
          ></input>
          <input
            id={`diploma-${experienceIndex}`}
            placeholder="Diploma"
            value={experience.diploma}
            onChange={(e) => onInputChange(experienceIndex, 'diploma', e.target.value)}
          ></input>
          <input
            id={`schoolName-${experienceIndex}`}
            placeholder="School Name"
            value={experience.schoolName}
            onChange={(e) => onInputChange(experienceIndex, 'schoolName', e.target.value)}
          ></input>
          <input
            id={`schoolLocation-${experienceIndex}`}
            placeholder="School Location"
            value={experience.schoolLocation}
            onChange={(e) => onInputChange(experienceIndex, 'schoolLocation', e.target.value)}
          ></input>
        </div>
      ))}

      <div className="builderButtons">
        <button onClick={() => handleClear()}>Clear</button>
        <button onClick={() => newExperience()}>Add Experience</button>
      </div>
    </div>
  )}

EEBuilder.propTypes = {
  onInputChange: PropTypes.func,
  handleClear: PropTypes.func,
};

export default EEBuilder;


