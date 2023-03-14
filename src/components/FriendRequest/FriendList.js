import React from 'react';
import { Button, Stack, ListItem, ListItemText, ListItemAvatar, ListItemButton, Avatar, Link } from '@mui/material/';
import { getUser } from '@/firebase/userDb';
import { User } from '@/firebase/classes';
import { useState, useEffect } from 'react';

export default function FriendList({ isRequest, uid, userInfoUID, handleAccept }) {
	const [userInfo, setUserInfo] = useState(new User());

	useEffect(() => {
		getUser(uid)
			.then((u) => u)
			.then((u) => setUserInfo(u));
	}, []);

	return (
		<>
			<ListItem
				disablePadding
				secondaryAction={
					isRequest ? (
						<Stack direction="row" spacing={2}>
							<Button variant="contained" size="small" onClick={() => handleAccept(uid, userInfoUID)}>
								Accept
							</Button>
							<Button variant="outlined" color="error" size="small">
								Reject
							</Button>
						</Stack>
					) : (
						<Button variant="outlined" color="error" size="small">
							Delete
						</Button>
					)
				}>
				<ListItem>
					<ListItemAvatar>
						<Avatar src={userInfo?.imageUrl ? userInfo.imageUrl : ''}></Avatar>
					</ListItemAvatar>
					<ListItemText
						primary={userInfo.firstName + ' ' + userInfo.lastName}
						secondary={[userInfo.gender, userInfo.schoolYear, userInfo.college, userInfo.major]
							.filter((x) => x !== '')
							.join(' · ')}
					/>
				</ListItem>
			</ListItem>
			<Link href={`/user/${userInfo.uid}`} passHref>
				<Button sx={{ py: 0, ml: '64px' }}>View Profile</Button>
			</Link>
		</>
	);
}
