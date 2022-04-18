import Layout from '../components/Layout';
import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import { StoreProvider } from '../utils/Store';

function MyApp({ Component, pageProps }) {
	return (
		<StoreProvider>
			<ThemeProvider enableSystem={true} attribute="class">
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ThemeProvider>
		</StoreProvider>
	);
}

export default MyApp;
