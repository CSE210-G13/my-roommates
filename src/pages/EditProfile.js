import React from 'react';
import EditPersonalInformationForm from '../components/EditProfile/EditPersonalInformationForm';
import EditRoommatePrefForm from '../components/EditProfile/EditRoommatePrefForm';
import EditPropertyPrefForm from '../components/EditProfile/EditPropertyPrefForm';

export default function EditProfile() {
    return (
        <div>
            <EditPersonalInformationForm />
            <EditRoommatePrefForm />
            <EditPropertyPrefForm />            
        </div>
        );
    }