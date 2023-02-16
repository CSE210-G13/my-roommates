import * as React from 'react';
import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { FormControlLabel, FormControl, FormLabel, RadioGroup, Radio, Select, MenuItem, Box, Chip, Checkbox } from '@mui/material/';

export default function RoommatePrefForm() {
	const [bedtime, setBedtime] = useState('');
	const [hasPet, setHasPet] = useState(false);

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
				<Grid item xs={12} md={6}>
					<FormControl fullWidth>
						<FormLabel>Has Pet</FormLabel>
						<RadioGroup row onChange={(e) => setHasPet(e.target.value)}>
							<FormControlLabel value={true} control={<Radio />} label="Yes" />
							<FormControlLabel value={false} control={<Radio />} label="No" />
						</RadioGroup>
					</FormControl>
				</Grid>
				<Grid item xs={12} md={6}>
					<FormControl fullWidth>
						<FormLabel>Lifestyle Habits</FormLabel>
						<FormControlLabel control={<Checkbox />} label="No smoking" />
            <FormControlLabel control={<Checkbox />} label="No alcohol" />
            <FormControlLabel control={<Checkbox />} label="No pets" />
					</FormControl>
				</Grid>
			</Grid>
		</React.Fragment>
	);
}
