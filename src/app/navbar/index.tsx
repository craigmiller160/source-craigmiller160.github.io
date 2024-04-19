import { Layout } from 'antd';
import { theme } from '../theme';

export const Navbar = () => {
	return (
		<Layout>
			<Layout.Header
				style={{
					backgroundColor: theme.token?.colorPrimary,
					color: 'white'
				}}
			>
				Header
			</Layout.Header>
		</Layout>
	);
};
