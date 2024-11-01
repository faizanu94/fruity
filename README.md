# Fruity

Fruity allows users to browse a list of fruits, grouped by various categories and add selected fruits to a "jar". The app calculates the total calories of fruits added to the jar, providing a simple interface for interactive data display

## Technologies

- React: Library for building the UI
- TypeScript: For type safety and better developer experience
- Zustand: Manages global state efficiently
- SWR: Handles data fetching and caching

## Project Structure

```plaintext
/src
  ├── /components              # add components
  ├── /hooks                   # Custom hooks for data fetching
  ├── /store                   # Zustand store for state management
  ├── /styles                  # Shared styles
  ├── App.tsx                  # Main app component
  ├── index.tsx                # Entry point
  └── types.d.ts               # TypeScript types
