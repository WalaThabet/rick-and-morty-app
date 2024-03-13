import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './Character'; // Import the Character component

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
    <div>
      <h1>Rick and Morty Characters</h1>
      <ul>
        {characters.map(character => (
          <Character key={character.id} character={character} />
        ))}
      </ul>
    </div>
  );
};

export default CharacterList;
