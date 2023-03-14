import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Link from 'next/link';

export default function PropertyCardHeader({ property }) {
  return (
    <CardActionArea LinkComponent={Link} href={`/property/${property.uid}`}>
      <CardMedia sx={{ height: '180px' }} image={property.imageUrls[0]} alt="property image" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {property.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {property.address}
        </Typography>
      </CardContent>
    </CardActionArea>
  )
}