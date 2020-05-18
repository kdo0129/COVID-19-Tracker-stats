import React, { Component } from 'react';
import { Chart, Cards, CountryPicker } from './components';

class App extends Component {
	render() {
		return (
			<div>
				<Cards />
				<CountryPicker />
				<Chart />
			</div>
		);
	}
}

export default App;
