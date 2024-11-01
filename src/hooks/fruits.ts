import useSWR from 'swr';
import { Fruit } from '../types';

const FRUITS_API_URL =
  'https://wcz3qr33kmjvzotdqt65efniv40kokon.lambda-url.us-east-2.on.aws/';

const fetcher = (url: string): Promise<Fruit[]> =>
  fetch(url).then((res) => res.json());

export const useFruits = () => {
  const { data, error } = useSWR<Fruit[]>(FRUITS_API_URL, fetcher);

  return {
    fruits: data,
    isLoading: !error && !data,
    isError: error,
  };
};
