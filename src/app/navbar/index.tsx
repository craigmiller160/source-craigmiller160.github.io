import { Layout, Menu, type MenuProps } from 'antd';
import classes from './Navbar.module.scss';

const items: MenuProps['items'] = [
	{
		key: 'a',
		label: 'ABC'
	},
	{
		key: 'b',
		label: 'BCD'
	}
];

export const Navbar = () => {
	return (
		<Layout>
			<Layout.Header className={classes.navbar}>
				<Menu
					className={classes.menu}
					theme="light"
					mode="horizontal"
					items={items}
				/>
			</Layout.Header>
		</Layout>
	);
};
