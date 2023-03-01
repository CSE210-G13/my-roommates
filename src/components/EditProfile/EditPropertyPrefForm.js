import * as React from 'react';
import { useState, useContext } from 'react';
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

import { amenitiesConst, amenitiesMap, priceMarksConst, distanceMarksConst } from '@/constants/constants';
import { UserInfoContext } from './EditProfile';

const amenityOptions = amenitiesConst;

export default function PropertyPrefForm(props) {
	const { userInfo, setUserInfo } = useContext(UserInfoContext);

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
            <Grid container spacing={5}>
                <Grid item xs={12}>
                    <Typography variant="h5">
                        Property Preference
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
					<FormLabel>Max Price (Monthly/Person)</FormLabel>
					<Slider 
						value={userInfo.maxPropertyPrice} 
						min={100} 
						max={4000} 
						step={100} 
						valueLabelDisplay="auto" 
						marks={priceMarksConst} 
						disabled={!props.editing}
						onChange={(e) =>
							setUserInfo({
								...userInfo,
								maxPropertyPrice: e.target.value,
							})
						}
					/>
				</Grid>
                <Grid item xs={12} sm={6}>
                    <FormLabel>Distance to School (Miles)</FormLabel>
                    <Slider 
						value={userInfo.maxDistanceToSchool}
						min={0} 
						max={50} 
						step={1} 
						valueLabelDisplay="auto" 
						marks={distanceMarksConst} 
						disabled={!props.editing}
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
													disabled={!props.editing}
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