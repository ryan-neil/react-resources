// take in an array of objects and render them to the screen
import Card from '../Card/Card';
import './Cards.css';

const Cards = ({ dogs, setDogs }) => {
  // handle favorite toggle
  const updateFavorite = (idx, favored) => {
    const updatedDogs = [...dogs];
    // update the favored value of the indexed dog given to us with the favored status
    updatedDogs[idx].favored = favored;
    // update dogs array state
    setDogs(updatedDogs);
  };

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
          updateFavorite={updateFavorite}
          index={index}
        />
      ))}
    </div>
  );
};

export default Cards;
