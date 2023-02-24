import React from 'react';
import {
    Grid,
    TextField,
    FormGroup,
    FormControlLabel,
    Switch
} from '@mui/material/';
export function ContactInfoInput({id, label, value, autoComplete, disabled, handleUserInput})
{
    return(
        <Grid item xs={12} md={8.7}>
        <TextField
            required
            id={id}
            name={id}
            label={label}
            fullWidth
            value={value}
            autoComplete={autoComplete}
            variant="standard"
            disabled={disabled}
            onChange={(e) => handleUserInput(e.target.value)}/>
    </Grid> 
    );
}

export function ContactInfoSwitch({id, checked, disabled, handleUserInput})
{
    return(
        <Grid item xs={12} md={3.3} sx={{display: "flex", alignItems: "center", justifyContent: "flex-end"}}>
        <FormGroup>
            <FormControlLabel 
                control={<Switch />} 
                id={id}
                label="Public"
                labelPlacement="start"
                checked={checked}
                disabled={disabled}
                onChange={(e) => handleUserInput(e.target.checked)}
            />
        </FormGroup>                        
    </Grid>
    );
}