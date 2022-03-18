import { render, screen } from '@testing-library/react';
import dogs from '../../mocks/dogs.json';
import { PetsContext } from '../Pets/Pets';
// components
import Cards from './Cards';

describe('Cards', () => {
  test('Should render (n) card components', async () => {
    render(
      <PetsContext.Provider
        value={{
          dogs,
          setDogs: () => {},
        }}
      >
        <Cards />
      </PetsContext.Provider>
    );
    const cards = await screen.findAllByRole('article');
    expect(cards.length).toBe(5);
  });
});
