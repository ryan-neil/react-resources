// styles
import styled from 'styled-components';
const StyledCurrent = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	.heading {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 2rem;
		.heading-left {
			display: flex;
			align-items: center;
			gap: 0.5rem;
			span {
				height: 75px;
				width: 75px;
				background-color: var(--light-grey);
				border-radius: var(--border-radius);
			}
		}
		.favorite-btn {
			background: transparent;
			border: none;
			padding: 0.25rem 0.5rem;
			background-color: var(--blue);
			border-radius: var(--border-radius);
			color: var(--white);
			cursor: pointer;
			&:hover {
				opacity: 0.9;
			}
		}
	}
	.weather-text {
		align-self: center;
		font-size: 2rem;
	}
`;

const Current = ({ city, temperature, icon, weatherText }) => {
	return (
		<StyledCurrent>
			<div className="heading">
				<div className="heading-left">
					<span>{icon}</span>
					<div>
						<p>{city}</p>
						<p>{temperature}°F</p>
					</div>
				</div>
				<button className="favorite-btn">Favorite</button>
			</div>
			<h2 className="weather-text">{weatherText}</h2>
		</StyledCurrent>
	);
};

export default Current;
