import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from '@mui/material/CardActions';
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function ComplexGrid() {
  const x = [1, 2, 3, 4,5,6];
  
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      marginX={"80px"}
    >
      {x &&
        x.map((obj, i) => {
          return (
            <Grid item key={i}>
              <Card sx={{ m: "20px", width: "500px" }} >
                <CardActionArea href="/propertyInformation">
                  <CardMedia
                    sx={{ height: "300px", width: "500px" }}
                    component="img"
                    image="https://www.theplan.it/cdn-cgi/image/fit=contain,width=830/awardsContest/2020/House/3958/0HouseL_CoverMichaelPezzei.jpg"
                    alt="property1.jpg"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Coste Verde
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                     9500 Gilman Dr, La Jolla, CA, 92037
                    </Typography>
                  </CardContent>
                </CardActionArea>
                
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                    <AvatarGroup max={4}  >
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                        <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                        <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                    </AvatarGroup>
               </CardActions>
               
                
              </Card>
            </Grid>
          );
        })}
    </Grid>

  );
}
