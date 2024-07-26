import { Apollo, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { ApplicationConfig, inject } from '@angular/core';
import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core';
const { TOKEN } = process.env;

const uri = 'https://api.github.com/graphql'; // <-- add the URL of the GraphQL server here

const headers = {
  "Content-Type": "application/json",
  'Access-Control-Allow-Origin': '*',
   "Authorization": `bearer ${TOKEN}`,
};
export function apolloOptionsFactory(): ApolloClientOptions<any> {
  const httpLink = inject(HttpLink);
  return {
    link: httpLink.create({ uri }),
    headers: headers,
    cache: new InMemoryCache(),
  };
}

export const graphqlProvider: ApplicationConfig['providers'] = [
  Apollo,
  {
    provide: APOLLO_OPTIONS,
    useFactory: apolloOptionsFactory,
  },
];

