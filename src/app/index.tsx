import { Navbar } from './navbar';
import ConfigProvider from 'antd/es/config-provider';
import Layout from 'antd/es/layout';
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
				<Content />
				<Footer />
			</Layout>
		</HashRouter>
	</ConfigProvider>
);
