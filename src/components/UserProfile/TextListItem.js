import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

/**
 * A wrapper to create a ListItem with text, without an icon.
 */
export default function TextListItem({ text }) {
	return <ListItem><ListItemText align="center" primary={text} /></ListItem>
}
