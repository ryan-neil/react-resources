// styles
import styled from 'styled-components';
const StyledSearch = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	input {
		width: 300px;
		color: var(--text-p);
		font-size: 0.9rem;
		padding: .5rem 1rem;
		background: transparent;
		background-color: var(--white);
		border: none;
		border-radius: var(--border-radius);
		box-shadow: 0 1.6px 3.6px 0 rgba(0, 0, 0, .132),
			0 .3px .9px 0 rgba(0, 0, 0, .108);
		&::placeholder {
			color: var(--text-light);
		}
	}
	.results-container {
		font-size: 0.9rem;
		width: auto;
		width: 20em;
		height: auto;
		max-height: 21em;
		background-color: #fff;
		border-radius: .35rem;
		box-shadow: 0 1.6px 3.6px 0 rgba(0, 0, 0, .132),
			0 .3px .9px 0 rgba(0, 0, 0, .108);
		overflow: hidden;
		overflow-y: auto;
		/* Hide scrollbar */
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
		&::-webkit-scrollbar {
			display: none; /* Chrome, Safari and Opera */
		}
		.list-item {
			background: transparent;
			border: none;
			padding: 0 1rem;
			color: #000;
			width: 100%;
			height: 50px;
			display: flex;
			align-items: center;
			cursor: pointer;

			&:hover {
				background-color: #e0e0e0;
			}
		}
	}
`;

const Search = ({ resultsData, searchQuery, setSearchQuery }) => {
	// check if the results are empty
	const isEmpty = !resultsData || resultsData.length === 0;

	return (
		<StyledSearch>
			{/* input */}
			<input
				type="text"
				placeholder="Search city..."
				value={searchQuery}
				onChange={(e) => setSearchQuery(e.target.value)}
			/>
			{/* results container */}
			{!isEmpty && (
				<div className="results-container">
					{resultsData.map((item) => (
						<button className="list-item" key={item.Key}>
							{`${item.LocalizedName}, ${item.AdministrativeArea
								.LocalizedName}`}
						</button>
					))}
				</div>
			)}
		</StyledSearch>
	);
};

export default Search;
