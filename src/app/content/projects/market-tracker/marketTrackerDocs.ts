import type { Documentation } from '../documentation-common/Documentation';
import marketTrackerRecognition from '../../../../images/marketTrackerRecognition.png';
import diagram from '../../../../images/market-tracker.drawio.png';

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
		image: diagram
	},
	{
		type: 'links-and-text',
		title: 'Links',
		links: [
			{
				label: 'Application',
				link: 'https://market-tracker.craigmiller160.us'
			},
			{
				label: 'Market Tracker API (Backend for Tradier/CoinGecko and Watchlists)',
				link: 'https://github.com/craigmiller160/market-tracker-api'
			},
			{
				label: 'Market Tracker Portfolio Service (Backend for Integrating With Personal Portfolio Data)',
				link: 'https://github.com/craigmiller160/market-tracker-potfolio-service'
			},
			{
				label: 'Market Tracker UI (Frontend)',
				link: 'https://github.com/craigmiller160/market-tracker-ui'
			}
		],
		text: [
			'The following are links to the application and relevant git repositories. Please note that the application itself requires valid authentication, which must be provided before you can access it.'
		]
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
