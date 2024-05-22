import { fullDocs, placeholderDocs } from './craigBuildDocs';
import { DocumentationPage } from '../documentation-common/DocumentationPage';

export const CraigBuild = () => {
    const docs = import.meta.env.VITE_ENABLE_CRAIG_BUILD
        ? fullDocs
        : placeholderDocs;
    return (
        <DocumentationPage
            title="Project Build System (aka 'craig-build')"
            documentation={docs}
        />
    );
};
