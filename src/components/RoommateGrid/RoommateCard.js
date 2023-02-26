import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Link from "next/link";

export default function RoommateCard({ user }) {
	// TODO: Default profile picture if we don't have an imageUrl
	return (
		<Card variant="outlined" sx={{width: 500}}>
			<CardMedia sx={{ height: 140 }} image={user.imageUrl} />
			<CardContent>
				<Typography variant="h5">
					{user.firstName + " " + user.lastName}
				</Typography>

				<Typography gutterBottom variant="body2" color="text.secondary">
					{[user.gender, user.schoolYear, user.college, user.major]
						.join(" · ")}
				</Typography>

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
