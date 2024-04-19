import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app';

const rootElement = document.querySelector('#root');
if (!rootElement) {
	throw new Error('Cannot find root element to mount React to');
}

const root = createRoot(rootElement);
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
