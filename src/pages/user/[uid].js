import React from 'react';
import UserProfile from '@/components/UserProfile';
import { getUser } from '@/firebase/userDb';
import {getPropertyListFromUserID} from '@/firebase/userLikedProperties';
import Head from 'next/head';

export default function roommates({ user, likedProperties }) {
	let title = `${user.firstName} ${user.lastName} | Roomies`
  return (
		<>
		<Head>
			<title>{title}</title>
		</Head>
    <main>
      <UserProfile user={user} likedProperties={likedProperties}/>
    </main>
		</>
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