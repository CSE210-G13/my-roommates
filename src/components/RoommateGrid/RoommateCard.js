import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Link from 'next/link';

export default function RoommateCard({ user }) {
	// TODO: Default profile picture if we don't have an imageUrl
	return (
		<Card variant="outlined" sx={{ m: '20px', width: 480 }}>
			<CardContent>
				<Grid container columns={4} spacing={2} display="flex" justifyContent="center">
					<Grid item md={1} display="flex" justifyContent="center" alignItems="center">
						<Avatar sx={{ width: 90, height: 90 }} src={user.imageUrl}>
							{user.firstName[0]}
						</Avatar>
					</Grid>

					<Grid item md={3} display="flex" alignItems="center" justifyContent="center">
						<Stack spacing={1}>
							<Typography variant="h5" align="center">
								{`${user.firstName} ${user.lastName}`}
							</Typography>

							<Typography variant="body2" color="text.secondary" align="center">
								{[user.gender, user.schoolYear, user.college, user.major].join(' · ')}
							</Typography>
							<Typography variant="body2" align="center" gutterBottom>
								Hobbies: {user.lifestyle.hobbies.join(', ')}
							</Typography>

							<Typography variant="body2" align="center">
								Looking for a {user.propPref.numBedrooms} bedroom, {user.propPref.numBathrooms} bathroom
								property
							</Typography>
						</Stack>
					</Grid>
				</Grid>
			</CardContent>
			<CardActions>
				<Link href="/viewProfile" passHref>
					<Button>View Profile</Button>
				</Link>
			</CardActions>
		</Card>
	);
}
