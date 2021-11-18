class JSXDemo extends React.Component {
	render() {
		return (
			<div>
				<h1>Random Image!</h1>
				<img src="https://source.unsplash.com/random" width="400" />
			</div>
		);
	}
}

ReactDOM.render(<JSXDemo />, document.getElementById('root'));
