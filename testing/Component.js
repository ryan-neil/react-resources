class Superhero extends React.Component {
	render() {
		const { name, hobbies, rating, organization } = this.props;

		const lis = hobbies.map((h) => <li>{h}</li>);
		const stars = '⭐'.repeat(rating);

		return (
			<div>
				<h1>{name}</h1>
				<p>Organization: {organization}</p>
				<ul>{lis}</ul>
				<p>Rating: {stars}</p>
			</div>
		);
	}
}

// set default props
Superhero.defaultProps = {
	organization: 'Marvel'
};
