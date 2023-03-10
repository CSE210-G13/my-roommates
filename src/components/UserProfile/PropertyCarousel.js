import Paper from "@mui/material/Paper";
import Typography from '@mui/material/Typography';
import Carousel from 'react-material-ui-carousel';
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";

import PropertyCardHeader from '@/components/PropertyCard/PropertyCardHeader';
import { paperProps } from './UserProfile.js';

/**
 * Creates a carousel for the given properties.
 */
export default function PropertyCarousel({ properties, title }) {
	// from https://stackoverflow.com/a/44069560
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

	// TODO: make reactive by changing groupNumber based on screen size
	// Unsure how to check breakpoint programatically
	let groupsOf3 = groupArr(properties, 3);

	return (
		<Paper variant="outlined" sx={paperProps}>
			<Stack padding={5}>
				<Typography variant="h5">{title}</Typography>
				<Carousel navButtonsAlwaysVisible={true} autoPlay={false} animation="slide">
					{
						groupsOf3
							.map((items) => <Grid container columns={3} key={"group " + items[0] + title} direction="row" spacing={3}
								alignItems="center" justifyContent="space-evenly">
								{items.map((x) => <Grid xs={1} key={x.uid}>
									<Card sx={{minHeight: 320}}>
										<PropertyCardHeader property={x} />
									</Card>
								</Grid>)}
							</Grid>
							)
					}
				</Carousel>
			</Stack>
		</Paper>
	)
}


