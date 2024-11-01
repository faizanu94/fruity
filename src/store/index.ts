import { create } from 'zustand';
import { Fruit } from '../types';

interface JarState {
  fruitsInJar: Fruit[];
  addFruit: (fruit: Fruit) => void;
}

export const useJarStore = create<JarState>()((set) => ({
  fruitsInJar: [],
  addFruit: (fruit: Fruit) =>
    set((state: JarState) => ({ fruitsInJar: [...state.fruitsInJar, fruit] })),
}));
