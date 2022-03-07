import styled from 'styled-components';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Planets from './components/Planets';
import People from './components/People';

const queryClient = new QueryClient();

function App() {
  const [page, setPage] = useState('planets');

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <StyledApp>
          <h1>Star Wars Info</h1>
          <Navbar setPage={setPage} />
          <div className="content">
            {page === 'planets' ? <Planets /> : <People />}
          </div>
        </StyledApp>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

// Styles
const StyledApp = styled.div`
  max-width: 960px;
  margin: 0 auto;
  h1 {
    color: #ffff57;
    font-size: 4em;
    letter-spacing: 2px;
  }
  button {
    margin: 0 10px;
    background: transparent;
    border: 3px solid #ccc;
    border-radius: 10px;
    padding: 10px;
    color: #ccc;
    font-size: 1.2em;
    cursor: pointer;
  }
  button:hover {
    color: #fff;
    border-color: #fff;
  }
  .content {
    text-align: left;
  }
  .card {
    padding: 8px 16px;
    background: #1b1b1b;
    margin: 16px 0;
    border-radius: 20px;
  }
  .card p {
    margin: 6px 0;
    color: #999;
  }
  .card h3 {
    margin: 10px 0;
    color: #ffff57;
  }
`;

export default App;
