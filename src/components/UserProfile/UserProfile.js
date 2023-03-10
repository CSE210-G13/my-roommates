import Grid from "@mui/material/Unstable_Grid2";

import UserHeader from './UserHeader.js';
import UserHabits from './UserHabits.js';
import UserPropertyPref from './UserPropertyPref.js';
import PropertyCarousel from './PropertyCarousel.js';

/**
 * The properties for Paper components.
 * This is intentionally empty - I'm using default style, but this gives
 * us an easy location to update them if needed.
 */
export let paperProps = {}

/**
 * A component that displays general user information, their preferences in
 * roommates and properties, and properties they like.
 */
export default function UserProfile({ user, likedProperties }) {
  // TODO: Implement property cards and get property data from backend
  // Currently displays property ID out of laziness
  let likedCarousel = null;

  if (likedProperties && likedProperties.length > 0) {
     likedCarousel = <Grid sm={2}>
        <PropertyCarousel properties={likedProperties}
          title={`Properties ${user.firstName} is interested in...`} />
      </Grid>;
  }

  // TODO: union logged in user liked properties with this user's liked properties
  // Deal with getting current user being sync code and getting their property likes as
  // async code
  // <Grid sm={2}>
  //   <PropertyCarousel properties={["prop 1", "prop 2"]}
  //     title={`Properties you and ${user.firstName} are interested in...`} />
  // </Grid>

  return (
    <Grid container direction={{ xs: "column", sm: "row" }}
      columns={2} spacing={10} margin={{ xs: 1, sm: 2 }}>

      <Grid sm={2}>
        <UserHeader user={user} />
      </Grid>

      <Grid sm={1}>
        <UserHabits user={user} />
      </Grid>

      <Grid sm={1}>
        <UserPropertyPref user={user} />
      </Grid>

      {likedCarousel}

    </Grid>
  )
}