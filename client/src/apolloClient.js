import ApolloClient from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const getHeaders = () => {
  const headers = {};
  const token = window.localStorage.getItem('apollo-token');
  if (token) {
    headers.authorization = `Bearer ${token}`;
  } else {
    headers.authorization = 'Bearer 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';
  }
  return headers;
};
// Create an http link:
const link = new HttpLink({
  uri: 'https://api.github.com/graphql',
  fetch,
  headers: getHeaders(),
});

export default new ApolloClient({
  link,
  cache: new InMemoryCache({
    addTypename: true,
  }),
});
