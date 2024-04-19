import { Navbar } from './navbar';
import { ConfigProvider } from 'antd';
import './app.scss';
import { theme } from './theme';

export const App = () => (
	<ConfigProvider theme={theme}>
		<Navbar />
	</ConfigProvider>
);
