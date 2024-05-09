import { DocumentationPage } from '../documentation-common/DocumentationPage';
import type { Documentation } from '../documentation-common/Documentation';
import { fullDocs, placeholderDocs } from './tolkienAiDocs';

export const TolkienAi = () => {
	const docs: ReadonlyArray<Documentation> =
		import.meta.env.VITE_ENABLE_TOLKIEN_AI === 'true'
			? fullDocs
			: placeholderDocs;
	return (
		<DocumentationPage title="Tolkien AI Project" documentation={docs} />
	);
};
