import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PetsContext } from '../../context/PetsContext';
import Card from './Card';
import dogs from '../../mocks/dogs.json';

// card props
const cardProps = {
  name: 'Lucy',
  phone: '111-111-1111',
  email: 'ryan@gmail.com',
  image: {
    url: 'https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    alt: 'golden retriever puppy',
  },
  favored: false,
  updateFavorite: () => {},
  index: 0,
};

const renderCardComponentWithProvider = (props) => {
  render(
    <PetsContext.Provider value={{ dogs, setDogs: () => {} }}>
      <Card {...props} />
    </PetsContext.Provider>
  );
};

describe('Card', () => {
  // test for name shown
  test('Should show name of dog', () => {
    renderCardComponentWithProvider(cardProps);
    // assert that the heading prop is in the document
    expect(screen.getByRole('heading', { name: /lucy/i })).toBeInTheDocument();
  });

  // test for number shown
  test('Should show number for dog', () => {
    renderCardComponentWithProvider(cardProps);
    // assert that the phone number text is in the doc
    expect(screen.getByText(/111-111-1111/i)).toBeInTheDocument();
  });

  // test for email shown
  test('Should show email for dog', () => {
    renderCardComponentWithProvider(cardProps);
    // assert that the email text is in the document
    expect(screen.getByText(/ryan@gmail.com/i)).toBeInTheDocument();
  });

  // test for image shown
  test('Should show image for dog with correct source', () => {
    renderCardComponentWithProvider(cardProps);
    // assert that the image is in the document
    expect(screen.getByAltText(/golden retriever puppy/i).src).toBe(
      cardProps.image.url
    );
  });

  describe('Heart', () => {
    // test for showing outlined heart
    test('Should show outlined heart', () => {
      renderCardComponentWithProvider(cardProps);

      expect(screen.queryByAltText(/heart filled/i)).not.toBeInTheDocument();
      expect(screen.getByAltText(/heart outline/i)).toBeInTheDocument();
    });

    // test for showing outlined heart
    test('Should show filled heart', () => {
      renderCardComponentWithProvider({ ...cardProps, favored: true });

      expect(screen.queryByAltText(/heart outline/i)).not.toBeInTheDocument();
      expect(screen.getByAltText(/heart filled/i)).toBeInTheDocument();
    });

    // test for toggling true and false
    test('Should toggle heart status', () => {
      renderCardComponentWithProvider(cardProps);
      // events
      userEvent.click(screen.getByRole('button'));
      // assert
      expect(screen.queryByAltText(/heart outline/i)).not.toBeInTheDocument();
      expect(screen.getByAltText(/heart filled/i)).toBeInTheDocument();
      // events
      userEvent.click(screen.getByRole('button'));
      // assert
      expect(screen.queryByAltText(/heart filled/i)).not.toBeInTheDocument();
      expect(screen.getByAltText(/heart outline/i)).toBeInTheDocument();
    });
  });
});
