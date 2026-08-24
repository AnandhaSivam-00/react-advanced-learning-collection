import PropTypes from 'prop-types'
import '../index.css';

const Die = ({ isClicked = false, holdDie = () => {}, id, dieNumber }) => {
    const styles = {
        backgroundColor: isClicked ? "#59E391": "gray"
    }

  return (
    <button 
        className='d-inline-flex m-0 btn rounded text-white shadow die-outer'
        style={styles}
        onClick={() => holdDie(id)}
        aria-label={`Die with a value of ${dieNumber},
        click to ${isClicked ? 'unfreeze' : 'freeze'} this die.`}
        aria-pressed={isClicked} // Improving the accessablity of the button
    >
        {dieNumber}
    </button>
  )
}

Die.propTypes = {
  isClicked: PropTypes.bool,
  holdDie: PropTypes.func,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  dieNumber: PropTypes.number,
};

export default Die