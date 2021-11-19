class Machine extends React.Component {
	render() {
		const { s1, s2, s3 } = this.props;

		let text = 'You have lost';
		if (s1 === s2 && s2 === s3) text = 'You have won!';

		return (
			<div>
				<p>
					{s1}
					{s2}
					{s3}
				</p>
				<p>{text}</p>
			</div>
		);
	}
}
