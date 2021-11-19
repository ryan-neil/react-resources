// Hello component
class User extends React.Component {
	render() {
		let reviews = '⭐️'.repeat(this.props.reviews);

		return (
			<div>
				<h3>Hello {this.props.name}</h3>
				<p>Rating: {reviews}</p>
			</div>
		);
	}
}

class Movie extends React.Component {
	render() {
		let reviews = '⭐️'.repeat(this.props.reviews);

		return (
			<div>
				<h1>{this.props.name}</h1>
				<p>Rating: {reviews}</p>
				<img src={this.props.img} />
			</div>
		);
	}
}
