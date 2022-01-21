import Search from '../components/Search';
import Main from '../components/Main';

const Home = ({ search, setSearch }) => {
	return (
		<main>
			<Search search={search} setSearch={setSearch} />
			<Main />
		</main>
	);
};
export default Home;
