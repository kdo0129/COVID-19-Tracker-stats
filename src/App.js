import React, { useEffect, useState } from 'react';
import { Chart, Cards, CountryPicker } from './components';
import { fetchData } from './api';

import styles from './App.module.css';
import titleImg from './images/image (1).png';

const App = () => {
	const [data, setData] = useState({});
	const [country, setCountry] = useState('');

	useEffect(() => {
		const fetchInitialData = async () => {
			const data = await fetchData();
			setData(data);
		};
		fetchInitialData();
	}, []);

	const handleCountryChange = async (country) => {
		const data = await fetchData(country);
		setData(data);
		setCountry(country);
	};

	return (
		<div className={styles.container}>
			<img className={styles.titleImg} src={titleImg} alt="COVID-19 Title" />
			<Cards data={data} />
			<CountryPicker
				country={country}
				handleCountryChange={handleCountryChange}
			/>
			<Chart data={data} country={country} />
		</div>
	);
};

export default App;
