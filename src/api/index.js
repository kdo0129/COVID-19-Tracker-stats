import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
	try {
		const { data } = await axios.get(url);
		return data;
	} catch (e) {
		console.error(e);
	}
};
