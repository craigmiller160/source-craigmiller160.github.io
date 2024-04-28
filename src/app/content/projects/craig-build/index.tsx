import classes from './CraigBuild.module.scss';
import { Card, Typography } from 'antd';
import classNames from 'classnames';

export const CraigBuild = () => (
	<div className={classes.craigBuild}>
		<div className={classNames(classes.row, classes.header)}>
			<Typography.Title level={3}>
				Project Build System (aka &apos;craig-build&apos;)
			</Typography.Title>
		</div>
		<Card className={classes.col}>
			<div className={classNames(classes.row, classes.header)}>
				<Typography.Title level={5}>Introduction</Typography.Title>
			</div>
			<div className={classes.col}>
				<Typography.Text>
					Over the years, I&apos;ve built a lot of personal projects,
					far more even than I&apos;m showcasing in this portfolio. My
					years in the industry demonstrated the value of
					standardized, uniform build tools. While I have yet to build
					a full CI/CD for myself, this tool is pretty close.
				</Typography.Text>
				<Typography.Text>
					The only thing separating this tool, which I call
					&apos;craig-build&apos;, from a real CI/CD is the fact that
					it is not automated. I need to invoke it on my machine via a
					command. However, with a single command it will scan the
					project, identify which type of project it is, validate the
					configuration, build, test, and deploy it. It is the heart
					of my current home infrastructure, and one day maybe
					I&apos;ll turn it into a proper CI/CD.
				</Typography.Text>
			</div>
		</Card>
		{import.meta.env.VITE_ENABLE_CRAIG_BUILD !== 'true' && (
			<Card>
				<div className={classNames(classes.row, classes.header)}>
					<Typography.Title level={5}>
						More Details Coming Soon...
					</Typography.Title>
				</div>
			</Card>
		)}
		{import.meta.env.VITE_ENABLE_CRAIG_BUILD === 'true' && (
			<>
				<Card>
					<ul>
						<li>Introduction</li>
						<li>Diagram</li>
						<li>
							Features
							<ul>
								<li>Full build, test, & validation system</li>
								<li>Describe all phases</li>
							</ul>
						</li>
					</ul>
				</Card>
			</>
		)}
	</div>
);
