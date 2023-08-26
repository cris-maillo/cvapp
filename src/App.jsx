import { useState } from 'react'
import './App.css'
import './components/css/Builder.css'
import './components/css/CV.css';
import PDBuilder from "./components/PDBuilder";
import EEBuilder from "./components/EEBuilder";
import PEBuilder from "./components/PEBuilder";
import PDSection from "./components/PDSection";
import EESection from "./components/EESection";
import PESection from "./components/PESection";

function App() {
  const [details, setDetails] = useState(['Full Name', '999-999-999', 'email@address.com', 'City, Country'])
  const [education, setEducation] = useState(['01/01/2023', 'MSc Computer Science', 'University', 'City, Country'])

  const handleDetailChange = (index, inputValue) => {
    const updatedDetails = details.map((detail, i) =>
      i === index ? inputValue : detail
    );
    setDetails(updatedDetails);
  };

  const handleEducationChange = (index, inputValue) => {
    const updatedEducation = education.map((education, i) =>
      i === index ? inputValue : education
    );
    setEducation(updatedEducation);
  };

  return (
    <div className='App'>
      <h2>CV Builder</h2>
      <div className='Content'>
        <div className='Builder'>
            <PDBuilder title="Personal Details" onInputChange={handleDetailChange}/>
            <EEBuilder title="Education" onInputChange={handleEducationChange}/>
            <PEBuilder title="Experience"/>
            <div className='builderButtons main'>
              <button>Clear All</button>
              <button>Download</button>
            </div>
        </div>
        <div className="CV">
          <PDSection title="Personal Information" name={details[0]} phoneNumber={details[1]} emailAddress={details[2]} location={details[3]}/>
          <EESection title="Education" date={education[0]} diploma={education[1]} school={education[2]} location={education[3]}/>
          <PESection title="Experience"/>
        </div>
      </div>
    </div>
  )
}

export default App
