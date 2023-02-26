import * as React from 'react';
import { useState, useContext } from 'react';
import Typography from '@mui/material/Typography';
import { Grid, FormControlLabel, FormControl, FormLabel, Slider, FormGroup, Checkbox } from '@mui/material/';

import { amenitiesConst, amenitiesMap } from '@/constants/constants';
import { UserInfoContext } from './FirstTimeUserFlow';

const amenityOptions = amenitiesConst;

export default function PropertyPrefForm() {
	const { userInfo, setUserInfo } = useContext(UserInfoContext);

	const priceMarks = [500, 1500, 2500, 3500].map((x) => {
		return { value: x, label: '$' + x.toString() };
	});
	const distanceMarks = [5, 15, 25, 35, 45].map((x) => {
		return { value: x, label: x.toString() };
	});

	let amenities = userInfo.amenities;
	const handleAmenitiesChange = (event) => {
		amenities[amenitiesMap[event.target.name]] = event.target.checked;
		setUserInfo({
			...userInfo,
			amenities: amenities,
		});
	};

	return (
		<React.Fragment>
			<Typography variant="h6" gutterBottom data-testid="form title">
				Property Preference
			</Typography>
			<Grid container spacing={5}>
				<Grid item xs={12} sm={6}>
					<FormLabel>Max Price (Monthly/Person)</FormLabel>
					<Slider
						value={userInfo.maxPropertyPrice}
						min={100}
						max={4000}
						step={100}
						valueLabelDisplay="auto"
						marks={priceMarks}
						onChange={(e) =>
							setUserInfo({
								...userInfo,
								maxPropertyPrice: e.target.value,
							})
						}
					/>
				</Grid>

				<Grid item xs={12} sm={6}>
					<FormLabel>Max Distance to School (Mile)</FormLabel>
					<Slider
						value={userInfo.maxDistanceToSchool}
						min={0}
						max={50}
						step={1}
						valueLabelDisplay="auto"
						marks={distanceMarks}
						onChange={(e) =>
							setUserInfo({
								...userInfo,
								maxDistanceToSchool: e.target.value,
							})
						}
					/>
				</Grid>

				<Grid item xs={12}>
					<FormControl>
						<FormLabel>Amenities</FormLabel>
						<FormGroup>
							<Grid container spacing={3} rowSpacing={0.1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
								{amenityOptions.map((amenityString) => (
									<Grid item xs={12} md={6} key={amenityString}>
										<FormControlLabel
											control={
												<Checkbox
													name={amenityString}
													checked={userInfo.amenities[amenitiesMap[amenityString]]}
													onChange={handleAmenitiesChange}
												/>
											}
											label={amenityString}
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
