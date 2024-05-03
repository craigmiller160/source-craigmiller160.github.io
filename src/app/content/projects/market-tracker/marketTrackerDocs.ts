import type { Documentation } from '../documentation-common/Documentation';
import marketTrackerRecognition from '../../../../images/marketTrackerRecognition.png';

export const marketTrackerDocs: ReadonlyArray<Documentation> = [
	{
		type: 'text-only',
		title: 'Introduction',
		text: [
			'I am a longtime, loyal customer of a traditional investment bank. I find they offer all the services I need, and when I have an issue their customer service is exceptional. However, their technology offerings are definitely sub-par. To better observe market movements, both with my own investments and others that I just want to watch, I wrote this application.',
			'This app leverages free APIs to pull real-time market data to drive its functionality. It allows for both defining investment watchlists, while also having deep integration with my own investment record keeping. Through Google Drive connectivity, every time I update the spreadsheets I use to track my investments, the data is reflected in this application, displaying how market movements are reflecting my actual investment holdings.'
		]
	},
	{
		type: 'image-only',
		title: 'Architecture Diagram',
		image: 'TBD'
	},
	{
		type: 'image-and-text',
		title: 'Data Sources',
		image: marketTrackerRecognition,
		text: [
			'The application depends on data provided by the free APIs of Tradier and CoinGecko. Every feature of this application depends on the data from them, and a recognition page exists to grant credit for what they provide.'
		]
	}
];
