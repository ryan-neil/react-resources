import { render, screen } from '@testing-library/react';
import Card from './Card';

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
};

describe('Card', () => {
  // test for name shown
  test('should show name of dog', () => {
    render(<Card {...cardProps} />);

    // assert that the heading prop is in the document
    expect(
      screen.getByRole('heading', {
        name: /lucy/i,
      })
    ).toBeInTheDocument();
  });

  // test for number shown
  test('should show number for dog', () => {
    render(<Card {...cardProps} />);

    // assert that the phone number text is in the doc
    expect(screen.getByText(/111-111-1111/i)).toBeInTheDocument();
  });

  // test for email shown
  test('should show email for dog', () => {
    render(<Card {...cardProps} />);

    // assert that the email text is in the document
    expect(screen.getByText(/ryan@gmail.com/i)).toBeInTheDocument();
  });

  // test for image shown
  test('should show image for dog with correct source', () => {
    render(<Card {...cardProps} />);

    // assert that the image is in the document
    expect(screen.getByAltText(/golden retriever puppy/i).src).toBe(
      cardProps.image.url
    );
  });
});
