import React from 'react';
import { useState, useEffect, createContext } from 'react';
import {
	Box,
    Container,
    Paper,
    Grid,
    Typography,
    Button,
} from '@mui/material/';
import EditPersonalInformationForm from './EditPersonalInformationForm';
import EditRoommatePrefForm from './EditRoommatePrefForm';
import EditPropertyPrefForm from './EditPropertyPrefForm';

import { useAuthUser } from '@/firebase/auth';
import { User } from '@/firebase/classes';
import { getUser, postUser } from '@/firebase/userDb';

export let paperProps = {
    mt: { xs: 3, md: 6 }, // margin top
    mb: { xs: 3 },        // margin bottom
    p: { xs: 2, md: 3 }   // padding
  }
    
export default function EditProfile() {
    const [user, loading] = useAuthUser();

    let initPerson = new User();
	const [userObj, setUserObj] = useState(initPerson);

    useEffect(() => {
        if (user) {
            getUser(user.uid)
                .then((user) =>  user )
                .then((user) => setUserObj(user));
        }
    }, [user])

    const [editingProfile, setEditingProfile] = useState(false);

    // TODO: submit profile changes to firebase
    const handleEditingProfile = () => {
        setEditingProfile(!editingProfile);
    }
    return (
        <Container component="main" maxWidth="xl" sx={{ pt: "4vh" ,mb: 4 }}>
            <Box>
                <Typography component="h1" variant="h4" align="center">
                    Profile Settings
                </Typography>   
                <Box display="flex" justifyContent="flex-end">
                    <Button 
                        variant={editingProfile ? "contained" : "outlined"}
                        onClick={() => {handleEditingProfile()}}>
                        {editingProfile ? "Save" : "Edit"}
                    </Button>                            
                </Box>     
            </Box>
            <Paper
                variant="outlined"
                sx={paperProps}>
                <React.Fragment>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <EditPersonalInformationForm user={userObj} editing={editingProfile}/>
                    </Box>
                </React.Fragment>
            </Paper>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Paper
                        variant="outlined"
                        sx={paperProps}>
                        <React.Fragment>
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <EditRoommatePrefForm editing={editingProfile}/>
                            </Box>
                        </React.Fragment>
                    </Paper>     
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper
                        variant="outlined"
                        sx={paperProps}>
                        <React.Fragment>
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <EditPropertyPrefForm editing={editingProfile}/> 
                            </Box>
                        </React.Fragment>
                    </Paper>                    
                </Grid>
            </Grid>
        </Container>
        );
    }