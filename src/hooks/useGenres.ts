import { useQuery } from '@tanstack/react-query';
import genres from '../data/genres';
import APIClient from '../services/api-client';
import Genre from '../interfaces/Genre';

const apiClient = new APIClient<Genre>('/genres');

const useGenres = () =>
  useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: genres,
  });

export default useGenres;
