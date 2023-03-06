import React from 'react';
import UserProfile from '@/components/UserProfile';
import { getUser } from '@/firebase/userDb';
import {getPropertyListFromUserID} from '@/firebase/userLikedProperties';

export default function roommates({ user, likedProperties }) {
  return (
    <main>
      <UserProfile user={user} likedProperties={likedProperties}/>
    </main>
  )
}

export async function getServerSideProps(context) {
	let user = await getUser(context.params.uid);
	let likedProperties = await getPropertyListFromUserID(context.params.uid);
	return {
		props: {
			user,
			likedProperties
		},
	};
}