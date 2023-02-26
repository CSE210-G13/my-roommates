import React from 'react';
import { Button, Stack, ListItem, ListItemText, ListItemAvatar, ListItemButton, Avatar } from '@mui/material/';

export default function FriendList({ isRequest }) {
	return (
		<>
			<ListItem
				disablePadding
				secondaryAction={
					isRequest ? (
						<Stack direction="row" spacing={2}>
							<Button variant="contained" size="small">
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
				<ListItemButton>
					<ListItemAvatar>
						<Avatar></Avatar>
					</ListItemAvatar>
					<ListItemText primary="Somebody" secondary="Jan 9, 2014" />
				</ListItemButton>
			</ListItem>
		</>
	);
}
