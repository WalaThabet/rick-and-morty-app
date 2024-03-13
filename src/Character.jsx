import React from 'react';

const Character = ({ character }) => {
  return (
    <li>
      <img src={character.image} alt={character.name} />
      <h2>{character.name}</h2>
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <p>Gender: {character.gender}</p>
    </li>
  );
};

export default Character;
