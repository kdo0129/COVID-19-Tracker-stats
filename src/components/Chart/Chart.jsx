import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { fetchDailyData } from '../../api';

import styles from './Chart.module.css';

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
	const [dailyData, setDailyData] = useState({});

	useEffect(() => {
		const fetchAPI = async () => {
			const initialDailyData = await fetchDailyData();

			setDailyData(initialDailyData);
		};

		fetchAPI();
	}, []);

	const lineChart = dailyData[0] ? (
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
	) : null;

	const barChart = confirmed ? (
		<Bar
			data={{
				labels: ['Infected', 'Recoverd', 'Deaths'],
				datasets: [
					{
						label: 'People',
						backgroundColor: ['#bac8ff', '#d3f9d8', '#ffd8a8'],
						data: [confirmed.value, recovered.value, deaths.value],
					},
				],
			}}
			options={{
				legend: { display: false },
				title: { display: true, text: `Current state in  ${country}` },
			}}
		/>
	) : null;

	return (
		<div className={styles.container}>{country ? barChart : lineChart}</div>
	);
};

export default Chart;
