import React, { useEffect, useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { fetchCountries } from '../../api';
import styles from './CountryPicker.module.css';

const CountryPicker = ({ handleCountryChange }) => {
	const [countries, setCountries] = useState([]);
	useEffect(() => {
		const fetchAPI = async () => {
			setCountries(await fetchCountries());
		};
		fetchAPI();
	}, []);

	return (
		<FormControl className={styles.formControl}>
			<InputLabel>Country</InputLabel>
			<Select
				defaultValue=""
				onChange={(e) => handleCountryChange(e.target.value)}
			>
				<MenuItem value="">Global</MenuItem>
				{countries.map((country, i) => (
					<MenuItem value={country} key={i}>
						{country}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};

export default CountryPicker;
