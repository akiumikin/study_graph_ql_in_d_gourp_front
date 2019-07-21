import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { onError } from 'apollo-link-error'
import { ApolloLink } from 'apollo-link'

const httpLink = new HttpLink({
  uri: 'http://localhost:3000/graphql',
  headers: {}
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    // do something with graphql error
  }

  if (networkError) {
    // do something with network error
  }
});

const link = ApolloLink.from([errorLink, httpLink]);
const cache = new InMemoryCache();

export const client = new ApolloClient({
  link,
  cache
});
