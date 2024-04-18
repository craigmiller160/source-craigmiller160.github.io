import { createRoot } from 'react-dom/client';

const rootElement = document.querySelector('#root');
if (!rootElement) {
    throw new Error('Cannot find root element to mount React to');
}

const root = createRoot(rootElement);