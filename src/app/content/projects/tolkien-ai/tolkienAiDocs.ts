import type { Documentation } from '../documentation-common/Documentation';

const commonDocs: ReadonlyArray<Documentation> = [
	{
		type: 'text-only',
		title: 'Introduction',
		text: [
			`If there is one big buzzword in today's world, it is "AI". Ever since the unveiling of ChatGPT, generative AI has proven it is an incredibly powerful, if flawed, tool. Whether or not AI lives up to the incredible levels of hype it has reached, it is a tool that software engineers need to learn how to use.`,
			`This application is a full RAG (Retrieval Augmented Generation) stack application. It leverages a fully-vectorized copy of JRR Tolkien's The Silmarillion and integrates it with ChatGPT. This allows the user to ask any question about Tolkien's Legendarium and receive an answer. Rather than just trusting ChatGPT to know the answer, the RAG stack implementation uses vector embeddings to identify relevant passages to the question, and feed it to ChatGPT. Robust audit logging tracks the behavior of every piece of the flow, allowing for experimentation and exploration of different ways to optimize AI-driven actions.`
		]
	}
];

export const placeholderDocs: ReadonlyArray<Documentation> = [
	...commonDocs,
	{
		type: 'text-only',
		title: 'More Details Coming Soon...',
		text: []
	}
];

/*
 * - Intro
 * - Diagram
 * - Parsed & Vectorized Silmarillion
 * - Query using vectors & ChatGPT
 * - Robust audit loogging
 */

export const fullDocs: ReadonlyArray<Documentation> = [
	...commonDocs,
	{
		type: 'image-only',
		title: 'Architecture Diagram',
		image: 'TBD'
	}
];
