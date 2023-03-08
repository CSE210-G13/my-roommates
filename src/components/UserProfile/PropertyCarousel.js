import Paper from "@mui/material/Paper";
import Typography from '@mui/material/Typography';
import Carousel from 'react-material-ui-carousel';
import Stack from "@mui/material/Stack";

import { paperProps } from './UserProfile.js';

/**
 * Creates a carousel for the given properties.
 * TODO: properties is currently just an array of strings, display real property cards here.
 */
export default function PropertyCarousel({ properties, title }) {
	let interestedProp = properties.map((x) => x.name);

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
	let groupsOf3 = groupArr(interestedProp, 3);

	return (
		<Paper variant="outlined" sx={paperProps}>
			<Stack padding={5} spacing={7}>
				<Typography variant="h5">{title}</Typography>
				<Carousel navButtonsAlwaysVisible={true} autoPlay={false} animation="slide">
					{
						groupsOf3
							.map((items) => <Stack key={"group " + items[0] + title} direction="row"
								alignItems="center" justifyContent="space-evenly">
								{items.map((x) => <Typography key={"prop " + x + title}>{x}</Typography>)}
							</Stack>)
					}
				</Carousel>
			</Stack>
		</Paper>
	)
}


