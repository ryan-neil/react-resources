class Superhero extends React.Component {
	render() {
		const { name, hobbies, mortal } = this.props;

		const lis = hobbies.map((h) => <li>{h}</li>);
		const isMortal = mortal ? 'success' : 'failure';

		return (
			<div>
				<h1>{name}</h1>
				<ul>{lis}</ul>
				<p className={isMortal}>Mortal?</p>
			</div>
		);
	}
}
