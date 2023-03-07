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

import { useAuthUser } from '@/firebase/auth';
import { getProperty } from '@/firebase/propertyDb';
import {
	addUserPropertyPreference,
	getPropertyListFromUserID,
	deleteUserPropertyMapping,
} from '@/firebase/userLikedProperties';

function PrefIcon({ icon, string }) {
	return (
		<Stack direction="row" spacing={1} padding={2} alignItems="center">
			{icon}
			<Typography fontSize="1.15rem">{string}</Typography>
		</Stack>
	);
}

function groupArr(data, n) {
	return data
		.map((item, i) => {
			const groupIndex = Math.floor(i / n);
			return {
				groupIndex: groupIndex,
				item: item,
			};
		})
		.reduce((groups, entry) => {
			groups[entry.groupIndex] = [...(groups[entry.groupIndex] ? groups[entry.groupIndex] : []), entry.item];
			return groups;
		}, []);
}

export default function PropertyDetails({ property }) {
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

	const x = [1, 2, 3];

	let groupsOf3 = groupArr(x, 4);

	return (
		<Container maxWidth="false" sx={{  m: '80px', width: 'auto', backgroundColor: '#F8F8F2' }}>
			<Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2} py={3}>
				<p></p>
				<Typography variant="h4">{property.name}</Typography>
				<IconButton aria-label="add to favorites" onClick={handleLike}>
					{like ? <FavoriteIcon fontSize="large" sx={{ color: 'red' }} /> : <FavoriteIcon fontSize="large" />}
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
							<PrefIcon icon={<AttachMoneyIcon sx={{ fontSize: 40 }} />} string={`${property.price} / month`} />
						</Grid>
						<Grid item xs={12} md={4} xl={4}>
							<PrefIcon
								icon={<SingleBedIcon sx={{ fontSize: 40 }} />}
								string={`${property.numOfBedroom} Bedroom(s)`}
							/>
						</Grid>
						<Grid item xs={12} md={4} xl={4}>
							<PrefIcon
								icon={<ShowerIcon sx={{ fontSize: 40 }} />}
								string={`${property.numOfBathroom} Bathroom(s)`}
							/>
						</Grid>
						<Grid item xs={12} md={4} xl={4}>
							<PrefIcon icon={<MapIcon sx={{ fontSize: 40 }} />} string={property.address} />
						</Grid>
						<Grid item xs={12} md={4} xl={2}>
							<PrefIcon icon={<SmartphoneIcon sx={{ fontSize: 40 }} />} string={property.phoneNumber} />
						</Grid>
					</Grid>

					<Divider />
					<Typography variant="h5" mt={3}>
						Amenties
					</Typography>
					<Grid container direction="row" justifyContent="flex-start" spacing={1}>
						{property.allowPets ? (
							<Grid item xs={12} md={4} xl={2}>
								<PrefIcon icon={<PetsIcon sx={{ fontSize: 40 }} />} string={'Pets Friendly'} />
							</Grid>
						) : null}
						{property.amenities.allowSmoking ? (
							<Grid item xs={12} md={4} xl={2}>
								<PrefIcon icon={<SmokeFreeIcon sx={{ fontSize: 40 }} />} string={'Smoke Free'} />
							</Grid>
						) : null}
						{property.amenities.airConditioner ? (
							<Grid item xs={12} md={4} xl={2}>
								<PrefIcon icon={<AcUnitIcon sx={{ fontSize: 40 }} />} string={'Air Conditioner'} />
							</Grid>
						) : null}
						{property.amenities.gym ? (
							<Grid item xs={12} md={4} xl={2}>
								<PrefIcon icon={<FitnessCenterIcon sx={{ fontSize: 40 }} />} string={'Fitness Center'} />
							</Grid>
						) : null}
						{property.amenities.laundry ? (
							<Grid item xs={12} md={4} xl={2}>
								<PrefIcon icon={<LocalLaundryServiceIcon sx={{ fontSize: 40 }} />} string={'Indoor Laundry'} />
							</Grid>
						) : null}
						{property.amenities.parking ? (
							<Grid item xs={12} md={4} xl={2}>
								<PrefIcon icon={<LocalParkingIcon sx={{ fontSize: 40 }} />} string={'Parking'} />
							</Grid>
						) : null}
						{property.amenities.pool ? (
							<Grid item xs={12} md={4} xl={2}>
								<PrefIcon icon={<PoolIcon sx={{ fontSize: 40 }} />} string={'Swimming Pool'} />
							</Grid>
						) : null}
						{property.amenities.transportation ? (
							<Grid item xs={12} md={4} xl={2}>
								<PrefIcon icon={<DirectionsBusIcon sx={{ fontSize: 40 }} />} string={'Public Transportation'} />
							</Grid>
						) : null}
					</Grid>
				</Grid>
			</Grid>

			<Card sx={{ height: '10vh', display: 'flex' }}>
				<Typography
					variant="h5"
					color="text.priamry"
					align="left"
					sx={{ paddingX: '3vw', display: 'flex', alignItems: 'center' }}>
					People interested in Costa Verde Towers
				</Typography>
			</Card>

			<Stack bgcolor="#F8F8F2" padding={5} spacing={7}>
				<Carousel navButtonsAlwaysVisible={true} autoPlay={false} animation="slide">
					{groupsOf3.map((items) => (
						<Stack key={'group ' + items[0]} direction="row" alignItems="center" justifyContent="space-evenly">
							{items.map((x) => (
								<Card key={'prop ' + x}>
									<CardActionArea sx={{ display: 'flex' }}>
										<Avatar alt="Remy Sharp" src="" sx={{ width: 50, height: 50, margin: '25px' }} />
										<Typography
											variant="h5"
											color="text.priamry"
											align="left"
											sx={{ paddingX: '2vw', alignItems: 'center' }}>
											Remy Sharp
										</Typography>
									</CardActionArea>
								</Card>
							))}
						</Stack>
					))}
				</Carousel>
			</Stack>
		</Container>
	);
}

export async function getServerSideProps(context) {
	let property = await getProperty(context.params.uid);

	return {
		props: {
			property,
		},
	};
}
