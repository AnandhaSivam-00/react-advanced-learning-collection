import PropTypes from 'prop-types'
import clsx from 'clsx'

const Card = ({ type = '', imageUrl = '', name = '', price = 0 }) => {
  const className = clsx({
    'badge-simple': type === 'simple',
    'badge-luxury': type === 'luxury',
    'badge-rugged': type === 'rugged'
  }) 

  return (
    <div className='card shadow'>
        <img 
            src={imageUrl} 
            className='card-img-top rounded' 
            alt={`Image of ${name}`}
        />
        <div className='card-body'>
            <div className='row'>
                <div className='col-9'>
                    <h5 className='card-title'>{name}</h5>
                </div>
                <div className='col-3'>
                    <div className='float-end'>
                        <span className='d-block' style={{fontWeight: "600", fontSize: "20px"}}>${price}</span>
                        <span className='d-block float-end'>/day</span>
                    </div>
                </div>
            </div>
            <span className={`badge ${className} text-black`}>{
                type === 'simple' ? "Simple" : type === 'luxury' ? "Luxury" : 
                type === 'rugged' ? "Rugged" : null
            }</span>
        </div>
    </div>
  )
}

Card.propTypes = {
  type: PropTypes.string,
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

export default Card