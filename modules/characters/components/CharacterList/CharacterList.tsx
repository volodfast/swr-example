import { FC } from 'react';
// hooks
import { useCharacterList } from '../../hooks/useCharacterList';

const CharacterList: FC = () => {
  const { data, error } = useCharacterList();

  return (
    <div>
      <h2>Character List</h2>
      <div>
        {data?.results?.map((character) => {
          return (
            <div key={character.id}>
              <div>Name: {character.name}</div>
              <img src={character.image} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CharacterList;
