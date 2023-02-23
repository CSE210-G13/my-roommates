import * as React from 'react';
import { useState, useContext } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { FormControlLabel, FormControl, FormLabel, FormGroup, Checkbox } from '@mui/material/';

import { lifestyleConst, lifestyleMap } from '@/constants/constants';
import { UserInfoContext } from './FirstTimeUserFlow';

export default function RoommatePrefForm() {
	const { userInfo, setUserInfo } = useContext(UserInfoContext);

	let lifestyle = userInfo.lifestyle;
	const handleLifestyleChange = (event) => {
		lifestyle[lifestyleMap[event.target.name]] = event.target.checked;
		setUserInfo({
			...userInfo,
			lifestyle: lifestyle,
		});
	};

	return (
		<React.Fragment>
			<Typography variant="h6" gutterBottom>
				Lifestyle and Habits
			</Typography>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<FormLabel>Usual bedtime</FormLabel>
					<TextField
						id="time"
						type="time"
						inputProps={{
							step: 1800,
						}}
						value={userInfo.bedtime}
						onChange={(e) => setUserInfo({ ...userInfo, bedtime: e.target.value })}
						fullWidth
					/>
				</Grid>

				<Grid item xs={12}>
					<FormControl fullWidth>
						<FormLabel>Lifestyles and Habits</FormLabel>
						<FormGroup>
							<Grid container spacing={3} rowSpacing={0.1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
								{lifestyleConst.map((lifestyleString) => (
									<Grid item xs={6} md={3} key={lifestyleString}>
										<FormControlLabel
											control={
												<Checkbox
													name={lifestyleString}
													checked={userInfo.lifestyle[lifestyleMap[lifestyleString]]}
													onChange={handleLifestyleChange}
												/>
											}
											label={lifestyleString}
										/>
									</Grid>
								))}
							</Grid>
						</FormGroup>
					</FormControl>
				</Grid>
			</Grid>
		</React.Fragment>
	);
}
