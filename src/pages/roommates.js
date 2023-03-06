import RoommateGrid from '@/components/RoommateGrid';
import RoommateFilter from '@/components/RoommatesFilter';
import Head from 'next/head';
import { getAllUsers } from '@/firebase/userDb';
import { useAuthUser } from '@/firebase/auth';

export default function Roommates(props) {
	const [user, loading] = useAuthUser();
	// do not show current user in grid if they are logged in
	const users = (user == null) 
		? props.users 
		: props.users.filter((u) => u.uid !== user.uid);
	return (
		<>
			<Head>
				<title>Roommate Suggestions</title>
			</Head>
			<div style={{ display: 'flex', padding: '10px 0px 0px 20px' }}>
				<RoommateFilter />
				<RoommateGrid users={users} />
			</div>
		</>
	);
}

export async function getServerSideProps(context) {
	let users = await getAllUsers();
	return {
		props: {
			users,
		},
	};
}