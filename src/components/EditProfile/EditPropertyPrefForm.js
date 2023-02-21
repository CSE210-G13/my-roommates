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
    Button,
	Box,
} from '@mui/material/';

const amenityOptions = [
	'Air conditioner',
	'Swimming pool',
	'Fitness center',
	'Indoor washer and dryer',
	'Covered parking',
	'Pets allowed',
	'Dishwasher',
	'Smoke-free',
	'Access to public transportation',
	'Balcony',
];

export default function PropertyPrefForm() {
    const priceMarks = [
		{
			value: 500,
			label: '$500',
		},
		{
			value: 1500,
			label: '$1500',
		},
		{
			value: 2500,
			label: '$2500',
		},
		{
			value: 3500,
			label: '$3500',
		},
	];
	const distanceMarks = [
		{
			value: 5,
			label: '5',
		},
		{
			value: 15,
			label: '15',
		},
		{
			value: 25,
			label: '25',
		},
		{
			value: 35,
			label: '35',
		},
		{
			value: 45,
			label: '45',
		},
	];

	const initAmenitiesObj = amenityOptions.reduce((acc, val) => {
		acc[val] = false;
		return acc;
	}, {});
	const [amenities, setAmenities] = useState(initAmenitiesObj);
    const [editingProperty, setEditingProperty] = useState(false);

	const handleAmenitiesChange = (event) => {
		setAmenities({
			...amenities,
			[event.target.name]: event.target.checked,
		});
	};

    const handleEditingProperty = () => {
        setEditingProperty(!editingProperty);
    }
	
    return (
        <React.Fragment>
            <Grid container spacing={5}>
                <Grid item xs={6}>
                    <Typography variant="h5">
                        Property Preference
                    </Typography>
                </Grid>
				<Grid item xs={6}>
					<Box display="flex" justifyContent="flex-end">
						<Button 
							variant={editingProperty ? "contained" : "outlined"}
							onClick={() => {handleEditingProperty()}}>
							{editingProperty ? "Save" : "Edit"}
						</Button>
					</Box>
				</Grid>
                <Grid item xs={12} sm={6}>
					<FormLabel>Price Range (Monthly/Person)</FormLabel>
					<Slider defaultValue={20} min={100} max={4000} step={100} valueLabelDisplay="auto" marks={priceMarks} />
				</Grid>
                <Grid item xs={12} sm={6}>
                    <FormLabel>Distance to School (Miles)</FormLabel>
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