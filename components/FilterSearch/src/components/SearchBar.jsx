import { useState } from 'react';
import './SearchBar.css';

function SearchBar({ data }) {
	// set state
	const [ filteredData, setFilteredData ] = useState([]);

	const handleFilter = (e) => {
		// users searched word
		const searchWord = e.target.value;
		// filter through data and check if the users word includes the currently typed letters
		const newFilter = data.filter((item) => {
			return item.name.toLowerCase().includes(searchWord.toLowerCase());
		});
		// check if there are any results from the users search, if no results close the container
		searchWord === '' ? setFilteredData([]) : setFilteredData(newFilter);
	};

	// loop through the filtered data and display the matching items
	const results = filteredData.map((item, key) => {
		return (
			<a className="dataItem" href="#">
				<p>{`${item.name}, ${item.location.state}`}</p>
			</a>
		);
	});

	return (
		<div className="SearchBar">
			{/* Input */}
			<div className="searchInputs">
				<input
					type="text"
					placeholder="Search"
					onChange={handleFilter}
				/>
			</div>
			{/* Search Results */}
			{filteredData.length !== 0 && (
				<div className="dataResult">{results}</div>
			)}
		</div>
	);
}

export default SearchBar;
