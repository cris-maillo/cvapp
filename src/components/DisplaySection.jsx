import PropTypes from 'prop-types';
import './css/Builder.css';

function DisplaySection({data}) {
  if (!data) {
    return <div>No data available</div>;
  }
  return (
    <div className='CV'>
      <div>
        <h2>{data.name}</h2>
        <div className='contactDetails'>
          <p>{data.phoneNumber}</p>
          <p>{data.email}</p>
          <p>{data.location}</p>
        </div>
      </div>
      <div>
        <h2>Educational Details</h2>
        {Object.values(data.educationalDetails).map((data, index) => (
          <div key={index} className='details'>
            <div>
                <p>{data.date}</p>
                <p>{data.diploma}</p>
            </div>
            <div>
                <p>{data.school}</p>
                <p>{data.location}</p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <h2>Professional Details</h2>
        {Object.values(data.professionalDetails).map((data, index) => (
          <div key={index} className='details'>
            <div>
              <p>{data.dates}</p>
              <p>{data.role}</p>
            </div>
            <div>
              <p>{data.company}</p>
              <p>{data.location}</p>
            </div>
            <p>{data.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

DisplaySection.propTypes = {
  data: PropTypes.object, 
};

export default DisplaySection;