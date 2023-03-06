import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from '@mui/material/Typography';

import MapIcon from '@mui/icons-material/Map';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

import DirectionsTransitIcon from '@mui/icons-material/DirectionsTransit';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import PoolIcon from '@mui/icons-material/Pool';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SingleBedIcon from '@mui/icons-material/SingleBed';
import ShowerIcon from '@mui/icons-material/Shower';

import PrefIcon from './PrefIcon.js';
import { paperProps } from './UserProfile.js';


/**
 * Displays the user's preferred traits for a property.
 */
export default function UserPropertyPref({ user }) {
	let amenityIconMap = {
		airConditioner: ["AC", AcUnitIcon],
		pool: ["a pool", PoolIcon],
		gym: ["a gym", FitnessCenterIcon],
		parking: ["parking", LocalParkingIcon],
		laundry: ["in unit laundry", LocalLaundryServiceIcon],
		transportation: ["to be close to transit", DirectionsTransitIcon]
	}

	return (
		<Paper variant="outlined" sx={paperProps}>
			<Grid container columns={2} spacing={5}>

				<Grid xs={2} display="flex" alignItems="center" justifyContent="center">
					<Typography variant="h4" align="center">
						{user.firstName}&apos;s Property Preferences:
					</Typography>
				</Grid>

				<PrefIcon icon={MapIcon} string={`Wants to be at maximum ${user.maxDistanceToSchool} mile${user.maxDistanceToSchool > 1 ? "s" : ""} away from UCSD`} />
				<PrefIcon icon={AttachMoneyIcon} string={`Has a maximum budget of $${user.maxPropertyPrice} per month`} />
				<PrefIcon icon={SingleBedIcon} string={`Wants a ${user.numBedrooms} bedroom property`} />
				<PrefIcon icon={ShowerIcon} string={`Wants a ${user.numBathrooms} bathroom property`} />

				{Object.entries(user.amenities)
					.filter(([_, wants]) => wants)
					.map(([name, _]) => amenityIconMap[name])
					.map(([name, icon]) =>
						<PrefIcon key={name} icon={icon} string={`Wants ${name}`} />)}

			</Grid>
		</Paper>
	)
}
