import { useState, useContext } from 'react';
import { PetsContext } from '../../context/PetsContext';
import './Card.css';
import heartFilled from '../../svgs/heartFilled.svg';
import heartOutline from '../../svgs/heartOutline.svg';

const Card = ({ name, phone, email, image, favored, index }) => {
  const { dogs, setDogs } = useContext(PetsContext);
  const [isFavored, setIsFavored] = useState(favored);

  // handle toggle favorite
  const toggleFavored = () => {
    updateFavorite(index, !isFavored);
    setIsFavored(!isFavored);
  };

  // handle favorite toggle
  const updateFavorite = (idx, favored) => {
    const updatedDogs = [...dogs];
    // update the favored value of the indexed dog given to us with the favored status
    updatedDogs[idx].favored = favored;
    // update dogs array state
    setDogs(updatedDogs);
  };

  return (
    <article className="card">
      <div className="card-header">
        <img src={image.url} alt={image.alt} className="card-img" />
        <button className="heart" onClick={toggleFavored}>
          {isFavored ? (
            <img src={heartFilled} alt="heart filled" />
          ) : (
            <img src={heartOutline} alt="heart outline" />
          )}
        </button>
      </div>
      <div className="card-content">
        <h3>{name}</h3>
        <p>{phone}</p>
        <p>{email}</p>
      </div>
    </article>
  );
};

// set our default props
Card.defaultProps = {
  name: 'Lucy',
  phone: '111-111-1111',
  email: 'ryan@gmail.com',
  image: {
    url: 'https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    alt: 'golden retriever puppy',
  },
  favored: false,
};

export default Card;
