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
- http-proxy-middleware: Bypasses CORS restrictions in development and production

## CORS Handling with http-proxy-middleware

To manage CORS, http-proxy-middleware is used in both development and production:

- Development: The setupProxy.js file in src/ directs /api requests to the external API and bypasses CORS issues when running locally
- Production: An Express server (server.js) serves the React production build and proxies /api requests to the external API

## Project Structure

```plaintext
/src
  ├── /components              # app components
  ├── /hooks                   # Custom hook for data fetching
  ├── /store                   # Zustand store for state management
  ├── /styles                  # Shared styles
  ├── App.tsx                  # Main app component
  ├── index.tsx                # Entry point
  └── types.d.ts               # TypeScript types
```

## Deployment

Live at https://fruity-roan.vercel.app

## Getting Started

### Development

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Access the app at http://localhost:3000. In development, requests to /api are proxied via setupProxy.js to handle CORS

### Production

1. Build the production app:

```bash
npm run build
```

2. Start the Express server:

```bash
npm start
```

3. The app will be served on http://localhost:5000 with API requests proxied via server.js to the external API to handle CORS

## Additional Notes

- API Calls: Use /api as the base URL for API calls to ensure compatibility across development and production environments