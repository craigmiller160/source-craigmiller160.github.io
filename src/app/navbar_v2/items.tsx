import type { ReactNode } from 'react';
import {
	CodeOutlined,
	FormOutlined,
	GithubOutlined,
	ProfileOutlined,
	UserOutlined
} from '@ant-design/icons';

export type NavbarItemType = 'route' | 'group' | 'action';

type BaseNavbarItem = Readonly<{
	type: NavbarItemType;
	label: string;
	className?: string;
	icon: ReactNode;
}>;

export type NavbarRouteItem = BaseNavbarItem &
	Readonly<{
		type: 'route';
		path: string;
	}>;

export type NavbarActionItem = BaseNavbarItem &
	Readonly<{
		type: 'action';
		action: () => void;
	}>;

export type NavbarGroupItem = BaseNavbarItem &
	Readonly<{
		type: 'group';
		children: ReadonlyArray<NavbarItem>;
	}>;

export type NavbarItem = NavbarRouteItem | NavbarGroupItem | NavbarActionItem;

export const items: ReadonlyArray<NavbarItem> = [
	{
		type: 'route',
		label: 'About Me',
		path: '/about-me',
		icon: <UserOutlined />
	},
	{
		type: 'route',
		label: 'Resume',
		path: '/resume',
		icon: <FormOutlined />
	},
	{
		type: 'group',
		label: 'Github',
		icon: <GithubOutlined />,
		children: [
			{
				type: 'action',
				label: 'Full Profile',
				icon: <ProfileOutlined />,
				action: () =>
					window.open('https://github.com/craigmiller160', '_blank')
			},
			{
				type: 'action',
				label: 'Portfolio Source',
				icon: <CodeOutlined />,
				action: () =>
					window.open(
						'https://github.com/craigmiller160/source-craigmiller160.portfolio',
						'_blank'
					)
			}
		]
	}
];
