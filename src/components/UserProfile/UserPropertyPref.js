import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import TextListItem from './TextListItem.js';

import PetsIcon from '@mui/icons-material/Pets';
import SmokingRoomsIcon from '@mui/icons-material/SmokingRooms';
import SmokeFreeIcon from '@mui/icons-material/SmokeFree';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';
import MapIcon from '@mui/icons-material/Map';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SingleBedIcon from '@mui/icons-material/SingleBed';
import ShowerIcon from '@mui/icons-material/Shower';

import PrefIcon from './PrefIcon.js';


/**
 * Displays the user's preferred traits for a property.
 */
export default function UserPropertyPref({ user }) {
	return (
		<Paper variant="outlined" margin={3} padding={3}>
			<Grid container columns={2} spacing={5}>

				<Grid xs={2} display="flex" alignItems="center" justifyContent="center">
					<Typography variant="h4" align="center">
						{user.firstName}&apos;s Property Interests:
					</Typography>
				</Grid>

				<PrefIcon icon={MapIcon} string={`Wants to be ${user.propPref.distance[0]} to ${user.propPref.distance[1]} miles away from ${user.college}`} />
				<PrefIcon icon={AttachMoneyIcon} string={`Has a budget of $${user.propPref.budget[0]} to $${user.propPref.budget[1]} per month`} />
				<PrefIcon icon={SingleBedIcon} string={`Wants a ${user.propPref.numBedrooms} bedroom property`} />
				<PrefIcon icon={ShowerIcon} string={`Wants a ${user.propPref.numBathrooms} bathroom property`} />
				<PropPrefIcon topic="pet friendly" okayWith={user.propPref.petFriendly} goodIcon={PetsIcon} badIcon={DoNotDisturbIcon} />
				<PropPrefIcon topic="smoke free" okayWith={user.propPref.smokingBanned} goodIcon={SmokeFreeIcon} badIcon={SmokingRoomsIcon} />

				<Grid xs={2} display="flex" justifyContent="center">
					<List>
						<TextListItem text={`Wants ${Object.entries(user.propPref.amenities)
							.filter(([_, value]) => value)
							.map(([key, _]) => { if (key === "inUnitLaundry") { return "in unit laundry" } else { return key } })
							.join(", ")} amenities`} />
					</List>
				</Grid>

			</Grid>
		</Paper>
	)
}

/**
 * A wrapper to take a topic, a true or false boolean, and a cooresponding good
 * or bad icon. If the topic is true the goodIcon will be displayed, else the
 * badIcon will be displayed.
 */
function PropPrefIcon({ topic, okayWith, goodIcon, badIcon }) {
	let string = `${okayWith ? "Wants " : "Does not want "} a ${topic} property`
	return (
		<PrefIcon okayWith={okayWith}
			string={string}
			icon={okayWith ? goodIcon : badIcon}
		/>
	)
}

