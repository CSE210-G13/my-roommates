import React from 'react';
import { Button, Stack, ListItem, ListItemText, ListItemAvatar, ListItemButton, Avatar } from '@mui/material/';
import { addUserRequest, acceptRequest } from '@/firebase/requestUser';
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

	const handleReject = () => {
		// TODO: handle removing users from pending_list
	}
	const handleDelete = () => {
		// TODO: handle removing users from accepted_list
	}
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
							<Button variant="outlined" color="error" size="small" onClick={handleReject}>
								Reject
							</Button>
						</Stack>
					) : (
						<Button variant="outlined" color="error" size="small" onClick={handleDelete}>
							Delete
						</Button>
					)
				}>
				<ListItemButton>
					<ListItemAvatar>
						<Avatar src={userInfo.imageUrl}></Avatar>
					</ListItemAvatar>
					<ListItemText primary={userInfo.firstName + ' ' + userInfo.lastName} secondary="Jan 9, 2014" />
				</ListItemButton>
			</ListItem>
		</>
	);
}
