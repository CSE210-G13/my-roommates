import { useAuthUser } from '@/firebase/auth';

export default function Home() {
	const [user, loading] = useAuthUser();

	if (loading) {
		return <h1>Loading...</h1>;
	}
	return (
		<>
			<h1>{user ? user.displayName : 'Need to login'}</h1>
		</>
	);
}
