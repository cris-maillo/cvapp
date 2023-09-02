import { useState } from 'react';

import './App.css'
import './components/css/Builder.css'

import DisplaySection from './components/DisplaySection';
import PDBuilder from "./components/PDBuilder";
import EEBuilder from "./components/EEBuilder";
import PEBuilder from "./components/PEBuilder";

function App() {
  const [data, setData] = useState({
    name: "John Doe",
    phoneNumber: "123-456-7890",
    email: "johndoe@example.com",
    location: "London, UK",
    educationalDetails: [
        {
        date: "23/07/1999",
        diploma: "Bachelor's Degree",
        institution: "University A",
        location: "City A",
        },
        {
        date: "23/07/1999",
        diploma: "Master's Degree",
        institution: "University B",
        location: "City B",
        },
    ],
    professionalDetails: [
        {
        dates: "23/07/1999",
        company: "Company X",
        role: "Software Engineer",
        location: "City X",
        description: "Was very cool here and did very cool stuff lorem ipsum"
        },
        {
        dates: "23/07/1999",
        company: "Company Y",
        role: "Product Manager",
        location: "City Y",
        description: "Was very cool here and did very cool stuff lorem ipsum"
        },
    ],
  });

  const handleChange = (propertyName, newValue) => {
    setData((prevData) => ({
      ...prevData,
      [propertyName]: newValue,
    }));
  };

  const handleClear = (section) => {
    switch (section) {
      case 'personalDetails':
        setData((prevData) => ({
          ...prevData,
          name: '',
          phoneNumber: '',
          email: '',
          location: '',
        }));
        break;
      case 'educationDetails':
        setData((prevData) => ({
          ...prevData,
          name: '',
          phoneNumber: '',
          email: '',
          location: '',
        }));
        break;
      case 'professionalDetails':
        setData((prevData) => ({
          ...prevData,
          name: '',
          phoneNumber: '',
          email: '',
          location: '',
        }));
        break;
  
      default:
        break;
    }
  };
  

  return (
    <div className='Content'>
      <div className='Builder'>
        <PDBuilder onInputChange={handleChange} handleSectionClear={() => handleClear('personalDetails')}/>
        <EEBuilder onInputChange={handleChange} handleSectionClear={() => handleClear('educationDetails')}/>
        <PEBuilder onInputChange={handleChange} handleSectionClear={() => handleClear('professionalDetails')}/>
        <div className='builderButtons main'>
            <button>Clear All</button>
            <button>Download</button>
        </div>
      </div>
      <div className='CV'>
        <DisplaySection data={data}/>
      </div>
    </div>
  );
}

export default App
