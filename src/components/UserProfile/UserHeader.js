import React from 'react';
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Stack from "@mui/material/Stack";
import Typography from '@mui/material/Typography';

import EmailIcon from '@mui/icons-material/Email';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

/**
 * Displays basic user information: name, profile picture, gender, college,
 * school year, major, languages, and bio; as well as a button allowing for
 * roommate requests, pending request, or connected. TODO: Tie the button to
 * firebase to actually get current connection status and make requests.
 */
export default function UserHeader({ user }) {
	return (
		<Paper variant="outlined" margin={3} padding={3}>
			<Grid container direction={{ xs: 'column', md: 'row' }}
				columns={4} spacing={4}>

				<Grid md={1} display="flex" alignItems="center" justifyContent="center">
					<Avatar sx={{ fontSize: "8vh", minHeight: "15vh", minWidth: "15vh" }}>
						{user.firstName[0]}
					</Avatar>
				</Grid>

				<Grid md={2} display="flex" alignItems="center" justifyContent="center">
					<Stack spacing={1}>
						<Typography variant="h3" align="center">
							{`${user.firstName} ${user.lastName}`}
						</Typography>

						<Typography align="center">
							{[user.gender, user.college, user.schoolYear,
							`Major: ${user.major}`,
							`Languages: ${user.languages.join(", ")}`].join(" · ")}
						</Typography>

						<Typography align="center">{user.bio}</Typography>
					</Stack>
				</Grid>

				<Grid md={1} display="flex" alignItems="center" justifyContent="center">
					<Button variant="contained">Request roommate?</Button>
				</Grid>

				<Grid xs={4}>
					<ContactInfo user={user} />
				</Grid>

			</Grid>
		</Paper>
	)
}


/**
 * Display the user's contact information in the header.
 * TODO: Check if the logged in user has a connection with this user, and if
 * so diplay the private contact info. This should be a firebase rule.
 */
function ContactInfo({ user }) {
	// TODO: when firebase integrated, make sure if users are friends they get
	// private contact info if they are not friends, only get public contact info
	// IMPORTANT: that filtering CANNOT happen on the frontend! the *database*
	// MUST respond only with public contact info if they aren't friends! If the
	// frontend is the one responsible for filtering the private content, we're
	// leaking private info!

	// Switch these two lines to show public or all contact info
	let publicContactInfo = Object.entries(user.contactInfo).filter(([_, val]) => val.pub && val.data !== "");
	// let publicContactInfo = Object.entries(user.contactInfo).filter(([_, val]) => val.data !== "");

	let iconMap = {
		email: EmailIcon,
		phone: SmartphoneIcon,
		discord: HeadsetMicIcon,
		instagram: InstagramIcon,
		linkedin: LinkedInIcon,
		facebook: FacebookIcon
	};

	return (
		<Stack direction="row" justifyContent="space-evenly">

			{publicContactInfo.map(([key, value]) =>
				<Stack alignItems="center" spacing={1} key={key}>
					{React.createElement(iconMap[key], { fontSize: "large" })}
					<Typography>{value.data}</Typography>
				</Stack>
			)}

		</Stack>
	)
}


