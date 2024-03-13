import React from 'react';
import './App.css';
import CharacterList from './CharacterList';
import client from './apolloClient';
import { ApolloProvider } from '@apollo/client';

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <CharacterList />
      </div>
    </ApolloProvider>
  );
}

export default App;
