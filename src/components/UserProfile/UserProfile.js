import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Unstable_Grid2";
import StrollerIcon from '@mui/icons-material/Stroller';
import NoStrollerIcon from '@mui/icons-material/NoStroller';
import PetsIcon from '@mui/icons-material/Pets';
import SmokingRoomsIcon from '@mui/icons-material/SmokingRooms';
import SmokeFreeIcon from '@mui/icons-material/SmokeFree';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import EventBusyIcon from '@mui/icons-material/EventBusy';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import NoDrinksIcon from '@mui/icons-material/NoDrinks';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import GroupRemoveIcon from '@mui/icons-material/GroupRemove';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';

export default function UserProfile({ user }) {
  return (
    <Grid container direction={{ xs: "column", sm: "row" }} columns={2} spacing={10} margin={2}>
      <Grid sm={2}>
        <UserHeader user={user} />
      </Grid>
      <Grid sm={1}>
        <UserProperty user={user} />
      </Grid>
      <Grid sm={1}>
        <UserRoommatePref user={user} />
      </Grid>
    </Grid>
  )
}

function UserHeader({ user }) {
  return (
    <Grid container
      direction={{ xs: 'column', sm: 'row' }}
      columns={4}
      spacing={4}
      padding={4}
      bgcolor='lightgray'
      borderRadius={4}>
      <Grid sm={1} display="flex" alignItems="center" justifyContent="center">
        <Avatar sx={{ fontSize: "8vh", minHeight: "15vh", minWidth: "15vh" }}>{user.firstName[0]}</Avatar>
      </Grid>
      <Grid sm={2} display="flex" alignItems="center" justifyContent="center">
        <Stack spacing={1}>
          <h1>{`${user.firstName} ${user.lastName}`}</h1>
          <p>{[user.gender, user.college, user.schoolYear, `Major: ${user.major}`, `Languages: ${user.languages.join(", ")}`].join(" - ")}</p>
          <p>{user.bio}</p>
        </Stack>
      </Grid>
      <Grid sm={1} display="flex" alignItems="center" justifyContent="center">
        <Button variant="contained">Request roommate?</Button>
      </Grid>
    </Grid>
  )
}

function UserProperty({ user }) {
  // TODO FIND NO PETS ICON
  return (
    <Grid container columns={{ xs: 2, sm: 3 }} bgcolor='lightgray' borderRadius={4} padding={4}>
      <Grid xs={2} sm={3} display="flex" alignItems="center" justifyContent="center">
        <h2>{user.firstName}'s Roommate Interests:</h2>
      </Grid>
      <PrefIcon topic="children" arr={user.roommatePref.okayWith} goodIcon={<StrollerIcon />} badIcon={<NoStrollerIcon />} />
      <PrefIcon topic="pets" arr={user.roommatePref.okayWith} goodIcon={<PetsIcon />} badIcon={<DoNotDisturbIcon />} />
      <PrefIcon topic="smoking" arr={user.roommatePref.okayWith} goodIcon={<SmokingRoomsIcon />} badIcon={<SmokeFreeIcon />} />
      <PrefIcon topic="parties" arr={user.roommatePref.okayWith} goodIcon={<EventAvailableIcon />} badIcon={<EventBusyIcon />} />
      <PrefIcon topic="alcohol" arr={user.roommatePref.okayWith} goodIcon={<LocalBarIcon />} badIcon={<NoDrinksIcon />} />
      <PrefIcon topic="couples" arr={user.roommatePref.okayWith} goodIcon={<GroupAddIcon />} badIcon={<GroupRemoveIcon />} />
    </Grid>
  )
}

function UserRoommatePref({ user }) {
  return (
    <p>property interests (TODO)</p>
  )
}

function PrefIcon({ topic, arr, goodIcon, badIcon }) {
  let okayWith = arr[topic]
  return (
    <Grid xs={1} display="flex" alignItems="center" justifyContent="center">
      <Stack spacing={1} alignItems="center">
        {okayWith ? goodIcon : badIcon}
        <p align="center">{okayWith ? "Okay " : "Not okay "} with {topic}</p>
      </Stack>
    </Grid>
  )
}

