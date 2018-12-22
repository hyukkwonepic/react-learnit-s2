import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// import { ApolloClient } from 'apollo-client';
// import { ApolloProvider } from 'react-apollo';
// import { getMainDefinition } from 'apollo-utilities';
// import { ApolloLink, split } from 'apollo-link';
// import { HttpLink } from 'apollo-link-http';
// import { WebSocketLink } from 'apollo-link-ws';
// import { InMemoryCache } from 'apollo-cache-inmemory';

import App from './App';

// const httpLink = new HttpLink({
//   uri: process.env.NODE_ENV === 'development' ? 'http://localhost:4000/graphql' : 'https://server-epsezcvcir.now.sh/graphql'
// });

// const wsLink = new WebSocketLink({
//   uri: process.env.NODE_ENV === 'development' ? 'ws://localhost:4000/graphql' : 'wss://server-epsezcvcir.now.sh/graphql',
//   options: {
//     reconnect: true
//   }
// });

// const terminatingLink = split(
//   ({ query }) => {
//     const { kind, operation } = getMainDefinition(query);
//     return (
//       kind === 'OperationDefinition' && operation === 'subscription'
//     );
//   },
//   wsLink,
//   httpLink,
// );

// const link = ApolloLink.from([terminatingLink]);

// const cache = new InMemoryCache();

// const client = new ApolloClient({
//   link,
//   cache,
// });

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);