import classes from './Projects.module.scss';
import { Typography } from 'antd';
import classNames from 'classnames';
import {
  ClusterOutlined,
  DollarOutlined,
  LockOutlined,
  OpenAIOutlined,
  ProfileOutlined,
  StockOutlined
} from '@ant-design/icons';
import { LinkList, type LinkListItem } from '../../../ui/LinkList';

export const projectItems: ReadonlyArray<LinkListItem> = [
  {
    label: 'Portfolio Source Code',
    icon: <ProfileOutlined />,
    link: 'https://github.com/craigmiller160/source-craigmiller160.portfolio'
  },
  {
    label: 'Expense Tracker',
    icon: <DollarOutlined />,
    link: '/projects/expense-tracker'
  },
  {
    label: 'Market Tracker',
    icon: <StockOutlined />,
    link: '/projects/market-tracker'
  },
  {
    label: 'Tolkien AI',
    icon: <OpenAIOutlined />,
    link: '/projects/tolkien-ai'
  },
  {
    label: 'Project Build System',
    icon: <ClusterOutlined />,
    link: '/projects/craig-build'
  },
  {
    label: 'OAuth2 Server (Retired)',
    icon: <LockOutlined />,
    link: '/projects/oauth2-server'
  }
];

export const Projects = () => (
  <div className={classes.projects}>
    <div className={classNames(classes.row, classes.title)}>
      <Typography.Title level={3}>Personal Projects</Typography.Title>
    </div>
    <div className={classes.listWrapper}>
      <LinkList listClassName={classes.list} items={projectItems} />
    </div>
  </div>
);
