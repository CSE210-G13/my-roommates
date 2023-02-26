import '@/styles/globals.css';
import Head from "next/head";
import NavBar from '@/components/NavBar';
import { initFirebase } from '../firebase/firebaseConfig';

export default function App({ Component, pageProps }) {
	initFirebase();
	return (
		<>
			<Head>
				<title>Roomie</title>
				<meta name="description" content="Roomie by G-13" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<NavBar />
			<Component {...pageProps} />
		</>
	);
}
