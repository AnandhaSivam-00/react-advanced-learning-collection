import PropTypes from 'prop-types';
import { FlightIcon, LocationIcon } from '../../assets/Icons';

import './index.css';

const dataObject = [
  {
    id: 1,
    title: 'Mount Fuji',
    country: 'Japan',
    maplink: 'https://maps.app.goo.gl/kNprN6LxCtGryTT46',
    img: {
      src: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?auto=format&fit=crop&w=800&q=80',
      alt: 'mount fuji image'
    },
    description: 'Mount Fuji is the tallest mountain in Japan and a symbol of national pride and natural beauty. Known for its near-perfect symmetry, it attracts tourists and climbers from around the world.'
  },
  {
    id: 2,
    title: 'Eiffel Tower',
    country: 'France',
    maplink: 'https://goo.gl/maps/9Qy1pz7qFbzW4ucP8',
    img: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg',
      alt: 'Eiffel Tower image'
    },
    description: 'The Eiffel Tower is a wrought-iron lattice tower in Paris, France. It is one of the most recognizable structures in the world and a global cultural icon of France.'
  },
  {
    id: 3,
    title: 'Statue of Liberty',
    country: 'USA',
    maplink: 'https://goo.gl/maps/Hc8RFF5z9jQ2',
    img: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Statue_of_Liberty_7.jpg',
      alt: 'Statue of Liberty image'
    },
    description: 'The Statue of Liberty is a colossal neoclassical sculpture on Liberty Island in New York Harbor, United States. It represents freedom and democracy.'
  },
  {
    id: 4,
    title: 'Great Wall of China',
    country: 'China',
    maplink: 'https://goo.gl/maps/z9G9XRcT4FJj8W5A6',
    img: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/1/10/20090529_Great_Wall_8185.jpg',
      alt: 'Great Wall of China image'
    },
    description: 'The Great Wall of China is an ancient series of walls and fortifications, spanning across northern China and offering breathtaking views.'
  },
  {
    id: 5,
    title: 'Colosseum',
    country: 'Italy',
    maplink: 'https://goo.gl/maps/VWJ9sLL1zX22',
    img: {
      src: 'https://images.unsplash.com/photo-1552432552-06c0b0a94dda?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fENvbG9zc2V1bXxlbnwwfHwwfHx8MA%3D%3D',
      alt: 'Colosseum image'
    },
    description: 'The Colosseum is an oval amphitheatre in the centre of Rome, Italy, known for hosting public spectacles and gladiatorial contests in ancient times.'
  },
  {
    id: 6,
    title: 'Taj Mahal',
    country: 'India',
    maplink: 'https://goo.gl/maps/2Q4DSv3pReL2',
    img: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg',
      alt: 'Taj Mahal image'
    },
    description: 'The Taj Mahal is an ivory-white marble mausoleum in Agra, India, renowned for its stunning architecture and rich history.'
  },
  {
    id: 7,
    title: 'Christ the Redeemer',
    country: 'Brazil',
    maplink: 'https://goo.gl/maps/PwD8sFTWemV2',
    img: {
      src: 'https://images.unsplash.com/photo-1700677866588-95226be09b39?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q2hyaXN0JTIwdGhlJTIwUmVkZWVtZXJ8ZW58MHx8MHx8fDA%3D',
      alt: 'Christ the Redeemer image'
    },
    description: 'Christ the Redeemer is an Art Deco statue of Jesus Christ in Rio de Janeiro, Brazil, symbolizing peace and welcoming visitors from around the globe.'
  }
];

const Header = () => {
    return (
        <header className='d-flex justify-content-center align-items-center mb-3 travel-header'>
            <FlightIcon width={"3rem"} height={"3rem"} />
            <h1 className='mx-4'>Travel Journal</h1>
        </header>
    );
};

const ArticleCards = ({ img = {}, country = '', maplink = '', title = '', description = '' }) => {
  return (
    <div className="card shadow mb-3">
      <div className='row g-0 align-items-center'>
        <div className='col-12 col-md-4 h-100'>
          <img 
            src={img?.src} 
            alt={img?.alt}
            className='rounded-start w-100 h-100'
            style={{ objectFit: 'cover', height: '100%', minHeight: '180px', maxHeight: '250px' }}
          />
        </div>
        <div className="col-12 col-md-8">
          <div className='card-body'>
            <div className='card-title d-flex justify-content-between align-items-center'>
              <h5 className='align-items-start d-flex align-items-center gap-1'><LocationIcon width={25} height={20} />{country}</h5>
              <a href={maplink} target='_blank' rel='noopener noreferrer'>View on GMap</a>
            </div>
            <h3>{title}</h3>
            <p className='card-text'>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

ArticleCards.propTypes = {
  img: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
  }),
  country: PropTypes.string,
  maplink: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

const TravelJournal = () => {
  return (
    <div className="travel-journal-container">
      <Header />
      <div className="container" style={{ maxWidth: '850px' }}>
        { dataObject.map((data) => (
          <ArticleCards 
            key={data.id} 
            {...data} 
          />
        )) }
      </div>
    </div>
  );
};

export default TravelJournal;