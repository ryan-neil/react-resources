import { useState, useEffect } from 'react';

import UsersList from './components/UsersList';
import CreateUser from './components/CreateUser';

function App() {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // fetch backend API
  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const BASE_URL = 'http://localhost:3001';
        const res = await fetch(`${BASE_URL}/api/getUsers`);
        const data = await res.json();

        setList(data);
        setError(null);
      } catch (err) {
        console.log(err);
        setError(err.message);
        setList(null);
      } finally {
        setIsLoading(false);
      }
    };
    setTimeout(() => fetchData(), 1000); // delayed fetch
  }, []);

  return (
    <div className="App">
      <h1>MERN App</h1>
      <UsersList list={list} isLoading={isLoading} error={error} />
      <CreateUser list={list} setList={setList} />
    </div>
  );
}

export default App;
