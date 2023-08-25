import PropTypes from 'prop-types';
import './css/Builder.css'

function PDBuilder({onInputChange}) {
    return (
      <div className='CVBuilder'>
          <div className='inputs'>
            <input placeholder='Full Name' onChange={(e) => onInputChange(0, e.target.value)}></input>
            <input placeholder='Phone Number' type='tel' onChange={(e) => onInputChange(1, e.target.value)}></input>
            <input placeholder='Email' type='email' onChange={(e) => onInputChange(2, e.target.value)}></input>
            <input placeholder='Location' onChange={(e) => onInputChange(3, e.target.value)}></input>
          </div>
          <div className='builderButtons'>
            <button>Clear</button>
          </div>
      </div>
    );
  }

PDBuilder.propTypes = {
    title: PropTypes.string.isRequired,
    onInputChange: PropTypes.func
};
  
export default PDBuilder;