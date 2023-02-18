import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Unstable_Grid2";

export default function UserProfile({user}) {
  return (
    <Grid container direction={{xs: "column", sm: "row"}} columns={2} spacing={10} margin={2}>
      <Grid sm={2}>
        <UserHeader user={user}/>
      </Grid>
      <Grid sm={1}>
        <UserProperty user={user}/>
      </Grid>
      <Grid sm={1}>
        <UserRoommatePref user={user}/>
      </Grid>
    </Grid>
  )
}

function UserHeader({user}) {
  return (
    <Grid container
      direction={{xs: 'column', sm: 'row'}}
      columns={4}
      spacing={4}
      padding={4}
      bgcolor='lightgray'
      borderRadius={4}>
      <Grid sm={1} display="flex" alignItems="center" justifyContent="center">
        <Avatar sx={{minHeight: "15vh", minWidth: "15vh"}}>{user.name[0]}</Avatar>
      </Grid>
      <Grid sm={2} display="flex" alignItems="center" justifyContent="center">
        <Stack spacing={1}>
          <h1>{user.name}</h1>
          <p>{user.summary}</p>
          <p>{user.bio}</p>
        </Stack>
      </Grid>
      <Grid sm={1} display="flex" alignItems="center" justifyContent="center">
        <Button variant="contained">Request roommate?</Button>
      </Grid>
    </Grid>
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