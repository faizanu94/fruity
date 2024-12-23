import { create } from 'zustand';
import { Fruit } from '../types';

interface JarState {
  fruitsInJar: { fruit: Fruit; count: number }[];
  addFruit: (fruit: Fruit) => void;
  removeFruit: (fruit: Fruit) => void;
  clearJar: () => void;
  addAllFruits: (fruits: Fruit[]) => void;
}

export const useJarStore = create<JarState>()((set) => ({
  fruitsInJar: [],
  addFruit: (fruit: Fruit) =>
    set((state) => {
      const existingFruit = state.fruitsInJar.find(
        (f) => f.fruit.name === fruit.name
      );
      if (existingFruit) {
        return {
          fruitsInJar: state.fruitsInJar.map((f) =>
            f.fruit.name === fruit.name ? { ...f, count: f.count + 1 } : f
          ),
        };
      }
      return { fruitsInJar: [...state.fruitsInJar, { fruit, count: 1 }] };
    }),
  removeFruit: (fruit: Fruit) =>
    set((state) => {
      const existingFruit = state.fruitsInJar.find(
        (f) => f.fruit.name === fruit.name
      );
      if (existingFruit && existingFruit.count > 1) {
        return {
          fruitsInJar: state.fruitsInJar.map((f) =>
            f.fruit.name === fruit.name ? { ...f, count: f.count - 1 } : f
          ),
        };
      }
      return {
        fruitsInJar: state.fruitsInJar.filter(
          (f) => f.fruit.name !== fruit.name
        ),
      };
    }),
  clearJar: () => set({ fruitsInJar: [] }),
  addAllFruits: (fruits: Fruit[]) =>
    set((state) => {
      const newFruits = fruits.map((fruit) => ({ fruit, count: 1 }));
      return { fruitsInJar: [...state.fruitsInJar, ...newFruits] };
    }),
}));
