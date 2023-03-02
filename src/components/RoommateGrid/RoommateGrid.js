import Grid from '@mui/material/Grid';

import RoommateCard from './RoommateCard.js';

export default function RoommateGrid({ users }) {
	return (
		<Grid container direction="row" spacing={0} sx={{ px: 5 }}>
			{users.map((x, i) => (
				<Grid item display="flex" justifyContent="center" alignItems="center" key={i} sm>
					<RoommateCard user={x} />
				</Grid>
			))}
		</Grid>
	);
}
