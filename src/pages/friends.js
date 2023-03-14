import * as React from 'react';
import { Typography, List, ListSubheader, Divider } from '@mui/material/';
import FriendList from '@/components/FriendRequest';
import { userAcceptedList, userPendingList, acceptRequest } from '@/firebase/requestUser';
import { useAuthUser } from '@/firebase/auth';
import { User } from '@/firebase/classes';
import { useState, useEffect } from 'react';
import { getUser } from '@/firebase/userDb';

export default function Friends() {
	const [user, loading] = useAuthUser();

	const [userInfo, setUserInfo] = useState(new User());

	const [requests, setRequests] = useState([]);
	const [friends, setFriends] = useState([]);

    useEffect(() => {
        if (user) {
            getUser(user.uid)
                .then((user) =>  user )
                .then((user) => setUserInfo(user));
        }
    }, [user]);
	
	useEffect(() => {
		if (userInfo.uid !== '')
		{
			userPendingList(userInfo.uid)
				.then((reqs) => setRequests(reqs))
				.catch(err=>console.err(err));
			userAcceptedList(userInfo.uid)
				.then((reqs) => {setFriends(reqs);})
				.catch(err=>console.err(err));			
		}
	}, [userInfo.uid]);

	const handleAccept = (uid, user) => {
		acceptRequest(uid, user);
		setRequests(requests.filter((id) => id !== uid));
		setFriends([...friends, uid]);
	}
	return (
		<>
			<List sx={{ width: '100%', bgcolor: 'background.paper' }}>
				<ListSubheader>
					<Typography variant="h5">Friend Requests</Typography>
				</ListSubheader>
				{requests.map((request) => {
					return (
						<>
							<FriendList isRequest={true} uid={request} userInfoUID={userInfo.uid} handleAccept={handleAccept}/>
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
							<FriendList isRequest={false} uid={friend} />
							<Divider variant="inset" component="li" />
						</>
					);
				})}
			</List>
		</>
	);
}