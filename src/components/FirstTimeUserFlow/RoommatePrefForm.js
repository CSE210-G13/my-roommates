import * as React from 'react';
import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import {
	FormControlLabel,
	FormControl,
	FormLabel,
	FormGroup,
	RadioGroup,
	Radio,
	Select,
	MenuItem,
	Box,
	Chip,
	Checkbox,
} from '@mui/material/';

const dislikeOptions = ['Smoking', 'Alcohol', 'Pets', 'Couples', 'Children', 'Parties'];
const hobbies = [
	'Reading',
	'Watching TV',
	'Family Time',
	'Movies',
	'Fishing',
	'Computer',
	'Gardening',
	'Renting Movies',
];
export default function RoommatePrefForm() {
	const initDislikeSelection = dislikeOptions.reduce((acc, val) => {
		acc[val] = false;
		return acc;
	}, {});
	// console.log(dislikesObj);
	const [bedtime, setBedtime] = useState('');
	const [dislikes, setDislike] = useState(initDislikeSelection);

	const handleDislikesChange = (event) => {
		setDislike({
			...dislikes,
			[event.target.name]: event.target.checked,
		});
	};

	return (
		<React.Fragment>
			<Typography variant="h6" gutterBottom>
				Roommate Preference
			</Typography>
			<Grid container spacing={3}>
				<Grid item xs={12} md={6}>
					<FormLabel>Desired bedtime</FormLabel>
					<TextField
						id="time"
						type="time"
						defaultValue="22:00"
						// className={classes.textField}
						inputProps={{
							step: 1800,
						}}
						onChange={(e) => setBedtime(e.target.value)}
						fullWidth
					/>
				</Grid>

				<Grid item xs={12}>
					<FormControl fullWidth>
						<FormLabel>Can't accept</FormLabel>
						<FormGroup>
							<Grid container spacing={3} rowSpacing={0.1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
								{dislikeOptions.map((dislikeString) => (
									<Grid item xs={6} md={3} key={dislikeString}>
										<FormControlLabel
											control={
												<Checkbox
													name={dislikeString}
													checked={dislikes[dislikeString]}
													onChange={handleDislikesChange}
												/>
											}
											label={dislikeString}
										/>
									</Grid>
								))}
							</Grid>
						</FormGroup>
					</FormControl>
				</Grid>

				<Grid item xs={12}>
					<FormControl fullWidth>
						<FormLabel>Hobbies</FormLabel>
						<Grid container spacing={3} rowSpacing={0.1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
							{hobbies.map((hobby) => (
								<Grid item xs={6} md={3} key={hobby}>
									<FormControlLabel control={<Checkbox />} label={hobby} />
								</Grid>
							))}
						</Grid>
					</FormControl>
				</Grid>
			</Grid>
		</React.Fragment>
	);
}
