import Grid from "@mui/material/Unstable_Grid2";

import UserHeader from './UserHeader.js';
import UserHabits from './UserHabits.js';
import UserPropertyPref from './UserPropertyPref.js';
import PropertyCarousel from './PropertyCarousel.js';

import { getPropertyListFromUserID } from '@/firebase/userLikedProperties';


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
export default function UserProfile({ user, likedProperties, currentUserUID }) {
  // TODO: Implement property cards and get property data from backend
  // Currently displays property ID out of laziness
  let likedCarousel = null;

  if (likedProperties && likedProperties.length > 0) {
    likedCarousel = <Grid sm={2}>
      <PropertyCarousel properties={likedProperties}
        title={`Properties ${user.firstName} is interested in...`} />
    </Grid>;

    if (currentUserUID) {
      getPropertyListFromUserID(currentUserUID).then((currentUserLikedUIDs) => {
        console.log(currentUserLikedUIDs);
        console.log(likedProperties.map((p) => p.uid))
        let commonProperties = likedProperties.filter((prop) => currentUserLikedUIDs.includes(prop.uid));
        console.log(commonProperties);
        if (commonProperties.length > 0) {
          // I now have the data, but right now I'm in an async context inside the promise
          // the react component has already been rendered
          // I'm unsure how to add this element into the tree without huge errors
          
          // const root = hydrateRoot(document.getElementById("commonProps"), <Grid sm={2}>
          //   <PropertyCarousel properties={commonProperties}
          //     title={`Properties you and ${user.firstName} are interested in...`} />
          // </Grid>);
        }
      })
    }
  }


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

      <div id="commonProps" />

    </Grid>
  )
}