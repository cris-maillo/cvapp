import PropTypes from 'prop-types';
import './css/CVSection.css'

function EESection({title, date, diploma, school, location}) {
    return (
      <div className='CVSection'>
          <h2>{title}</h2>
          <div className='details'>
            <div>
                <p>{date}</p>
                <p>{diploma}</p>
            </div>
            <div>
                <p>{school}</p>
                <p>{location}</p>
            </div>
          </div>
      </div>
    );
  }

EESection.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string,
    diploma: PropTypes.string,
    school: PropTypes.string,
    location: PropTypes.string
};
  
export default EESection;