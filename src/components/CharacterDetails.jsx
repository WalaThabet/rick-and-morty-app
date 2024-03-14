import React from "react";
import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";

const GET_CHARACTER_DETAILS = gql`
  query GetCharacterDetails($id: ID!) {
    character(id: $id) {
      id
      name
      image
      species
      gender
      status
    }
  }
`;

const CharacterDetails = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_CHARACTER_DETAILS, {
    variables: { id },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-xl w-full bg-white rounded-lg shadow-md p-4">
        <div className="flex flex-col items-center">
          <img
            src={data.character.image}
            alt={data.character.name}
            className="w-full h-auto rounded-md mb-2"
          />
          <h2 className="text-lg font-semibold">{data.character.name}</h2>
          <p>Status: {data.character.status}</p>
          <p>Species: {data.character.species}</p>
          <p>Gender: {data.character.gender}</p>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetails;
