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
	Checkbox,
    Button,
	Box,
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
    'Exercise',
];
export default function EditRoommatePrefForm() {
    const initDislikeSelection = dislikeOptions.reduce((acc, val) => {
		acc[val] = false;
		return acc;
	}, {});
    const [bedtime, setBedtime] = useState('');
	const [dislikes, setDislike] = useState(initDislikeSelection);
    const [editingRoommate, setEditingRoommate] = useState(false);

	const handleDislikesChange = (event) => {
		setDislike({
			...dislikes,
			[event.target.name]: event.target.checked,
		});
	};

    const handleEditingRoommate = () => {
        setEditingRoommate(!editingRoommate);
    }

    return (
        <React.Fragment>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Typography variant="h5">
                        Roommate Preference
                    </Typography>
                </Grid>
				<Grid item xs={6}>
					<Box display="flex" justifyContent="flex-end">
						<Button 
							variant={editingRoommate ? "contained" : "outlined"}
							onClick={() => {handleEditingRoommate()}}>
							{editingRoommate ? "Save" : "Edit"}
						</Button>
					</Box>
                    </Grid>
                <Grid item xs={12} md={6}>
                    <FormLabel>Desired bedtime</FormLabel>
                    <TextField
						id="time"
						type="time"
						defaultValue="22:00"inputProps={{
							step: 1800,
						}}
						onChange={(e) => setBedtime(e.target.value)}
						fullWidth
					/>
                </Grid>
                <Grid item xs={12}>
					<FormControl fullWidth>
						<FormLabel>Can&apos;t accept</FormLabel>
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