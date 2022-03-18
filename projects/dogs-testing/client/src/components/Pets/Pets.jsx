import { useEffect, useState } from 'react';
import Filter from '../Filter/Filter';
import Cards from '../Cards/Cards';
import './Pets.css';

const Pets = () => {
  const [dogs, setDogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(null);
  const [filteredDogs, setFilteredDogs] = useState([]);
  const [filters, setFilters] = useState({
    gender: 'any',
    favored: 'any',
  });

  // fetch api data
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch('http://localhost:9001/dogs');
        const data = await res.json();

        setDogs(data);
        setFilteredDogs(data);
        setHasError(null);
      } catch (err) {
        console.log(err);
        setHasError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  // handle filters
  useEffect(() => {
    // create a duplicate dogs array
    let dogsFiltered = [...dogs];

    // if user selects a gender
    if (filters.gender !== 'any') {
      dogsFiltered = dogsFiltered.filter(
        (dog) => dog.gender === filters.gender
      );
    }

    if (filters.favored !== 'any') {
      dogsFiltered = dogsFiltered.filter(
        (dog) => dog.favored === (filters.favored === 'favored' ? true : false)
      );
    }

    // update the filtered dogs state
    setFilteredDogs(dogsFiltered);
  }, [filters]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (hasError) {
    return <p>Error fetching data ({hasError}).</p>;
  }

  return (
    <div className="container">
      <div className="app-container">
        <Filter filters={filters} setFilters={setFilters} />
        <Cards dogs={filteredDogs} setDogs={setDogs} />
      </div>
    </div>
  );
};

export default Pets;
