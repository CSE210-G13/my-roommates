import * as React from 'react';
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

export default function PropertyCard({ property }) {
	return (
		<Card sx={{ m: '20px', width: 345, height: 380 }}>
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

			<CardActions disableSpacing>
				<IconButton aria-label="add to favorites">
					<FavoriteIcon />
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
