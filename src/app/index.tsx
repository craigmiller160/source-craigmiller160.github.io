import { Navbar } from './navbar';
import { ConfigProvider, Layout } from 'antd';
import 'antd/dist/reset.css';
import './app.scss';
import { theme } from './theme';
import { Content } from './content';
import { BrowserRouter } from 'react-router-dom';
import { Footer } from './footer';

export const App = () => (
	<ConfigProvider theme={theme}>
		<BrowserRouter>
			<Layout>
				<Navbar />
				<Content />
				<Footer />
			</Layout>
		</BrowserRouter>
	</ConfigProvider>
);
