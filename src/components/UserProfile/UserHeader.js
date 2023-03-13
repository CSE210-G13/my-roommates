import React from 'react';
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Stack from "@mui/material/Stack";
import Typography from '@mui/material/Typography';
import Link from 'next/link';

import EmailIcon from '@mui/icons-material/Email';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

import { useAuthUser } from '@/firebase/auth';
import { paperProps } from './UserProfile.js';
import { addUserRequest, checkUserRequest, checkUserPending, checkUserFriends } from '@/firebase/requestUser';
import { User } from '@/firebase/classes';
import { getUser } from '@/firebase/userDb';
import { useState, useEffect } from 'react';

/**
 * Displays basic user information: name, profile picture, gender, college,
 * school year, major, languages, and bio; as well as a button allowing for
 * roommate requests, pending request, or connected. TODO: Tie the button to
 * firebase to actually get current connection status and make requests.
 */
export default function UserHeader({ user }) {	
	const [authUser, loading] = useAuthUser();
	const [userInfo, setUserInfo] = useState(new User());
	const [pending, setPending] = useState(false);
	const [accepted, setAccepted] = useState(false);

	useEffect(() => {
		if (userInfo.uid !== ''){
			checkUserPending(user.uid, userInfo.uid)
				.then((bool) => setPending(bool));
			checkUserRequest(user.uid, userInfo.uid)
				.then((bool) => setAccepted(bool));
		}
	}, [userInfo]);


    useEffect(() => {
        if (authUser) {
            getUser(authUser.uid)
                .then((user) =>  user )
                .then((user) => setUserInfo(user));
        }
    }, [authUser]);

	const handleRequest = () => {
		if (!pending) {
			addUserRequest(user.uid, userInfo.uid);
			setPending(!pending);
		}
	}

	return (
		<Paper variant="outlined" sx={paperProps}>
			<Grid container direction={{ xs: 'column', md: 'row' }}
				columns={4} spacing={4}>

				<Grid md={1} display="flex" alignItems="center" justifyContent="center">
					<Avatar sx={{ fontSize: "5em", minHeight: "2em", minWidth: "2em" }} src={user.imageUrl}>
						{user.firstName[0]}
					</Avatar>
				</Grid>

				<Grid md={2} display="flex" alignItems="center" justifyContent="center">
					<Stack spacing={1}>
						<Typography variant="h3" align="center">
							{`${user.firstName} ${user.lastName}`}
						</Typography>

						<Typography align="center">
							{[user.gender, user.schoolYear, user.college,
							user.major ? `Major: ${user.major}` : "",
							user.languages ? `Languages: ${user.languages.join(", ")}` : ""]
							.filter(x => x).join(" · ")}
						</Typography>

						{user.bio ? <Typography align="center">{user.bio}</Typography> : null}
					</Stack>
				</Grid>

				<Grid md={1} display="flex" alignItems="center" justifyContent="center">
					<Button variant="contained" onClick={handleRequest}>
						{(pending) 
							? 'Pending Request'
							: (accepted) 
								? 'Connected' 
								: 'Request Roommate?'}
					</Button>
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
	let publicContactInfo = [["email", user.email],
	["phone", user.phoneNumber],
	["discord", user.discord],
	["instagram", user.instagram],
	["linkedin", user.linkedin],
	["facebook", user.facebook]]
		.filter(([_, [data, pub]]) => data)  // `&& pub` to only show public data
		.map(([key, [data, _]]) => [key, data]);

	let iconMap = {
		email: EmailIcon,
		phone: SmartphoneIcon,
		discord: HeadsetMicIcon,
		instagram: InstagramIcon,
		linkedin: LinkedInIcon,
		facebook: FacebookIcon
	};

	return (
		<Grid container direction={{ xs: "column", sm: "row" }}
			columns={{
				xs: 1,
				sm: Math.min(2, publicContactInfo.length),
				md: Math.min(3, publicContactInfo.length),
				lg: Math.min(6, publicContactInfo.length)
			}}>

			{publicContactInfo.map(([key, value]) =>
				<Grid xs={1} display="flex" justifyContent="center" alignItems="center" key={key}>
					<Link rel="noopener noreferrer" target="_blank" href={handleToUrl(key, value)}>
						<Stack alignItems="center" spacing={1}>
							{React.createElement(iconMap[key], { fontSize: "large" })}
							<Typography>{value}</Typography>
						</Stack>
					</Link>
				</Grid>
			)}

		</Grid>
	)
}

function handleToUrl(type, handle) {
	switch (type) {
		case "email": return `mailto:${handle}`
		case "phone": return `tel:${handle}`
		case "discord": return `https://www.discord.com`
		case "instagram": return `https://www.instagram.com/${handle}`
		case "linkedin": return `https://www.linkedin.com/in/${handle}`
		case "facebook": return `https://www.facebook.com/${handle}`
		default: return ""
	}
}

