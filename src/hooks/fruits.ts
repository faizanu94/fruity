import useSWR from 'swr';
import { Fruit } from '../types';

const FRUITS_API_URL =
  process.env.NODE_ENV === 'production' ? '/api/fruits' : '/api';

const fetcher = (url: string): Promise<Fruit[]> =>
  fetch(url).then((res) => {
    if (!res.ok) {
      if (res.status === 500) {
        throw new Error('Internal server error');
      }
      throw new Error('Network response was not ok');
    }
    if (res.status !== 200) {
      throw new Error(`Unexpected status code: ${res.status}`);
    }
    return res.json();
  });

export const useFruits = () => {
  const { data, error, mutate, isLoading } = useSWR<Fruit[]>(
    FRUITS_API_URL,
    fetcher
  );

  return {
    fruits: data,
    isLoading,
    isError: error,
    mutate,
  };
};
