import { Layout, Typography } from 'antd';
import classes from './Footer.module.scss';

export const Footer = () => (
  <Layout.Footer className={classes.footer}>
    <div className={classes.footerContent}>
      <Typography.Title level={5}>Attributions</Typography.Title>
      <a
        href="https://www.flaticon.com/free-icons/program"
        title="program icons"
      >
        Program icons created by Bharat Icons - Flaticon
      </a>
    </div>
  </Layout.Footer>
);
