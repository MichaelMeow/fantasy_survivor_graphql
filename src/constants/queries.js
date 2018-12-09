import gql from 'graphql-tag';

const GET_CONTESTANTS = gql`
  {
    contestants{
      fullName
      id
    }
  }
`;

export { GET_CONTESTANTS };
