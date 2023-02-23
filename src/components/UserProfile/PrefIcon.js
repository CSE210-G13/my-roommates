import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Unstable_Grid2";
import React from 'react';
import Typography from '@mui/material/Typography';

/**
 * Display an icon with the text below it, centered.
 */
export default function PrefIcon({ icon, string }) {
	return (
		<Grid xs={1} display="flex" alignItems="center" justifyContent="center">
			<Stack spacing={1} alignItems="center">
				{React.createElement(icon, { fontSize: "large" })}
				<Typography align="center">{string}</Typography>
			</Stack>
		</Grid>
	)
}
