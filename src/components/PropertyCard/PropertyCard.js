import Card from '@mui/material/Card';

import PropertyCardHeader from "./PropertyCardHeader";
import PropertyCardActions from "./PropertyCardActions";

export default function PropertyCard({ property }) {
	return (
		<Card sx={{ m: '20px', width: 345, height: 380 }}>
			<PropertyCardHeader property={property} />
			<PropertyCardActions />

		</Card>
	);
}
