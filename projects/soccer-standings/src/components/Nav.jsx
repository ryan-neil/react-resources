import { useContext } from 'react';
import StandingsContext from '../context/StandingsContext';
// components
import ReqButton from './ReqButton';
// styles
import styled from 'styled-components';
const StyledForm = styled.form`
	display: flex;
	gap: 1rem;
`;

const Nav = () => {
	const { reqType, setReqType } = useContext(StandingsContext);

	return (
		<StyledForm onSubmit={(e) => e.preventDefault()}>
			<ReqButton
				text="EPL"
				leagueId="league=39"
				reqType={reqType}
				setReqType={setReqType}
			/>
			<ReqButton
				text="EFL"
				leagueId="league=40"
				reqType={reqType}
				setReqType={setReqType}
			/>
			<ReqButton
				text="League 1"
				leagueId="league=41"
				reqType={reqType}
				setReqType={setReqType}
			/>
		</StyledForm>
	);
};

export default Nav;
