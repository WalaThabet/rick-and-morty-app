import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './Character';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(response => {
        setCharacters(response.data.results);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Rick and Morty Characters</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {characters.map(character => (
          <Character key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
};

export default CharacterList;
