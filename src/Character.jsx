import React from "react";
import { useNavigate } from "react-router-dom";

const Character = ({ character }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/character/${character.id}`);
  };

  return (
    <div onClick={handleClick} className="card">
      <div className="border border-gray-200 rounded-lg p-4 shadow-lg">
        <img
          src={character.image}
          alt={character.name}
          className="w-full h-auto rounded-md mb-2"
        />
        <h2 className="text-lg font-semibold">{character.name}</h2>
        <p>Status: {character.status}</p>
        <p>Species: {character.species}</p>
        <p>Gender: {character.gender}</p>
      </div>
    </div>
  );
};

export default Character;
