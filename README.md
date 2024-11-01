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
