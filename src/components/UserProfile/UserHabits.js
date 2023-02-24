import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import List from '@mui/material/List';

import StrollerIcon from '@mui/icons-material/Stroller';
import NoStrollerIcon from '@mui/icons-material/NoStroller';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import EventBusyIcon from '@mui/icons-material/EventBusy';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import NoDrinksIcon from '@mui/icons-material/NoDrinks';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import GroupRemoveIcon from '@mui/icons-material/GroupRemove';
import PetsIcon from '@mui/icons-material/Pets';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';
import SmokingRoomsIcon from '@mui/icons-material/SmokingRooms';
import SmokeFreeIcon from '@mui/icons-material/SmokeFree';

import PrefIcon from './PrefIcon.js';
import TextListItem from './TextListItem.js';
import {paperProps} from './UserHeader.js';

/**
 * Displays the user's preferred traits for a roommate, along with icons for
 * topics they can or cannot tolerate.
 */
export default function UserHabits({ user }) {
	// TODO FIND BETTER NO PETS ICON
	return (
		<Paper variant="outlined" sx={paperProps}>
			<Grid container columns={{ xs: 2, md: 3 }} spacing={5}>

				<Grid xs={2} md={3} display="flex" alignItems="center" justifyContent="center">
					<Typography variant="h4" align="center">
						{user.firstName}&apos;s Lifestyle and Habits:
					</Typography>
				</Grid>

				<HabitPrefIcon topic="children" user={user}
					goodIcon={StrollerIcon} badIcon={NoStrollerIcon} />
				<HabitPrefIcon topic="pets" user={user}
					goodIcon={PetsIcon} badIcon={DoNotDisturbIcon} />
				<HabitPrefIcon topic="smoking" user={user}
					goodIcon={SmokingRoomsIcon} badIcon={SmokeFreeIcon} />
				<HabitPrefIcon topic="parties" user={user}
					goodIcon={EventAvailableIcon} badIcon={EventBusyIcon} />
				<HabitPrefIcon topic="alcohol" user={user}
					goodIcon={LocalBarIcon} badIcon={NoDrinksIcon} />
				<HabitPrefIcon topic="couples" user={user}
					goodIcon={GroupAddIcon} badIcon={GroupRemoveIcon} />

				<Grid xs={2} sm={3} display="flex" justifyContent="center">
					<List>
						<TextListItem text={`${user.firstName}'s hobbies: ${user.lifestyle.hobbies.map((x) => x.toLowerCase()).join(", ")}`} />
						<TextListItem text={`${user.firstName} sleeps at ${user.lifestyle.bedtime}`} />
					</List>
				</Grid>

			</Grid>
		</Paper>
	)
}

/**
 * A wrapper to take a user, the topic, and a cooresponding good or bad
 * icon. If the topic is true in user.roommatePref.okayWith, the goodIcon
 * will be displayed, else the badIcon will be displayed.
 */
function HabitPrefIcon({ topic, user, goodIcon, badIcon }) {
	let okayWith = user.lifestyle.okayWith[topic]
	let string = `${okayWith ? "Okay " : "Not okay "} with ${topic}`
	return (
		<PrefIcon okayWith={okayWith} string={string}
			icon={okayWith ? goodIcon : badIcon} />
	)
}
