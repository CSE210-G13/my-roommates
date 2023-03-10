import * as React from 'react';
import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Divider, Container } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import PetsIcon from '@mui/icons-material/Pets';
import SmokeFreeIcon from '@mui/icons-material/SmokeFree';
import MapIcon from '@mui/icons-material/Map';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SingleBedIcon from '@mui/icons-material/SingleBed';
import ShowerIcon from '@mui/icons-material/Shower';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import PoolIcon from '@mui/icons-material/Pool';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';

import RoommateGrid from '@/components/RoommateGrid';
import { useAuthUser } from '@/firebase/auth';
import { getProperty } from '@/firebase/propertyDb';
import {
	addUserPropertyPreference,
	getPropertyListFromUserID,
	deleteUserPropertyMapping,
	getUserListFromPropertyID,
} from '@/firebase/userLikedProperties';
import { getUser } from '@/firebase/userDb';

const iconStyle = { fontSize: 40 };
const cardStyle = { backgroundColor: '#F8F8F2' };
function PrefIcon({ icon, string }) {
	return (
		<Stack direction="row" spacing={1} padding={2} alignItems="center">
			{icon}
			<Typography fontSize="1.15rem">{string}</Typography>
		</Stack>
	);
}

export default function PropertyDetails({ property, users }) {
	const [user, loading] = useAuthUser();
	const [like, setLike] = useState(false);

	useEffect(() => {
		if (user) {
			getPropertyListFromUserID(user.uid, property.uid)
				.then((res) => {
					setLike(res.includes(property.uid));
				})
				.catch((err) => {
					console.err('err', err);
				});
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

	const x = [1, 2, 3];

	return (
		<Container maxWidth="false" sx={{ m: '50px', width: 'auto' }}>
			<div style={cardStyle}>
				<Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2} py={3}>
					<p></p>
					<Typography variant="h4">{property.name}</Typography>
					<IconButton aria-label="add to favorites" onClick={handleLike}>
						<FavoriteIcon fontSize="large" sx={like ? { color: 'red' } : {}} />
					</IconButton>
				</Stack>

				<Divider />

				<Grid container direction="row" justifyContent="space-around" alignItems="center" spacing={4}>
					<Grid item xs={12} sm={6} md={5} xl={4}>
						<Carousel navButtonsAlwaysVisible sx={{ maxWidth: '600px', margin: '50px' }}>
							{x &&
								x.map((obj, i) => {
									return (
										<CardMedia
											sx={{ height: '100%', width: '100%' }}
											component="img"
											image={property.imageUrls[0]}
											alt="property1.jpg"
											key={i}
										/>
									);
								})}
						</Carousel>
					</Grid>

					<Grid item xs={12} sm={6} md={7} xl={8}>
						<Typography variant="h5" mt={3}>
							Information
						</Typography>
						<Grid container direction="row" justifyContent="flex-start" alignItems="flex-start" spacing={1}>
							<Grid item xs={12} md={4} lg={4}>
								<PrefIcon icon={<AttachMoneyIcon sx={iconStyle} />} string={`${property.price} / month`} />
							</Grid>
							<Grid item xs={12} md={4} xl={4}>
								<PrefIcon
									icon={<SingleBedIcon sx={iconStyle} />}
									string={`${property.numOfBedroom} Bedroom(s)`}
								/>
							</Grid>
							<Grid item xs={12} md={4} xl={4}>
								<PrefIcon
									icon={<ShowerIcon sx={iconStyle} />}
									string={`${property.numOfBathroom} Bathroom(s)`}
								/>
							</Grid>
							<Grid item xs={12} md={4} xl={4}>
								<PrefIcon icon={<MapIcon sx={iconStyle} />} string={property.address} />
							</Grid>
							<Grid item xs={12} md={4} xl={2}>
								<PrefIcon icon={<SmartphoneIcon sx={iconStyle} />} string={property.phoneNumber} />
							</Grid>
						</Grid>

						<Divider />
						<Typography variant="h5" mt={3}>
							Amenties
						</Typography>
						<Grid container direction="row" justifyContent="flex-start" spacing={1}>
							{property.allowPets ? (
								<Grid item xs={12} md={4} xl={2}>
									<PrefIcon icon={<PetsIcon sx={iconStyle} />} string={'Pets Friendly'} />
								</Grid>
							) : null}
							{property.amenities.allowSmoking ? (
								<Grid item xs={12} md={4} xl={2}>
									<PrefIcon icon={<SmokeFreeIcon sx={iconStyle} />} string={'Smoke Free'} />
								</Grid>
							) : null}
							{property.amenities.airConditioner ? (
								<Grid item xs={12} md={4} xl={2}>
									<PrefIcon icon={<AcUnitIcon sx={iconStyle} />} string={'Air Conditioner'} />
								</Grid>
							) : null}
							{property.amenities.gym ? (
								<Grid item xs={12} md={4} xl={2}>
									<PrefIcon icon={<FitnessCenterIcon sx={iconStyle} />} string={'Fitness Center'} />
								</Grid>
							) : null}
							{property.amenities.laundry ? (
								<Grid item xs={12} md={4} xl={2}>
									<PrefIcon icon={<LocalLaundryServiceIcon sx={iconStyle} />} string={'Indoor Laundry'} />
								</Grid>
							) : null}
							{property.amenities.parking ? (
								<Grid item xs={12} md={4} xl={2}>
									<PrefIcon icon={<LocalParkingIcon sx={iconStyle} />} string={'Parking'} />
								</Grid>
							) : null}
							{property.amenities.pool ? (
								<Grid item xs={12} md={4} xl={2}>
									<PrefIcon icon={<PoolIcon sx={iconStyle} />} string={'Swimming Pool'} />
								</Grid>
							) : null}
							{property.amenities.transportation ? (
								<Grid item xs={12} md={4} xl={2}>
									<PrefIcon icon={<DirectionsBusIcon sx={iconStyle} />} string={'Public Transportation'} />
								</Grid>
							) : null}
						</Grid>
					</Grid>
				</Grid>
			</div>

			<div style={cardStyle}>
				<Typography variant="h5" align="left" mt={5} pt={3} pl={3}>
					People interested in {property.name}
				</Typography>
				{users.length > 0 ? (
					<RoommateGrid users={users} />
				) : (
					<Typography variant="h6" align="center" mb={5} py={8}>
						No user likes this property yet
					</Typography>
				)}
			</div>
		</Container>
	);
}

export async function getServerSideProps(context) {
	let property = await getProperty(context.params.uid);
	let userIdList = await getUserListFromPropertyID(property.uid);
	let users = [];
	for (const uid of userIdList) {
		const user = await getUser(uid);
		users.push(user);
	}
	return {
		props: {
			property,
			users,
		},
	};
}
