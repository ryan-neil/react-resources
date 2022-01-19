import { Button } from './styles/Button.styled';

const ReqButton = ({ text, leagueId, reqType, setReqType }) => {
	return (
		<Button
			selected={leagueId === reqType ? true : false}
			type="button"
			onClick={() => setReqType(leagueId)}
		>
			{text}
		</Button>
	);
};

export default ReqButton;
