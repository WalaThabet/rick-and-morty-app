import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import CharacterList from "../components/CharacterList";
import { gql } from "@apollo/client";
import { BrowserRouter as Router } from "react-router-dom";

const GET_CHARACTERS = gql`
  query GetCharacters(
    $page: Int
    $name: String
    $status: String
    $species: String
  ) {
    characters(
      page: $page
      filter: { name: $name, status: $status, species: $species }
    ) {
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
const mocks = [
  {
    request: {
      query: GET_CHARACTERS,
      variables: {
        page: 1,
        name: null,
        status: null,
        species: null,
      },
    },
    result: {
      data: {
        characters: {
          info: { count: 1, pages: 1, next: null, prev: null },
          results: [{ id: "1", name: "Rick", image: "url-to-image" }],
        },
      },
    },
  },
];

it("renders CharacterList with data", async () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Router>
        <CharacterList />
      </Router>
    </MockedProvider>
  );

  await waitFor(() => {
    const image = screen.getByAltText("Rick");
    expect(image.getAttribute("src")).toBe("url-to-image");
  });
});
