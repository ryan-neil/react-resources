import Day from './Day';
// styles
import styled from 'styled-components';
const StyledForecast = styled.div`
	display: flex;
	align-content: center;
	justify-content: center;
	gap: 1rem;
`;

const Forecast = ({ forecastData }) => {
	const results = forecastData.DailyForecasts;

	return (
		<StyledForecast>
			{results.map((day) => (
				<Day
					key={day.EpochDate}
					title={day.EpochDate}
					minTemp={day.Temperature.Minimum.Value}
					maxTemp={day.Temperature.Maximum.Value}
					phrase={day.Day.IconPhrase}
				/>
			))}
		</StyledForecast>
	);
};

export default Forecast;
