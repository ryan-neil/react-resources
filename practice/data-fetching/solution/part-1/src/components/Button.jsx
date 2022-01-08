// styling selected: <button className={buttonText === reqType ? "selected" : null}>
import styled from 'styled-components';
const ButtonStyled = styled.button`
	&.selected {
		border: 2px solid dodgerblue;
	}
`;

const Button = ({ buttonText, reqType, setReqType }) => {
	return (
		<ButtonStyled
			className={buttonText === reqType ? 'selected' : null}
			type="button"
			onClick={() => setReqType(buttonText)}
		>
			{buttonText}
		</ButtonStyled>
	);
};

export default Button;
