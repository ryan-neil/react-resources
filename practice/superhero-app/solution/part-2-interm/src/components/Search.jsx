const Search = ({ search, setSearch }) => {
	return (
		<form onSubmit={(e) => e.preventDefault()}>
			<label htmlFor="item-search">Search</label>
			<input
				type="search"
				id="item-search"
				role="searchbox"
				placeholder="Search heros..."
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
		</form>
	);
};

export default Search;
