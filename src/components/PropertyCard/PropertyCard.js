import * as React from 'react';
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
import {
	addUserPropertyPreference,
	getPropertyListFromUserID,
	deleteUserPropertyMapping,
} from '@/firebase/userLikedProperties';

export default function PropertyCard({ property }) {
	const [user, loading] = useAuthUser();
	const [like, setLike] = useState(false);

	useEffect(() => {
		if (user) {
			getPropertyListFromUserID(user.uid, property.uid)
				.then((res) => {
					console.log(res);
					setLike(res.includes(property.uid));
				})
				.catch((err) => {
					console.log('err', err);
				});
		}
	}, [user, property.uid]);

	const handleLike = (e) => {
		setLike(!like);
		if (like) {
			deleteUserPropertyMapping(user.uid, property.uid);
		} else {
			addUserPropertyPreference(user.uid, property.uid);
		}
	};

	return (
		<Card sx={{ m: '20px', width: 350, height: 370, position: 'relative' }}>
			<CardActionArea href={`/property/${property.uid}`}>
				<CardMedia sx={{ height: '180px' }} image={property.imageUrls[0]} alt="property image" />
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{property.name}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{property.address}
					</Typography>
				</CardContent>
			</CardActionArea>

			<CardActions disableSpacing style={{ position: 'absolute', bottom: '0' }}>
				<IconButton aria-label="add to favorites" onClick={handleLike}>
					{like ? <FavoriteIcon fontSize="large" sx={{ color: 'red' }} /> : <FavoriteIcon fontSize="large" />}
				</IconButton>

				<IconButton aria-label="share">
					<ShareIcon />
				</IconButton>
				<AvatarGroup max={4}>
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
