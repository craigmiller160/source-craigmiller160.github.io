import { Tabs } from 'antd';
import { type Tab } from 'rc-tabs/es/interface';

const items: Tab[] = [
	{
		key: 'one',
		label: 'One'
	},
	{ key: 'two', label: 'Two' }
];

export const Projects = () => {
	return <Tabs items={items} />;
};
