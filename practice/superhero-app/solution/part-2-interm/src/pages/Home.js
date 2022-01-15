import { useState } from 'react';
import Search from '../components/Search';
import HeroList from '../components/HeroList';
import Empty from '../components/Empty';

const Home = ({ heros, setHeros, setFetchError }) => {
	const [ search, setSearch ] = useState('');

	// Search item
	const handleSearch = () => {
		return heros.filter((hero) =>
			hero.name.toLowerCase().includes(search.toLowerCase())
		);
	};

	return (
		<main>
			{heros.length ? (
				<div>
					<Search search={search} setSearch={setSearch} />
					<HeroList
						heros={handleSearch()}
						setHeros={setHeros}
						setFetchError={setFetchError}
					/>
				</div>
			) : (
				<Empty />
			)}
		</main>
	);
};

export default Home;
