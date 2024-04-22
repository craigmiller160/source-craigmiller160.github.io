import classes from './TolkienAi.module.scss';
import classNames from 'classnames';
import { Card, Typography } from 'antd';

export const TolkienAi = () => (
	<div className={classes.tolkienAi}>
		<div className={classNames(classes.row, classes.header)}>
			<Typography.Title level={3}>Tolkien AI Project</Typography.Title>
		</div>
		<Card className={classes.col}>
			<div className={classNames(classes.row, classes.header)}>
				<Typography.Title level={5}>Introduction</Typography.Title>
			</div>
			<div className={classes.col}>
				<Typography.Text>
					If there is one big buzzword in today&apos;s world, it is
					&quot;AI&quot;. Ever since the unveiling of ChatGPT,
					generative AI and the LLMs that power it have proven they
					are incredibly powerful, if flawed, tools. Whether or not AI
					lives up to the incredible levels of hype it has reached, it
					is a tool that software engineers need to learn how to use.
				</Typography.Text>
				<Typography.Text>
					This application is a full RAG (Retrieval Augmented
					Generation) stack application. It leverages a
					fully-vectorized copy of JRR Tolkien&apos;s The Silmarillion
					and integrates it with ChatGPT. This allows the user to ask
					any question about Tolkien&apos;s Legendarium and receive an
					answer. Rather than just trusting ChatGPT to know the
					answer, the RAG stack implementation uses vector embeddings
					to identify relevant passages to the question, and feed it
					to ChatGPT. Robust audit logging tracks the behavior of
					every piece of the flow, allowing for experimentation and
					exploration of different ways to optimize AI-driven actions.
				</Typography.Text>
			</div>
		</Card>
		<Card>
			<div className={classNames(classes.row, classes.header)}>
				<Typography.Title level={5}>
					More Details Coming Soon...
				</Typography.Title>
			</div>
		</Card>
	</div>
);
