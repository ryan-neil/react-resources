import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import mock server workers package
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import mockData from '../../mocks/dogs.json';
// components
import Pets from './Pets';

// setup mock server
const server = setupServer(
  // specify the endpoint
  rest.get('http://localhost:9001/dogs', (req, res, context) => {
    // return the status code and our mock json data
    return res(context.status(200), context.json(mockData));
  })
);

// we need to listen to our server once before all tests
beforeAll(() => server.listen());
// after each test we need to reset the handlers
afterEach(() => server.resetHandlers());
// after all of the tests we need to close the server
afterAll(() => server.close());

describe('Pets', () => {
  // test for rendering of correct number of cards
  test('Should render (n) card components', async () => {
    render(<Pets />);
    const cards = await screen.findAllByRole('article');
    expect(cards.length).toBe(5);
  });

  // filter for all male cards
  test('Should filter for male dogs', async () => {
    render(<Pets />);
    // get all cards
    const cards = await screen.findAllByRole('article');
    // select the male option in the dropdown
    userEvent.selectOptions(screen.getByLabelText(/gender/i), 'male');
    // get filtered cards
    const maleCards = screen.getAllByRole('article');

    expect(maleCards).toStrictEqual([cards[1], cards[3]]);
  });

  // filter for all female cards
  test('Should filter for female dogs', async () => {
    render(<Pets />);
    const cards = await screen.findAllByRole('article');
    userEvent.selectOptions(screen.getByLabelText(/gender/i), 'female');
    const femaleCards = screen.getAllByRole('article');

    expect(femaleCards).toStrictEqual([cards[0], cards[2], cards[4]]);
  });
});
