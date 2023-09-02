import PropTypes from 'prop-types';
import './css/Builder.css'
import { useState } from 'react';

function PDBuilder({onInputChange, handleSectionClear}) {

  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    location: '',
  });

  const handleInputChange = (propertyName, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [propertyName]: value,
    }));
  };

  const handleInputClear = () => {
    setFormData({
      name: '',
      phoneNumber: '',
      email: '',
      location: '',
    });
  };

  return (
    <div className='CVBuilder'>
      <h3>Personal Details</h3>
      <div className='inputs'>
        <input placeholder='Full Name' value={formData.name} onChange={(e) => {
          handleInputChange('name', e.target.value)
          onInputChange('name', e.target.value)}
        }
        ></input>
        <input placeholder='Phone Number' value={formData.phoneNumber} type='tel' onChange={(e) => {
          handleInputChange('phoneNumber', e.target.value)
          onInputChange('phoneNumber', e.target.value)}
        }></input>
        <input placeholder='Email' value={formData.email} type='email' onChange={(e) => {
          handleInputChange('email', e.target.value)
          onInputChange('email', e.target.value)}
        }></input>
        <input placeholder='Location' value={formData.location} onChange={(e) => {
          handleInputChange('location', e.target.value)
          onInputChange('location', e.target.value)}
        }></input>
      </div>
      <div className='builderButtons'>
        <button onClick={() => {
          handleInputClear()
          handleSectionClear()
          }}>
            Clear
        </button>
      </div>
    </div>
  );
  }

PDBuilder.propTypes = {
    onInputChange: PropTypes.func,
    handleSectionClear: PropTypes.func
};
  
export default PDBuilder;