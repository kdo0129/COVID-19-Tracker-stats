import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import cx from 'classnames';
import CountUp from 'react-countup';

import styles from './Cards.module.css';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
	if (!confirmed) {
		return 'Loading.....';
	}

	const updateDate = new Date(lastUpdate).toDateString();
	return (
		<div className={styles.container}>
			<Grid container spacing={3} justify="center">
				<Grid
					item
					md={3}
					component={Card}
					className={cx(styles.card, styles.infected)}
				>
					<CardContent>
						<Typography color="textPrimary">확진자 수</Typography>
						<Typography variant="h5" component="h2">
							<CountUp
								start={0}
								end={confirmed.value}
								duration={2.5}
								separator={','}
							/>
						</Typography>
						<Typography color="textSecondary">{updateDate}</Typography>
						<Typography variant="body2" component="p">
							Number of active case of COVID-19
						</Typography>
					</CardContent>
				</Grid>
				<Grid
					item
					md={3}
					component={Card}
					className={cx(styles.card, styles.recovered)}
				>
					<CardContent>
						<Typography color="textPrimary">완치자 수</Typography>
						<Typography variant="h5" component="h2">
							<CountUp
								start={0}
								end={recovered.value}
								duration={2.5}
								separator={','}
							/>
						</Typography>
						<Typography color="textSecondary">{updateDate}</Typography>
						<Typography variant="body2" component="p">
							Number of recoveries from COVID-19
						</Typography>
					</CardContent>
				</Grid>
				<Grid
					item
					md={3}
					component={Card}
					className={cx(styles.card, styles.deaths)}
				>
					<CardContent>
						<Typography color="textPrimary">사망자 수</Typography>
						<Typography variant="h5" component="h2">
							<CountUp
								start={0}
								end={deaths.value}
								duration={2.5}
								separator={','}
							/>
						</Typography>
						<Typography color="textSecondary">{updateDate}</Typography>
						<Typography variant="body2" component="p">
							Number of deaths causedd by COVID-19
						</Typography>
					</CardContent>
				</Grid>
			</Grid>
		</div>
	);
};

export default Cards;
