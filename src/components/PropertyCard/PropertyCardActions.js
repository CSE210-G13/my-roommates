import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import AvatarGroup from '@mui/material/AvatarGroup';
import Avatar from '@mui/material/Avatar';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

export default function PropertyCardActions() {
  return (
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
        <FavoriteIcon />
      </IconButton>
      <IconButton aria-label="share">
        <ShareIcon />
      </IconButton>
      <AvatarGroup max={4}>
        <Avatar alt="Remy Sharp" src="" />
        <Avatar alt="Travis Howard" src="" />
        <Avatar alt="Cindy Baker" src="" />
        <Avatar alt="Agnes Walker" src="" />
        <Avatar alt="Trevor Henderson" src="" />
      </AvatarGroup>
    </CardActions>
  )
}