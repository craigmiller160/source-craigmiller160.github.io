import type { Documentation } from '../documentation-common/Documentation';
import diagram from '../../../../images/projects/tolkien-ai/tolkien-ai.drawio.png';
import chatResponse from '../../../../images/projects/tolkien-ai/response.png';

export const docs: ReadonlyArray<Documentation> = [
    {
        type: 'text-only',
        title: 'Introduction',
        text: [
            `If there is one big buzzword in today's world, it is "AI". Ever since the unveiling of ChatGPT, generative AI has proven it is an incredibly powerful, if flawed, tool. Whether or not AI lives up to the incredible levels of hype it has reached, it is a tool that software engineers need to learn how to use.`,
            `This application is a full RAG (Retrieval Augmented Generation) stack application. It leverages a fully-vectorized copy of JRR Tolkien's The Silmarillion and integrates it with ChatGPT. This allows the user to ask any question about Tolkien's Legendarium and receive an answer. Rather than just trusting ChatGPT to know the answer, the RAG stack implementation uses vector embeddings to identify relevant passages to the question, and feed it to ChatGPT. Robust audit logging tracks the behavior of every piece of the flow, allowing for experimentation and exploration of different ways to optimize AI-driven actions.`
        ]
    },
    {
        type: 'links-and-text',
        title: 'Links',
        text: [
            'The following are links to the swagger, since this project is API-only at the moment, and relevant git repositories. Please note that the API itself requires valid authentication, which must be provided before you can access it.'
        ],
        links: [
            {
                label: 'Swagger',
                link: 'https://tolkien-ai.craigmiller160.us/swagger-ui/index.html'
            },
            {
                label: 'Tolkien AI Server (Backend)',
                link: 'https://github.com/craigmiller160/tolkien-ai-server'
            }
        ]
    },
    {
        type: 'image-only',
        title: 'Architecture Diagram',
        image: diagram
    },
    {
        type: 'image-and-text',
        title: 'Excellent Study of AI Interaction',
        image: chatResponse,
        text: [
            'The goal of this project is to learn more about how to optimize AI integration into an application. It is a playground for experimenting with different models, segment parsing granularity, data set sizes, prompt structure, and more.',
            'With all of that in mind, every time a query is submitted to the AI, a detailed response is generated that provides extensive information on the behavior of the query. This allows for understanding all aspects of the operation.',
            'To further support an analysis of the AI behavior, every chat is stored in a searchable audit log. This makes it easy for different permutations to be tested and then compared after the fact to try and determine the optimal configuration.'
        ]
    }
];
