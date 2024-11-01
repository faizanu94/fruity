# Fruity

Fruity is a simple app that lets users browse a list of fruits, add selected fruits to a “jar,” and view the total calories and a calorie distribution pie chart of added fruits

## Features

- Browse Fruits: View a list of fruits, grouped by family, genus, or order
- Interactive Jar: Add fruits to a “jar” to see the combined calorie count
- Calorie Visualization: Displays a pie chart to visually represent the calorie distribution among selected fruits
- Simple and User Friendly Interface: Built with responsive design principles to look great on all devices

## Technologies

- React: Library for building the UI
- TypeScript: For type safety and better developer experience
- Zustand: Manages global state efficiently
- SWR: Handles data fetching and caching
- Recharts: Data visualization
- http-proxy-middleware: CORS handling in development
- node-fetch: Fetching data from external API in serverless functions

## CORS Handling

The application uses different strategies for handling CORS issues in development and production environments

### Development

- setupProxy.js is used to proxy API requests to bypass CORS. This file is located in src/ and uses http-proxy-middleware to forward requests from /api to the external API

### Production

- Vercel serverless functions are used to handle CORS by acting as a proxy between the React frontend and the external API
- The api/fruits.mjs serverless function fetches data from the external API using node-fetch, sets appropriate CORS headers and returns the response to the client
- Vercel automatically hosts this function at /api/fruits, allowing to call it directly from frontend

## Project Structure

```plaintext
/fruity
  ├── /public                # Public assets
  ├── /src
  │   ├── /components        # Reusable UI components
  │   ├── /hooks             # Custom hooks
  │   ├── /store             # Global state
  │   ├── /styles            # Shared styles
  │   ├── setupProxy.js      # Proxy setup for CORS in development
  │   ├── App.tsx            # Main app component
  │   └── index.tsx          # Entry point
  ├── /api                   # Serverless functions folder
  │   └── fruits.mjs         # Serverless function for API requests
  ├── /build                 # Production build files (after running `npm run build`)
  ├── package.json
  └── ...
```

## Getting Started

### Development

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm start
```

3. Access the app at http://localhost:3000. In development, requests to /api are proxied via setupProxy.js to handle CORS

### Production

1. Build the production app:

```bash
npm run build
```

2. Deploy to Vercel

Vercel will automatically use /api/fruits to route requests to the fruits.mjs serverless function, which handles CORS by fetching data from the external API and returning it to the app.

## Deployment

- Automated Deployment: Vercel is configured to automatically trigger a deployment workflow upon every merge to the master branch

## Additional Notes

- API Calls: Use /api as the base URL in development, and /api/fruits as the endpoint in production
