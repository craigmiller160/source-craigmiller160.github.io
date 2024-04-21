import type { ComponentType, LazyExoticComponent } from 'react';
import { Suspense } from 'react';
import { Spin } from 'antd';
import classes from './LazySuspenseWrapper.module.scss'

type Props = Readonly<{
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	component: LazyExoticComponent<ComponentType<any>>;
}>;

const Fallback = () => (
	<div className={classes.fallback}>
		<Spin size="large" />
	</div>
);

export const LazySuspenseWrapper = (props: Props) => {
	const Component = props.component;
	return (
		<Suspense fallback={<Fallback />}>
			<Component />
		</Suspense>
	);
};
