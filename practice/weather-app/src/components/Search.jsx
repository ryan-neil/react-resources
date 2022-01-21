const Search = ({ search, setSearch }) => {
	return (
		<form>
			<label htmlFor="search">Search</label>
			<input
				type="text"
				id="search"
				placeholder="Search by City"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
		</form>
	);
};

export default Search;
