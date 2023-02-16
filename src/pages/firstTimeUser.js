import React from 'react';

import {
	Typography,
	CssBaseline,
} from '@mui/material';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FirstTimeUserFlow from '@/components/FirstTimeUserFlow';

export default function firtsTimeUser() {
	return (
		// <div style={{ padding: 16, margin: 'auto', maxWidth: 600 }}>
      <FirstTimeUserFlow />
		// </div>
	);
}
