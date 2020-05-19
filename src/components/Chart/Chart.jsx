import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { fetchDailyData } from '../../api';

import styles from './Chart.module.css';

const Chart = ({ data: { confirmed, recovered, deaths } }) => {
	const [dailyData, setDailyData] = useState({});

	useEffect(() => {
		const fetchAPI = async () => {
			const initialDailyData = await fetchDailyData();

			setDailyData(initialDailyData);
		};

		fetchAPI();
	}, []);

	return (
		<div className={styles.container}>
			{dailyData[0] ? (
				<Line
					data={{
						labels: dailyData.map(({ date }) => date),
						datasets: [
							{
								data: dailyData.map((data) => data.confirmed),
								label: 'Infected',
								borderColor: '#bac8ff',
								fill: true,
								pointBorderWidth: 1,
							},
							{
								data: dailyData.map((data) => data.deaths),
								label: 'Deaths',
								borderColor: '#ffd8a8',
								fill: true,
								pointBorderWidth: 1,
							},
						],
					}}
				/>
			) : null}
		</div>
	);
};

export default Chart;
