import React, { Component } from 'react';
import { Chart, Cards, CountryPicker } from './components';
import { fetchData } from './api';

import styles from './App.module.css';
import titleImg from './images/image (1).png';

class App extends Component {
	state = {
		data: {},
		country: '',
	};

	async componentDidMount() {
		const data = await fetchData();
		this.setState({ ...this.state, data });
	}

	handleCountryChange = async (country) => {
		const data = await fetchData(country);
		this.setState({ ...this.state, data, country: country });
	};

	render() {
		const { data, country } = this.state;
		return (
			<div className={styles.container}>
				<img className={styles.titleImg} src={titleImg} alt="COVID-19 Title" />
				<Cards data={data} />
				<CountryPicker
					country={country}
					handleCountryChange={this.handleCountryChange}
				/>
				<Chart data={data} country={country} />
			</div>
		);
	}
}

export default App;
