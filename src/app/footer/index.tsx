import Layout from 'antd/es/layout';
import Title from 'antd/es/typography/Title';
import classes from './Footer.module.scss';

export const Footer = () => (
	<Layout.Footer className={classes.footer}>
		<div className={classes.footerContent}>
			<Title level={5}>Attributions</Title>
			<a
				href="https://www.flaticon.com/free-icons/program"
				title="program icons"
			>
				Program icons created by Bharat Icons - Flaticon
			</a>
		</div>
	</Layout.Footer>
);
