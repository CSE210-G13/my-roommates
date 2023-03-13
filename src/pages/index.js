import * as React from "react";
import Grid from "@mui/material/Grid";
import PropertyFilter from "@/components/PropertyFilter/PropertyFilter";
import PropertyCard from "@/components/PropertyCard";
import { getAllProperties } from "@/firebase/propertyDb";
import { useState } from "react";
export default function Home(props) {
  const [FilterProperties, setFilterProperties] = useState([0, [], []]);
  var properties_display = props.properties;
  if (FilterProperties[1].length > 0) {
    properties_display = FilterProperties[1];
  }

  return (
    <div style={{ display: "flex", padding: "10px 0px 0px 20px" }}>
      <PropertyFilter onFilteringProperties={setFilterProperties} />
      {(FilterProperties.length > 0) &
      (FilterProperties[0] == 1) &
      (FilterProperties[1].length > 0) ? (
        <Grid container direction="row" spacing={0} sx={{ px: 5 }}>
          {properties_display.map((property, i) => {
            return (
              <Grid
                item
                display="flex"
                justifyContent="center"
                alignItems="center"
                key={i}
                sm
              >
                <PropertyCard property={property} />
              </Grid>
            );
          })}
        </Grid>
      ) : (
        <Grid container direction="row" spacing={0} sx={{ px: 5 }}>
          {properties_display.map((property, i) => {
            return (
              <Grid
                item
                display="flex"
                justifyContent="center"
                alignItems="center"
                key={i}
                sm
              >
                <PropertyCard property={property} />
              </Grid>
            );
          })}
        </Grid>
      )}
    </div>
  );
}

export async function getStaticProps() {
  const properties = await getAllProperties();
  return {
    props: { properties }, // will be passed to the page component as props
    revalidate: 600, // update cache every 10 minutes
  };
}
