
import { gql } from 'apollo-server-lambda';

const typeDefs = gql`
  type Query{
    placeholder: Int
  }
`;

const resolvers = {
};
const defaults = {

};


export { resolvers };
export { typeDefs };
export { defaults };
