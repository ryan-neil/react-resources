import SearchBar from './components/SearchBar.jsx';
import Data from './Data';
import './App.css';

// for an API add the logic to access the data in a separate function and then pass that into the 'data' prop

function App() {
	return (
		<div className="App">
			<SearchBar data={Data} />
		</div>
	);
}

export default App;
