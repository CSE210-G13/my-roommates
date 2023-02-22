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
import Stack from "@mui/material/Stack";
import PetsIcon from "@mui/icons-material/Pets";
import SmokeFreeIcon from "@mui/icons-material/SmokeFree";
import MapIcon from "@mui/icons-material/Map";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import SingleBedIcon from "@mui/icons-material/SingleBed";
import ShowerIcon from "@mui/icons-material/Shower";
import EmailIcon from "@mui/icons-material/Email";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import PoolIcon from '@mui/icons-material/Pool';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import BadgeIcon from '@mui/icons-material/Badge';



const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});


function PrefIcon({ icon, string }) {
  return (
    <Stack spacing={1} padding={2} alignItems="center">
      {React.createElement(icon, { fontSize: "large" })}
      <Typography align="center">{string}</Typography>
    </Stack>
  );
}

function groupArr(data, n) {
  return data
    .map((item, i) => {
      const groupIndex = Math.floor(i / n);
      return {
        groupIndex: groupIndex,
        item: item,
      };
    })
    .reduce((groups, entry) => {
      groups[entry.groupIndex] = [
        ...(groups[entry.groupIndex] ? groups[entry.groupIndex] : []),
        entry.item,
      ];
      return groups;
    }, []);
}

export default function ComplexGrid() {
  const callme = () => {
    console.log("hi");
  };
  const x = [1, 2, 3, 4, 5, 6, 7, 8];

  let groupsOf3 = groupArr(x, 4);

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
        spacing={4}
        sx={{ paddingTop: "40px" }}
      >
        
        <Grid item xs={9}>
          <Typography align="right" variant="h4" component="div">
            Coste Verde
          </Typography>
        </Grid>
        <Grid align="center" item xs={3}>
          <IconButton aria-label="add to favorites" >
            <FavoriteIcon fontSize="large"/>
          </IconButton>
        </Grid>
      </Grid>

      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        spacing={4}
        
      >
        <Grid  >
          <Carousel
            navButtonsAlwaysVisible
            sx={{ width: "400px", margin: "50px" }}
          >
            {x &&
              x.map((obj, i) => {
                return (
                  <CardMedia
                    sx={{ height: "100%", width: "100%" }}
                    component="img"
                    image="https://www.w3schools.com/tags/img_girl.jpg"
                    alt="property1.jpg"
                    key={i}
                  />
                );
              })}
          </Carousel>
        </Grid>
        <Grid >
          <CardContent>
              <PrefIcon
                icon={MapIcon}
                string={"9500 Gilman Dr, La Jolla, CA, 92037"}
              />
              <PrefIcon icon={AttachMoneyIcon} string={`2000 per month`} />
              <PrefIcon icon={SingleBedIcon} string={`3 Bedroom Property`} />
              <PrefIcon icon={ShowerIcon} string={`2 Attached Bathroom`} />
              <PrefIcon icon={PetsIcon} string={`Pet Friendly`}/>
          </CardContent>
        </Grid>
        <Grid >
          <CardContent>
              <PrefIcon icon={FitnessCenterIcon} string={` Gym/Fitness Center`} />
              <PrefIcon icon={PoolIcon} string={`Swimming Pool`} />
              <PrefIcon icon={LocalLaundryServiceIcon} string={` Indoor Laundry Service`} />
              <PrefIcon icon={LocalParkingIcon} string={`Visitors Parking`} />
              <PrefIcon icon={AcUnitIcon} string={`Air Conditioner`} />
              
          </CardContent>
        </Grid>
        <Grid >
          <CardContent>
              <PrefIcon icon={SmokeFreeIcon} string={`Smoke free property`}/>
              <PrefIcon icon={BadgeIcon} string={`Harry Styles`} />
              <PrefIcon icon={EmailIcon} string={`abc@gmail.com`} />
              <PrefIcon icon={SmartphoneIcon} string={`+ (823) 123 1231`} />
          </CardContent>
        </Grid>
      </Grid>
      
      <Card sx={{ height: "10vh", display: "flex" }}>
        <Typography
          variant="h5"
          color="text.priamry"
          align="left"
          sx={{ paddingX: "3vw", display: "flex", alignItems: "center" }}
        >
          People interested in Costa Verde Towers
        </Typography>
      </Card>

      <Stack bgcolor="#F8F8F2" padding={5} spacing={7}>
        <Carousel
          navButtonsAlwaysVisible={true}
          autoPlay={false}
          animation="slide"
        >
          {groupsOf3.map((items) => (
            <Stack
              key={"group " + items[0]}
              direction="row"
              alignItems="center"
              justifyContent="space-evenly"
            >
              {items.map((x) => (
                <Card key={"prop " + x}>
                  <CardActionArea sx={{ display: "flex" }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                      sx={{ width: 50, height: 50, margin: "25px" }}
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
              ))}
            </Stack>
          ))}
        </Carousel>
      </Stack>
    </Card>
  );
}