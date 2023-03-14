import '@/styles/globals.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Head from 'next/head';
import NavBar from '@/components/NavBar';
import { initFirebase } from '../firebase/firebaseConfig';

const theme = createTheme({
	palette: {
		primary: {
			main: '#6096B4',
		},
		secondary: {
			main: '#EEE9DA',
		},
	},
	typography: {
		button: {
			textTransform: 'none',
			fontWeight: 550,
		},
	},
});

export default function App({ Component, pageProps }) {
	initFirebase();
	return (
		<ThemeProvider theme={theme}>
			<Head>
				<title>Roomie</title>
				<meta name="description" content="Roomie by G-13" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<NavBar />
			<Component {...pageProps} />
		</ThemeProvider>
	);
}
