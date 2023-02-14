import '@/styles/globals.css';
import NavBar from '@/components/NavBar';
import { initFirebase } from '../firebase/firebaseConfig';

export default function App({ Component, pageProps }) {
	const app = initFirebase();
	return (
		<>
			<NavBar />
			<Component {...pageProps} />
		</>
	);
}
