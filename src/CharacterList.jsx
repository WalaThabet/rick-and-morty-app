import React, { useState } from "react";
import Character from "./Character";
import { useQuery, gql } from "@apollo/client";

const CharacterList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [nameFilter, setNameFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const GET_CHARACTERS = gql`
    query GetCharacters($page: Int) {
      characters(page: $page) {
        info {
          count
          pages
          next
          prev
        }
        results {
          id
          name
          image
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: { page: currentPage },
  });

  const goToNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSearch = () => {
    setSearchTerm(nameFilter);
  };

  return (
    <div className="App">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Rick and Morty Characters</h1>
        {error && <p>Error: {error.message}</p>}
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
          {data &&
            data.characters.results.map((character) => (
              <Character key={character.id} character={character} />
            ))}
        </div>
        <br></br>

        <div className="flex flex-row items-center gap-2">
          <button
            onClick={goToPreviousPage}
            className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            disabled={currentPage <= 1}
          >
            Previous
          </button>
          <button
            onClick={goToNextPage}
            className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            disabled={!data || !data.characters.info.next}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CharacterList;
