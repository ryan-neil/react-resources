import React, { Component } from 'react';

// Component(s)
import RollDice from './components/RollDice';
// Styles
import './components/styles/App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<RollDice />
			</div>
		);
	}
}

export default App;
