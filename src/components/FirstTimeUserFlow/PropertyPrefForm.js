import * as React from 'react';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import { Grid, FormControlLabel, FormControl, FormLabel, Slider, FormGroup, Checkbox } from '@mui/material/';

import { amenitiesConst } from '@/constants/constants';

const amenityOptions = amenitiesConst;

export default function PropertyPrefForm() {
	const priceMarks = [500, 1500, 2500, 3500].map((x) => {
		return { value: x, label: '$' + x.toString() };
	});
	const distanceMarks = [5,15,25,35,45].map((x) => {
		return { value: x, label: x.toString() };
	});

	const initAmenitiesObj = amenityOptions.reduce((acc, val) => {
		acc[val] = false;
		return acc;
	}, {});
	const [amenities, setAmenities] = useState(initAmenitiesObj);

	const handleAmenitiesChange = (event) => {
		setAmenities({
			...amenities,
			[event.target.name]: event.target.checked,
		});
	};

	return (
		<React.Fragment>
			<Typography variant="h6" gutterBottom>
				Property Preference
			</Typography>
			<Grid container spacing={5}>
				<Grid item xs={12} sm={6}>
					<FormLabel>Price Range (Monthly/Person)</FormLabel>
					<Slider defaultValue={20} min={100} max={4000} step={100} valueLabelDisplay="auto" marks={priceMarks} />
				</Grid>

				<Grid item xs={12} sm={6}>
					<FormLabel>Distance to School (Mile)</FormLabel>
					<Slider defaultValue={0} min={0} max={50} step={1} valueLabelDisplay="auto" marks={distanceMarks} />
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
													checked={amenities[amenityString]}
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
