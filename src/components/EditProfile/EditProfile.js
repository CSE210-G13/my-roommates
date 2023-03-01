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
import { getUser, updateUser } from '@/firebase/userDb';

export let paperProps = {
    mt: { xs: 3, md: 6 }, // margin top
    mb: { xs: 3 },        // margin bottom
    p: { xs: 2, md: 3 }   // padding
  }

 export const UserInfoContext = createContext(new User());
    
export default function EditProfile() {
    const [user, loading] = useAuthUser();

    let initPerson = new User();
	const [userInfo, setUserInfo] = useState(initPerson);

    useEffect(() => {
        if (user) {
            getUser(user.uid)
                .then((user) =>  user )
                .then((user) => setUserInfo(user));
        }
    }, [user]);

    const [editingProfile, setEditingProfile] = useState(false);

    useEffect(() => {
        if (!editingProfile && !loading)
        {
            updateUser(userInfo);
        }
    }, [editingProfile])

    // TODO: submit profile changes to firebase
    const handleEditingProfile = () => {
        setEditingProfile(!editingProfile);
    }
    return (
        <UserInfoContext.Provider  value={{ userInfo, setUserInfo }}>
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
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <EditPersonalInformationForm editing={editingProfile}/>
                    </Box>
                </Paper>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Paper
                            variant="outlined"
                            sx={paperProps}>
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <EditRoommatePrefForm user={userInfo} editing={editingProfile}/>
                            </Box>
                        </Paper>     
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper
                            variant="outlined"
                            sx={paperProps}>
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <EditPropertyPrefForm editing={editingProfile}/> 
                            </Box>
                        </Paper>                    
                    </Grid>
                </Grid>
            </Container>
        </UserInfoContext.Provider>
        );
    }