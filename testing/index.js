// create App component
class App extends React.Component {
	render() {
		return (
			<Movie
				name="Star Wars"
				reviews={5}
				img="https://cdn.vox-cdn.com/thumbor/UHTSj3_-peudjTCtAEEfH9Rm8E4=/0x0:1536x864/1200x800/filters:focal(646x310:890x554)/cdn.vox-cdn.com/uploads/chorus_image/image/58953911/star_wars_logo_new_tall.0.jpg"
			/>
		);
	}
}

// render App component
ReactDOM.render(<App />, document.getElementById('root'));
