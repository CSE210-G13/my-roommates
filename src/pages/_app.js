import '@/styles/globals.css';
import NavBar from '@/components/NavBar';
import { initFirebase } from '../firebase/firebaseConfig';

export default function App({ Component, pageProps }) {
	initFirebase();
	return (
		<>
			<NavBar />
			<Component {...pageProps} />
		</>
	);
}
