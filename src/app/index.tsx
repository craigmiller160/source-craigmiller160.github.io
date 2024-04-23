import { Navbar } from './navbar_v2';
import { Navbar as OldNavbar } from './navbar';
import { ConfigProvider, Layout } from 'antd';
import 'antd/dist/reset.css';
import './app.scss';
import { theme } from './theme';
import { Content } from './content';
import { HashRouter } from 'react-router-dom';
import { Footer } from './footer';

export const App = () => (
	<ConfigProvider theme={theme}>
		<HashRouter>
			<Layout>
				<Navbar />
				<br />
				<OldNavbar />
				<Content />
				<Footer />
			</Layout>
		</HashRouter>
	</ConfigProvider>
);
