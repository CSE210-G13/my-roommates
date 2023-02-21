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
import Divider from '@mui/material/Divider';
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


//import _ from "lodash";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

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
      <Stack spacing={1} alignItems="center">
        {React.createElement(icon, { fontSize: "large" })}
        <Typography align="center">{string}</Typography>
      </Stack>
    
  )
}

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



export default function ComplexGrid() {
  const callme = () => {
    console.log("hi");
  };
  const x = [1, 2, 3, 4, 5,6,7,8];

  let groupsOf3 = groupArr(x, 5);


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
      >
        <Grid item xs={4}>
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
        <Grid item xs={8}>
          <CardContent>
            <Typography align="center" gutterBottom variant="h4" component="div">
              Coste Verde
            </Typography>
                <Divider orientation="vertical" flexItem>
                  <PrefIcon icon={MapIcon} string={'9500 Gilman Dr, La Jolla, CA, 92037'} />
                  <PrefIcon icon={AttachMoneyIcon} string={`2000 per month`} />
                  <PrefIcon icon={SingleBedIcon} string={` bedroom property`} />
                  <PrefIcon icon={ShowerIcon} string={`Yes`} />  
                </Divider>
                <Divider orientation="vertical" flexItem>
                  <PropPrefIcon topic="pet friendly" okayWith={true} goodIcon={PetsIcon} badIcon={DoNotDisturbIcon} />
                  <PropPrefIcon topic="smoke free" okayWith={true} goodIcon={SmokeFreeIcon} badIcon={SmokingRoomsIcon} /> 
                </Divider>

                <Divider orientation="vertical" flexItem>
                  <PropPrefIcon topic="pet friendly" okayWith={true} goodIcon={PetsIcon} badIcon={DoNotDisturbIcon} />
                  <PropPrefIcon topic="smoke free" okayWith={true} goodIcon={SmokeFreeIcon} badIcon={SmokingRoomsIcon} /> 
                </Divider>
                
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


      <Stack
      bgcolor="#F8F8F2"
      padding={5}
      spacing={7}>
      
      <Carousel navButtonsAlwaysVisible={true} autoPlay={false} animation="slide">
        {
          groupsOf3
            .map((items) => <Stack key={"group " + items[0]} direction="row" alignItems="center" justifyContent="space-evenly">
              {items.map((x) => <Card key={"prop " + x }>
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
                </Card>)}
            </Stack>)
        }
      </Carousel>
    </Stack>
    </Card>
  );
}
