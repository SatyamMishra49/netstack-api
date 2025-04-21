import { gql } from 'graphql-tag';

export const typeDefs = gql`

  type Product {

  }

  type Services {

  }

  


  type Query {
    hello: String
  }

  type Mutation {
    _: Boolean
  }
`;
