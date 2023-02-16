import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Unstable_Grid2";

export default function UserProfile({user}) {
  return (
    <Grid container columns={2} spacing={10} margin={2}>
      <Grid xs={2}>
        <UserHeader user={user}/>
      </Grid>
      <Grid>
        <UserProperty user={user}/>
      </Grid>
      <Grid>
        <UserRoommatePref user={user}/>
      </Grid>
    </Grid>
  )
}

function UserHeader({user}) {
  return (
    <Stack
      direction={{xs: 'column', sm: 'row'}}
      alignItems="center"
      justifyContent="space-between"
      spacing={4}
      padding={4}
      bgcolor='lightgray'
      borderRadius={4}
    >
      <Avatar>{user.name[0]}</Avatar>
      <Stack spacing={1}>
        <h1>{user.name}</h1>
        <p>{user.summary}</p>
        <p>{user.bio}</p>
      </Stack>
      <Button variant="contained">Request roommate?</Button>
    </Stack>
  )
}

function UserProperty({user}) {
  return (
    <p>apartment interests (TODO)</p>
  )
}

function UserRoommatePref({user}) {
  return (
    <p>property interests (TODO)</p>
  )
}