import React, { useState } from "react";
import Character from "./Character";
import { useQuery, gql } from "@apollo/client";

const CharacterList = () => {
  const [nameFilter, setNameFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const GET_CHARACTERS = gql`
    query GetCharacters($name: String) {
      characters(filter: { name: $name }) {
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
  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: { name: searchTerm },
  });

  const handleSearch = () => {
    setSearchTerm(nameFilter);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Rick and Morty Characters</h1>
      <br></br>
      <input
        className="flex-grow rounded-l-md border border-gray-200 px-4 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        type="text"
        placeholder="Filter by name"
        value={nameFilter}
        onChange={(e) => setNameFilter(e.target.value)}
      />
      <button
        className="rounded-r-md bg-blue-500 text-white px-4 hover:bg-blue-600 py-2"
        onClick={handleSearch}
      >
        Search
      </button>

      <br></br>
      <br></br>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.characters.results.map((character) => (
          <Character key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
};

export default CharacterList;
