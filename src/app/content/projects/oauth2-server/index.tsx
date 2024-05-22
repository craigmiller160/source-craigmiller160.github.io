import { fullDocs, placeholderDocs } from './oauth2ServerDocs';
import { DocumentationPage } from '../documentation-common/DocumentationPage';

export const Oauth2Server = () => {
  const docs = import.meta.env.VITE_ENABLE_OAUTH2_SERVER
    ? fullDocs
    : placeholderDocs;
  return (
    <DocumentationPage title="OAuth2 Server (Retired)" documentation={docs} />
  );
};
