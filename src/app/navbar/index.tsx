import { Layout } from 'antd';
import classes from './Navbar.module.scss';

export const Navbar = () => {
	return (
		<Layout>
			<Layout.Header className={classes.navbar}>Header</Layout.Header>
		</Layout>
	);
};
