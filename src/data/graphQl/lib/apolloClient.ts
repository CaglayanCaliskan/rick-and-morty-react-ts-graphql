import {
  ApolloClient,
  defaultDataIdFromObject,
  InMemoryCache,
} from '@apollo/client';
import {assertDirective} from 'graphql';

const mergePolicyCharacters = (existing: any = [], incoming: any) => {
  let existingResults: any[] = [];
  if (existing && existing.results) {
    existingResults = existing.results;
  }
  return {
    info: incoming?.info,
    results: [...existingResults, ...incoming?.results],
  };
};

export const apolloClient = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          characters: {
            keyArgs: false,
            merge(existing: any = [], incoming: any) {
              return mergePolicyCharacters(existing, incoming);
            },
          },
          episodes: {
            keyArgs: false,
            merge(existing: any = [], incoming: any) {
              return mergePolicyCharacters(existing, incoming);
            },
          },
        },
      },
    },
  }),
});
