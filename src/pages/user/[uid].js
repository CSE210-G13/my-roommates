import React from 'react';
import UserProfile from '@/components/UserProfile';
import { getUser } from '@/firebase/userDb';

export default function roommates({ user }) {
  return (
    <main>
      <UserProfile user={user} />
    </main>
  )
}

export async function getServerSideProps(context) {
	let user = await getUser(context.params.uid);
	return {
		props: {
			user,
		},
	};
}