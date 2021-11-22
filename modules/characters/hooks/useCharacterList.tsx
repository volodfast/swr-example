import useSWR from 'swr';

const fetcher = () =>
  fetch('https://rickandmortyapi.com/api/character').then((res) => res.json());

export const useCharacterList = () => {
  const { data, error } = useSWR('characterList', fetcher);

  return {
    data,
    error,
  };
};
