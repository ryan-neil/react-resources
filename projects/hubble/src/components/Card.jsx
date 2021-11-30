import CardStyled from './styles/Card.styled';

export default function Card({ item: { id, title, body, image } }) {
	return (
		<CardStyled>
			<div>
				<h2>{title}</h2>
				<p>{body}</p>
			</div>
			<div>
				<img src={`./images/${image}`} alt="" />
			</div>
		</CardStyled>
	);
}
