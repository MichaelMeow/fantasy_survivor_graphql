import gql from 'graphql-tag';

const GET_CONTESTANTS = gql`
  {
    contestants{
      id
      fullName
      firstName
      lastName
      photoURL
    }
  }
`;

export { GET_CONTESTANTS };

const GET_TRIBES = gql`
  {
    tribes{
      id
      name
      color
    }
  }
`
export { GET_TRIBES };
