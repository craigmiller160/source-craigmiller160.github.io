import type { Documentation } from '../documentation-common/Documentation';
import marketTrackerRecognition from '../../../../images/projects/market-tracker/marketTrackerRecognition.png';
import marketTrackerSearch from '../../../../images/projects/market-tracker/marketTrackerSearch.png';
import marketTrackerWatchlists from '../../../../images/projects/market-tracker/marketTrackerWatchlists.png';
import marketTrackerPortfolios from '../../../../images/projects/market-tracker/marketTrackerPortfolios.png';
import diagram from '../../../../images/projects/market-tracker/market-tracker.drawio.png';
import loginPage from '../../../../images/projects/login-page.png';

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
        label:
          'Market Tracker API (Backend for Tradier/CoinGecko and Watchlists)',
        link: 'https://github.com/craigmiller160/market-tracker-api'
      },
      {
        label:
          'Market Tracker Portfolio Service (Backend for Integrating With Personal Portfolio Data)',
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
    type: 'text-only',
    title: 'Tech Stack Choices',
    text: [
      "This is one of my only multi-service and multi-database projects, so I wanted to highlight the design decision that went into it. If you look at the diagram above, you'll notice that there are two micro-services, market-tracker-api and market-tracker-portfolio-service. The former uses MongoDB, and the latter uses Postgres. There is a pretty simple reason behind this: one of the goals of these projects is to learn new things, and I wanted to try out some different technologies.",
      'When I first started the application, I wrote market-tracker-api, which is a TypeScript application using ExpressJS. Given the natural workflows between a Node application and MongoDB, and the fact that I had no plans for relational data in the application, I felt this was the perfect opportunity to build out some more functionality with MongoDB rather than my beloved Postgres.',
      'Overall, I found myself still preferring Kotlin and Spring Boot over the TypeScript/ExpressJS tech stack. Therefore, nearly two years later when I came back to this project to add the portfolio functionality, I decided to add a new backend micro-service to exclusively handle that feature, and put it in my more traditional tech stack. In addition, my plan for the portfolio data was to normalize it in a relational style, therefore Postgres was the better choice than Mongo for the database.',
      'That is how this project evolves to what it is today.'
    ]
  },
  {
    type: 'image-and-text',
    title: 'Authentication',
    image: loginPage,
    text: [
      'Like all of my applications, this one uses my Keycloak OIDC SSO authentication flow. A single sign on to access an account that is used across all of my applications, and controls what the user can access. Market Tracker is multi-tenant, meaning the data is segregated by user id.'
    ]
  },
  {
    type: 'image-and-text',
    title: 'Data Sources',
    image: marketTrackerRecognition,
    text: [
      'The application depends on data provided by the free APIs of Tradier and CoinGecko. Every feature of this application depends on the data from them, and a recognition page exists to grant credit for what they provide.'
    ]
  },
  {
    type: 'image-and-text',
    title: 'Investment Search',
    image: marketTrackerSearch,
    text: [
      'The application supports looking up any stock or ETF by its symbol. Once the results are found, data can be displayed for a variety of different ranges of time. This allows for viewing the recent history of the investment.',
      'Lastly, the investment can be added to a watchlist. A new watchlist can be created here, or it can be added to an existing watchlist. This allows for tracking the investment on an ongoing basis without having to return to the search screen.'
    ]
  },
  {
    type: 'image-and-text',
    title: 'Watchlists',
    image: marketTrackerWatchlists,
    text: [
      "All watchlists created by the user are listed with a simple accordion format. Each watchlist can be expanded to show the investments being tracked within them. All of this is fully configurable by the user, and thanks to the application's multi-tenancy individual users each have their own, independent set of watchlists.",
      'The only exception is Cryptocurrency. This is a watchlist that just tracks the current price of Bitcoin and Ethereum. A more robust user-manageable Cryptocurrency search has not been built into the application, given that for me Cryptocurrency is more a curiosity than a priority. Therefore this watchlist is hard-coded into the application and is static and unchanging.'
    ]
  },
  {
    type: 'image-and-text',
    title: 'Personal Investment Data Integration',
    image: marketTrackerPortfolios,
    text: [
      'One of the most sophisticated parts of this application is the integration of my own personal data. For obvious reasons, something this specific is restricted to individual users.',
      'I keep very meticulous records of my investments in Google Spreadsheets, and every single investment transaction I perform is recorded there. At 3-hour intervals, those spreadsheets are polled by the backend and all relevant data is retrieved, parsed, and written to the database. This is then linked with the actual Tradier data to present a real-time view of my investment portfolio.',
      "This feature definitely needs some additional love and attention. Building out aggregate views and integrating my 401k (which only has mutual funds that don't have data on Tradier) is still on my TODO list."
    ]
  }
];
