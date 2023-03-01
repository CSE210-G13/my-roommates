import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Unstable_Grid2";
import Avatar from "@mui/material/Avatar";
import Link from "next/link";

export default function RoommateCard({ user }) {
	// TODO: Default profile picture if we don't have an imageUrl
	return (
		<Card variant="outlined" sx={{width: 500}}>
			<CardContent>
				<Grid container direction={{xs: 'column', md: 'row'}}
		       columns={4} spacing={7} display="flex" justifyContent="center">

					<Grid md={1} display="flex" justifyContent="center">
						<Avatar sx={{ fontSize: "4vh", minHeight: "8vh", minWidth: "8vh" }}>
							{user.firstName[0]}
						</Avatar>
					</Grid>

					<Grid md={3} display="flex" alignItems="center" justifyContent="center">
						<Stack spacing={1}>
							<Typography variant="h5" align="center">
								{`${user.firstName} ${user.lastName}`}
							</Typography>

							<Typography variant="body2" color="text.secondary" align="center">
								{[user.gender, user.schoolYear, user.college, user.major]
									.join(" · ")}
							</Typography>
						</Stack>
					</Grid>
				</Grid>

				<Typography variant="body2" gutterBottom>
					Hobbies: {user.lifestyle.hobbies.join(", ")}
				</Typography>

				<Typography variant="body2">
					Looking for a {user.propPref.numBedrooms} bedroom, {user.propPref.numBathrooms} bathroom property
				</Typography>

			</CardContent>
			<CardActions>
				<Link href='/viewProfile' passHref>
					<Button>View Profile</Button>
				</Link>
			</CardActions>
		</Card>
	)
}
