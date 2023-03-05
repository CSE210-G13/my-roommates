import * as React from 'react';
import { Typography, List, ListSubheader, Divider } from '@mui/material/';
import FriendList from '@/components/FriendRequest';

export default function Friends() {
	const requests = [1, 2, 3];
	const friends = [1, 2, 3, 4, 5];
	return (
		<>
			<List sx={{ width: '100%', bgcolor: 'background.paper' }}>
				<ListSubheader>
					<Typography variant="h5">Friend Requests</Typography>
				</ListSubheader>
				{requests.map((request) => {
					return (
						<>
							<FriendList isRequest={true} />
							<Divider variant="inset" component="li" />
						</>
					);
				})}

				<ListSubheader>
					<Typography variant="h5">Friends</Typography>
				</ListSubheader>
				{friends.map((friend) => {
					return (
						<>
							<FriendList isRequest={false} />
							<Divider variant="inset" component="li" />
						</>
					);
				})}
			</List>
		</>
	);
}
