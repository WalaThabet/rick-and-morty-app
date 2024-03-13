import React from "react";
import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";

const GET_CHARACTER_DETAILS = gql`
  query GetCharacterDetails($id: ID!) {
    character(id: $id) {
      id
      name
      image
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
    <div>
      <h1>{data.character.name}</h1>
      <img src={data.character.image} alt={data.character.name} />
      {/* Display other character details here */}
    </div>
  );
};

export default CharacterDetails;
