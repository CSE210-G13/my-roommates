import * as React from 'react';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import {
	Grid,
	FormControlLabel,
	FormControl,
	FormLabel,
	Slider,
	FormGroup,
	Checkbox,
} from '@mui/material/';

import { amenitiesConst, priceMarksConst, distanceMarksConst } from '@/constants/constants';

const amenityOptions = amenitiesConst;

export default function PropertyPrefForm(props) {

	// TODO: get initial state from firebase
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
            <Grid container spacing={5}>
                <Grid item xs={12}>
                    <Typography variant="h5">
                        Property Preference
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
					<FormLabel>Price Range (Monthly/Person)</FormLabel>
					<Slider 
						defaultValue={20} 
						min={100} 
						max={4000} 
						step={100} 
						valueLabelDisplay="auto" 
						marks={priceMarksConst} 
						disabled={!props.editing}
					/>
				</Grid>
                <Grid item xs={12} sm={6}>
                    <FormLabel>Distance to School (Miles)</FormLabel>
                    <Slider 
						defaultValue={0} 
						min={0} 
						max={50} 
						step={1} 
						valueLabelDisplay="auto" 
						marks={distanceMarksConst} 
						disabled={!props.editing}
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
													checked={amenities[amenityString]}
													onChange={handleAmenitiesChange}
													disabled={!props.editing}
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