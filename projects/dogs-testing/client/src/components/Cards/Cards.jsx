import { useContext } from 'react';
import { PetsContext } from '../../context/PetsContext';
import Card from '../Card/Card';
import './Cards.css';

const Cards = () => {
  const { dogs } = useContext(PetsContext);

  return (
    <div className="pet-cards-container">
      {dogs.map((dog, index) => (
        <Card
          key={dog.id}
          name={dog.name}
          phone={dog.phone}
          email={dog.email}
          image={{
            url: dog.image.url,
            alt: dog.image.alt,
          }}
          favored={dog.favored}
          index={index}
        />
      ))}
    </div>
  );
};

export default Cards;
