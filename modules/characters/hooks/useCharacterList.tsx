import useSWR from 'swr';
// interfaces
import { ApiListResponse } from '../../core/core.interface';
import { Character } from '../character.interface';

const fetcher = (api: string) => {
  return fetch(`https://rickandmortyapi.com/api/${api}`).then((res) => {
    return res.json();
  });
};

export const useCharacterList = (page: number = 1) => {
  const data = useSWR<ApiListResponse<Character[]>, any>(
    `character?page=${page}`,
    fetcher
  );

  return {
    data: data.data,
    error: data.error,
  };
};
