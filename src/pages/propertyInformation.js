import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import Avatar from "@mui/material/Avatar";


//import _ from "lodash";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function ComplexGrid() {
  const callme = () => {
    console.log("hi");
  };
  const x = [1, 2, 3, 4, 5, 6];

  return (
    <Card
      sx={{ m: "80px", width: "auto", backgroundColor: "#F8F8F2" }}
      onClick={() => callme()}
    >
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Grid item>
          <Carousel
            navButtonsAlwaysVisible
            sx={{ width: "400px", margin: "50px" }}
          >
            {x &&
              x.map((obj, i) => {
                return (
                  <CardMedia
                    sx={{ height: "400px", width: "400px" }}
                    component="img"
                    image="https://www.w3schools.com/tags/img_girl.jpg"
                    alt="property1.jpg"
                    key={i}
                  />
                );
              })}
          </Carousel>
        </Grid>
        <Grid item>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Coste Verde
            </Typography>
            <Typography variant="body2" color="text.secondary">
              9500 Gilman Dr, La Jolla, CA, 92037
            </Typography>
          </CardContent>
        </Grid>
      </Grid>

      <Card sx={{ height: "10vh", display: "flex" }}>
        <Typography
          variant="h5"
          color="text.priamry"
          align="left"
          sx={{ paddingX: "1vw", display: "flex", alignItems: "center" }}
        >
          People interested in Costa Verde Towers
        </Typography>
      </Card>

      <Carousel navButtonsAlwaysVisible sx={{ width: "auto", padding: "50px" }}>
        {x &&
          x.map((obj, i) => {
            return (
              <Card
                sx={{
                  display: "flex",
                  padding: "1vh",
                  width: "400px",
                  //margin: "50px",
                }}
                key={i}
              >
                <CardActionArea sx={{ display: "flex" }}>
                  <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 50, height: 50, margin: "20px" }}
                  />
                  <Typography
                    variant="h5"
                    color="text.priamry"
                    align="left"
                    sx={{ paddingX: "2vw", alignItems: "center" }}
                  >
                   Remy Sharp
                  </Typography>
                </CardActionArea>
              </Card>
            );
          })}
     </Carousel>
    </Card>
  );
}
