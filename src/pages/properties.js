import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import PropertyFilter from '@/components/PropertyFilter/PropertyFilter';
import PropertyCard from '@/components/PropertyCard';
import { getAllProperties } from '@/firebase/userDb';

export default function ComplexGrid(props) {
	return (
		<div style={{ display: 'flex', padding: '10px 0px 0px 20px' }}>
			<PropertyFilter />
			<Grid container direction="row" spacing={0} sx={{ px: 5 }}>
				{props.properties.map((property, i) => {
					return (
						<Grid item display="flex" justifyContent="center" alignItems="center" key={i} sm>
							<PropertyCard property={property} />
						</Grid>
					);
				})}
			</Grid>
		</div>
	);
}

export async function getStaticProps() {
	const properties = await getAllProperties();
	return {
		props: { properties }, // will be passed to the page component as props
		revalidate: 600,	// update cache every 10 minutes
	};
}
