import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
	let changeableUrl = url;

	if (country) {
		changeableUrl = `${url}/countries/${country}`;
	}

	try {
		const { data } = await axios.get(changeableUrl);
		return data;
	} catch (e) {
		console.error(e);
	}
};

export const fetchDailyData = async () => {
	try {
		const { data } = await axios.get(`${url}/daily`);

		return data.map(({ confirmed, deaths, reportDate: date }) => ({
			confirmed: confirmed.total,
			deaths: deaths.total,
			date,
		}));
	} catch (e) {
		console.error(e);
	}
};

export const fetchCountries = async () => {
	try {
		const { data } = await axios.get(`${url}/countries`);
		return data.countries.map((country) => country.name);
	} catch (e) {
		console.error(e);
	}
};
