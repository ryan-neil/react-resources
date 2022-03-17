// take in an array of objects and render them to the screen
import Card from '../Card/Card';
import './Cards.css';

const Cards = ({ dogs, isLoading, hasError }) => {
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (hasError) {
    return <p>Error fetching data ({hasError}).</p>;
  }

  return (
    <div className="pet-cards-container">
      {dogs.map((dog) => (
        <Card
          key={dog.id}
          id={dog.id}
          name={dog.name}
          phone={dog.phone}
          email={dog.email}
          image={{
            url: dog.image.url,
            alt: dog.image.alt,
          }}
          favored={dog.favored}
          color={dog.color}
          gender={dog.gender}
        />
      ))}
    </div>
  );
};

export default Cards;
