import Grid from "@mui/material/Unstable_Grid2";

import RoommateCard from './RoommateCard.js';

export default function RoommateGrid({ users }) {
  return (
    <Grid container columns={{ xs: 1, sm: 2, md: 3 }} spacing={10}>
      {users
        .map((x, i) =>
          <Grid key={"roommate " + i.toString()}
            display="flex"
            justifyContent="center"
            alignItems="center" xs={1}>
            <RoommateCard user={x} />
          </Grid>)}
    </Grid>
  )
}
