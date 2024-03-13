import React from 'react';

const Character = ({ character }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 shadow-lg">
      <img src={character.image} alt={character.name} className="w-full h-auto rounded-md mb-2" />
      <h2 className="text-lg font-semibold">{character.name}</h2>
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <p>Gender: {character.gender}</p>
    </div>
  );
};

export default Character;
