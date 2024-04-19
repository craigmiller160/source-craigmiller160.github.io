import { Layout, Menu, type MenuProps } from 'antd';
import classes from './Navbar.module.scss';
import classNames from 'classnames';

const items: MenuProps['items'] = [
	{
		key: 'nothing',
		className: classNames(classes.brand, classes.item),
		label: 'Craig Miller'
	},
	{
		key: 'resume',
		label: 'Resume',
		className: classes.item
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
