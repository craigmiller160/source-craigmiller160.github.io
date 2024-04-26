import type { ReactNode } from 'react';
import {
	ClusterOutlined,
	DollarOutlined,
	LockOutlined,
	OpenAIOutlined, ProfileOutlined,
	StockOutlined
} from '@ant-design/icons';

type ProjectItem = Readonly<{
	label: string;
	icon: ReactNode;
	path: string;
}>;

export const projectItems: ProjectItem[] = [
	{
		label: 'Portfolio Source Code',
		icon: <ProfileOutlined />,
		path: 'https://github.com/craigmiller160/source-craigmiller160.portfolio'
	},
	{
		label: 'Expense Tracker',
		icon: <DollarOutlined />,
		path: '/projects/expense-tracker'
	},
	{
		label: 'Market Tracker',
		icon: <StockOutlined />,
		path: '/projects/market-tracker'
	},
	{
		label: 'Tolkien AI',
		icon: <OpenAIOutlined />,
		path: '/projects/tolkien-ai'
	},
	{
		label: 'Project Build System',
		icon: <ClusterOutlined />,
		path: '/projects/craig-build'
	},
	{
		label: 'OAuth2 Server (Retired)',
		icon: <LockOutlined />,
		path: '/projects/oauth2-server'
	}
];
