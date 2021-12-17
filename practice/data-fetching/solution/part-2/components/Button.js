import styled from 'styled-components';
const ButtonStyled = styled.button`
	width: 100%;
	height: 3rem;

  /* background: ${(props) => (props.selected ? 'dodgerblue' : 'white')}; */
  /* color: ${(props) => (props.selected ? 'white' : 'dodgerblue')}; */
	display: inline-block;
	outline: none;
	cursor: pointer;
	font-size: 16px;
	line-height: 20px;
	font-weight: 500;
	border-radius: 6px;
	padding: 14px 24px;
	border: none;
	background: #fff;
	color: #000;
	box-shadow: 0 4px 14px 0 rgb(0 0 0 / 10%);
	&:first-letter {
		text-transform: capitalize;
	}
	&:hover {
		opacity: 0.9;
		box-shadow: 0 6px 20px rgb(93 93 93 / 23%);
	}
	&.selected {
		color: #fff;
		background: #0270f3;
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
