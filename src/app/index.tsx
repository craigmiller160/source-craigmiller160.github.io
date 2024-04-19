import { Navbar } from './navbar';
import { ConfigProvider } from 'antd';
import './app.scss';
import { theme } from './theme';
import { Content } from './content';
import {BrowserRouter} from 'react-router-dom';

export const App = () => (
	<ConfigProvider theme={theme}>
		<BrowserRouter>
			<Navbar />
			<Content />
		</BrowserRouter>
	</ConfigProvider>
);
