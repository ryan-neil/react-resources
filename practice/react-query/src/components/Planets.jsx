import { useState } from 'react';
import { useQuery } from 'react-query';
import Planet from './Planet';

// fetch swapi api
const fetchPlanets = async (key, page) => {
  const res = await fetch(`http://swapi.dev/api/planets/`);
  return res.json();
};

const Planets = () => {
  const { data, status } = useQuery('planets', fetchPlanets);
  console.log(data);

  return (
    <div>
      <h2>Planets</h2>

      {status === 'loading' && <p>Loading...</p>}
      {status === 'error' && <p>Error fetching data</p>}
      {status === 'success' && (
        <div>
          {data.results.map((planet) => (
            <Planet key={planet.name} planet={planet} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Planets;
