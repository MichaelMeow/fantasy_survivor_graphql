import gql from 'graphql-tag';

const GET_CONTESTANTS = gql`
  {
    contestants{
      id
      fullName
      firstName
      lastName
      photoURL
      currentTribe{
        name
      }
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
const GET_EPISODES = gql`
  {
    episodes{
      id
      number
      title
      episodeMessage
      airDate
    }
  }
`
export { GET_EPISODES };
