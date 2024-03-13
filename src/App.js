import React from "react";
import "./App.css";
import CharacterList from "./CharacterList";
import CharacterDetails from "./CharacterDetails";
import client from "./apolloClient";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path="/" element={<CharacterList />} />
          <Route path="/character/:id" element={<CharacterDetails />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
