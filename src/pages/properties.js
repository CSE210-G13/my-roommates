import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import PropertyFilter from "@/components/PropertyFilter/PropertyFilter";
import PropertyCard from "@/components/PropertyCard";
import { getAllProperties } from "@/firebase/propertyDb";

export default function ComplexGrid(props) {
  const [FilterProperties, setFilterProperties] = useState([0, [], []]);
  if (FilterProperties[1].length > 0) {
    props.properties = FilterProperties[1];
  }

  return (
    <div style={{ display: "flex", padding: "10px 0px 0px 20px" }}>
      <PropertyFilter onFilteringProperties={setFilterProperties} />
      {(FilterProperties.length > 0) & (FilterProperties[0] == 1) ? (
        <div>
          {(FilterProperties.length > 0) & (FilterProperties[1].length > 0) ? (
            <div>
              <h3 style={{ margin: "20px 0px 0px 20px" }}>
                EXACT-MATCH Filtering Result
              </h3>
            </div>
          ) : (
            <h3 style={{ margin: "20px 0px 0px 20px" }}>
              Sorry, there is no EXACT-MATCH result based on your filtering
              preferences...
            </h3>
          )}
          {FilterProperties[2].length > 0 ? (
            <div>
              <h3 style={{ margin: "20px 0px 0px 20px" }}>
                Non-EXACT-MATCH Filtering Result
              </h3>
              <Grid container direction="row" spacing={0} sx={{ px: 5 }}>
                {props.properties.map((property, i) => {
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
            </div>
          ) : (
            <h3 style={{ margin: "20px 0px 0px 20px" }}>
              Sorry, there is no non-EXACT-MATCH based on your filtering
              preferences
            </h3>
          )}
        </div>
      ) : (
        <Grid container direction="row" spacing={0} sx={{ px: 5 }}>
          {props.properties.map((property, i) => {
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
