import * as React from 'react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import {
	Grid,
	Card,
	CardActionArea,
	CardMedia,
	CardContent,
	Typography,
	CardActions,
	IconButton,
	AvatarGroup,
	Avatar,
} from '@mui/material/';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

import { useAuthUser } from '@/firebase/auth';
import { getUser } from '@/firebase/userDb';
import {
	addUserPropertyPreference,
	getUserListFromPropertyID,
	getPropertyListFromUserID,
	deleteUserPropertyMapping,
} from '@/firebase/userLikedProperties';

export default function PropertyCard({ property }) {
	const [user, loading] = useAuthUser();
	const [like, setLike] = useState(false);
	const [likeUsers, setLikeUsers] = [];
	const [avatarUrls, setAvatarUrls] = useState([]);

	useEffect(() => {
		if (user) {
			getPropertyListFromUserID(user.uid, property.uid)
				.then((res) => {
					setLike(res.includes(property.uid));
				})
				.catch((err) => {
					console.err(err);
				});

			getUserListFromPropertyID(property.uid)
				.then((res) => {
					let urls = [];
					for (const uid of res) {
						getUser(uid).then((u) => {
							urls.push(u.imageUrl);
							setAvatarUrls(urls);
						});
					}
				})
				.catch((err) => console.err(err));
		}
	}, [user, property.uid]);

	const handleLike = () => {
		let newLike = !like;
		setLike(newLike);
		if (newLike) {
			addUserPropertyPreference(user.uid, property.uid);
		} else {
			deleteUserPropertyMapping(user.uid, property.uid);
		}
	};

	return (
		<Card sx={{ m: '20px', width: 350, height: 370, position: 'relative' }}>
			<CardActionArea>
				<Link href={`/property/${property.uid}`}>
					<CardMedia sx={{ height: '180px' }} image={property.imageUrls[0]} alt="property image" />
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							{property.name}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							{property.address}
						</Typography>
					</CardContent>
				</Link>
			</CardActionArea>

			<CardActions disableSpacing style={{ position: 'absolute', bottom: '0' }}>
				<IconButton aria-label="add to favorites" onClick={handleLike}>
					<FavoriteIcon fontSize="large" sx={like ? { color: 'red' } : {}} />
				</IconButton>

				<IconButton aria-label="share">
					<ShareIcon />
				</IconButton>
				<AvatarGroup max={4}>
					{avatarUrls.map((url) => {
						return <Avatar alt="Avatar" src={url} key={url} />;
					})}
					<Avatar alt="Remy Sharp" src="" />
					<Avatar alt="Travis Howard" src="" />
					<Avatar alt="Cindy Baker" src="" />
					<Avatar alt="Agnes Walker" src="" />
					<Avatar alt="Trevor Henderson" src="" />
				</AvatarGroup>
			</CardActions>
		</Card>
	);
}
