import Card from '@mui/material/Card';

import PropertyCardHeader from "./PropertyCardHeader";
import PropertyCardActions from "./PropertyCardActions";
export default function PropertyCard({ property }) {

	return (
		<Card sx={{ m: '20px', width: 350, height: 370, position: 'relative' }}>
			<PropertyCardHeader property={property} />
			<PropertyCardActions property={property} />
		</Card>
	);
}
