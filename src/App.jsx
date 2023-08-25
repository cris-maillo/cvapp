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

  const handleDetailChange = (index, inputValue) => {
    const updatedDetails = details.map((detail, i) =>
      i === index ? inputValue : detail
    );
    setDetails(updatedDetails);
  };

  return (
    <div className='App'>
      <h2>CV Builder</h2>
      <div className='Content'>
        <div className='Builder'>
            <PDBuilder title="Personal Details" onInputChange={handleDetailChange}/>
            <EEBuilder title="Education"/>
            <PEBuilder title="Experience"/>
            <div className='builderButtons main'>
              <button>Clear All</button>
              <button>Download</button>
            </div>
        </div>
        <div className="CV">
          <PDSection title="Personal Information" name={details[0]} phoneNumber={details[1]} emailAddress={details[2]} location={details[3]}/>
          <EESection title="Education"/>
          <PESection title="Experience"/>
        </div>
      </div>
    </div>
  )
}

export default App
