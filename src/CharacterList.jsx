import React from "react";
import Character from "./Character";
import { useQuery, gql } from "@apollo/client";

const CharacterList = () => {
  const GET_CHARACTERS = gql`
    query {
      characters {
        results {
          id
          name
          image
          status
          species
          gender
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_CHARACTERS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Rick and Morty Characters</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.characters.results.map((character) => (
          <Character key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
};

export default CharacterList;
