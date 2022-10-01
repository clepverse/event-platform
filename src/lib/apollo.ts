import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/cl8gmbff94inp01ueevdwdu1i/master',
  cache: new InMemoryCache({}),
});
