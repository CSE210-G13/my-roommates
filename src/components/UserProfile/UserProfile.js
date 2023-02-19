import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import Carousel from 'react-material-ui-carousel';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
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
import MapIcon from '@mui/icons-material/Map';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SingleBedIcon from '@mui/icons-material/SingleBed';
import ShowerIcon from '@mui/icons-material/Shower';
import EmailIcon from '@mui/icons-material/Email';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import React from 'react';

export default function UserProfile({ user }) {
  return (
    <Grid container direction={{ xs: "column", sm: "row" }} columns={2} spacing={10} margin={{ xs: 1, sm: 2 }}>
      <Grid sm={2}>
        <UserHeader user={user} />
      </Grid>
      <Grid sm={2}>
        <ContactInfo user={user} />
      </Grid>
      <Grid sm={1}>
        <UserRoommatePref user={user} />
      </Grid>
      <Grid sm={1}>
        <UserProperty user={user} />
      </Grid>
      <Grid sm={2}>
        <PropertyCarousel properties={user.interestedProp} title={`Properties ${user.firstName} is interested in...`} />
      </Grid>
      <Grid sm={2}>
        <PropertyCarousel properties={user.interestedProp} title={`Properties you and ${user.firstName} are interested in...`} />
      </Grid>
    </Grid>
  )
}

function ContactInfo({ user }) {
  // TODO: when firebase integrated, make sure if users are friends they get
  // private contact info if they are not friends, only get public contact info
  // IMPORTANT: that filtering CANNOT happen on the frontend! the *database*
  // MUST respond only with public contact info if they aren't friends! If the
  // frontend is the one responsible for filtering the private content, we're
  // leaking private info!

  // Switch these two lines to show public or all contact info
  let publicContactInfo = Object.entries(user.contactInfo).filter(([_, val]) => val.pub && val.data !== "");
  // let publicContactInfo = Object.entries(user.contactInfo).filter(([_, val]) => val.data !== "");

  let iconMap = {
    email: EmailIcon,
    phone: SmartphoneIcon,
    discord: HeadsetMicIcon,
    instagram: InstagramIcon,
    linkedin: LinkedInIcon,
    facebook: FacebookIcon
  };

  return (
    <Stack
      bgcolor="lightgray"
      borderRadius={4}
      padding={4}
      spacing={4}>
      <Typography variant="h5">Contact Info</Typography>
      <Stack
        direction="row"
        justifyContent="space-evenly"
      >
        {publicContactInfo.map(([key, value]) =>
          <Stack alignItems="center" spacing={1} key={key}>
            {React.createElement(iconMap[key], {fontSize: "large"})}
            <Typography>{value.data}</Typography>
          </Stack>
        )}
      </Stack>
    </Stack>
  )
}

function UserHeader({ user }) {
  return (
    <Grid container
      direction={{ xs: 'column', md: 'row' }}
      columns={4}
      spacing={4}
      padding={4}
      bgcolor='lightgray'
      borderRadius={4}>
      <Grid md={1} display="flex" alignItems="center" justifyContent="center">
        <Avatar sx={{ fontSize: "8vh", minHeight: "15vh", minWidth: "15vh" }}>{user.firstName[0]}</Avatar>
      </Grid>
      <Grid md={2} display="flex" alignItems="center" justifyContent="center">
        <Stack spacing={1}>
          <Typography variant="h3" align="center">{`${user.firstName} ${user.lastName}`}</Typography>
          <Typography align="center">{[user.gender, user.college, user.schoolYear, `Major: ${user.major}`, `Languages: ${user.languages.join(", ")}`].join(" - ")}</Typography>
          <Typography align="center">{user.bio}</Typography>
        </Stack>
      </Grid>
      <Grid md={1} display="flex" alignItems="center" justifyContent="center">
        <Button variant="contained">Request roommate?</Button>
      </Grid>
    </Grid>
  )
}

function UserRoommatePref({ user }) {
  // TODO FIND NO PETS ICON
  return (
    <Grid container columns={{ xs: 2, md: 3 }} bgcolor='lightgray' borderRadius={4} spacing={5}>
      <Grid xs={2} md={3} display="flex" alignItems="center" justifyContent="center">
        <Typography variant="h4" align="center">{user.firstName}'s Roommate Interests:</Typography>
      </Grid>
      <RoommatePrefIcon topic="children" user={user} goodIcon={StrollerIcon} badIcon={NoStrollerIcon} />
      <RoommatePrefIcon topic="pets" user={user} goodIcon={PetsIcon} badIcon={DoNotDisturbIcon} />
      <RoommatePrefIcon topic="smoking" user={user} goodIcon={SmokingRoomsIcon} badIcon={SmokeFreeIcon} />
      <RoommatePrefIcon topic="parties" user={user} goodIcon={EventAvailableIcon} badIcon={EventBusyIcon} />
      <RoommatePrefIcon topic="alcohol" user={user} goodIcon={LocalBarIcon} badIcon={NoDrinksIcon} />
      <RoommatePrefIcon topic="couples" user={user} goodIcon={GroupAddIcon} badIcon={GroupRemoveIcon} />
      <Grid xs={2} sm={3} display="flex" justifyContent="center">
        <List>
          <TextListItem text={`Prefers ${user.roommatePref.gender.toLowerCase()} roommates`} />
          <TextListItem text={`Prefers roommates who are also interested in ${user.roommatePref.hobbies.map((x) => x.toLowerCase()).join(", ")}`} />
          <TextListItem text={`Prefers ${user.roommatePref.college} roommates`} />
          <TextListItem text={`Prefers roommates majoring in ${user.roommatePref.major}`} />
          <TextListItem text={`Prefers ${user.roommatePref.schoolYear.toLowerCase()} students`} />
          <TextListItem text={`Prefers roommates who speak ${user.roommatePref.languages.join(", ")}`} />
          <TextListItem text={`Prefers roommates who are ${user.roommatePref.cleanliness}/5 on cleanliness`} />
          <TextListItem text={`Prefers roommates who are moving in around ${user.roommatePref.moveInDate}`} />
          <TextListItem text={`Prefers roommates who sleep around ${user.roommatePref.bedtime}`} />
        </List>
      </Grid>
    </Grid>
  )
}

function TextListItem({ text }) {
  return <ListItem><ListItemText align="center" primary={text} /></ListItem>
}

function RoommatePrefIcon({ topic, user, goodIcon, badIcon }) {
  let okayWith = user.roommatePref.okayWith[topic]
  let string = `${okayWith ? "Okay " : "Not okay "} with ${topic}`
  return (
    <PrefIcon okayWith={okayWith}
      string={string}
      icon={okayWith ? goodIcon : badIcon}
    />
  )
}

function UserProperty({ user }) {
  return (
    <Grid container columns={2} bgcolor='lightgray' borderRadius={4} spacing={5}>
      <Grid xs={2} display="flex" alignItems="center" justifyContent="center">
        <Typography variant="h4" align="center">{user.firstName}'s Property Interests:</Typography>
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
  )
}

function PropPrefIcon({ topic, okayWith, goodIcon, badIcon }) {
  let string = `${okayWith ? "Wants " : "Does not want "} a ${topic} property`
  return (
    <PrefIcon okayWith={okayWith}
      string={string}
      icon={okayWith ? goodIcon : badIcon}
    />
  )
}

function PrefIcon({ icon, string }) {
  return (
    <Grid xs={1} display="flex" alignItems="center" justifyContent="center">
      <Stack spacing={1} alignItems="center">
        {React.createElement(icon, {fontSize: "large"})}
        <Typography align="center">{string}</Typography>
      </Stack>
    </Grid>
  )
}

function PropertyCarousel({ properties, title }) {
  let interestedProp = properties;

  // from https://stackoverflow.com/a/44069560
  function groupArr(data, n) {
    let group = [];
    for (let i = 0, j = 0; i < data.length; i++) {
      if (i >= n && i % n === 0)
        j++;
      group[j] = group[j] || [];
      group[j].push(data[i])
    }
    return group;
  }

  // TODO: make reactive by changing groupNumber based on screen size
  let groupsOf3 = groupArr(interestedProp, 3);

  return (
    <Stack
      bgcolor="lightgray"
      borderRadius={4}
      padding={5}
      spacing={7}>
      <Typography variant="h5">{title}</Typography>
      <Carousel navButtonsAlwaysVisible={true} autoPlay={false} animation="slide">
        {
          groupsOf3
            .map((items) => <Stack key={"group " + items[0] + title} direction="row" alignItems="center" justifyContent="space-evenly">
              {items.map((x) => <Typography key={"prop " + x + title}>{x}</Typography>)}
            </Stack>)
        }
      </Carousel>
    </Stack>
  )
}
