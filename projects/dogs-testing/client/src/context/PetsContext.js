import { createContext } from 'react';

export const PetsContext = createContext({
  dogs: [],
  setDogs: () => {},
});
