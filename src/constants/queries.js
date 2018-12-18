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
        id
        name
      }
      out {
        id
      }
    }
  }
`;

export { GET_CONTESTANTS };

const GET_VALIDCONTESTANTS = gql`
  {
    validContestants{
      id
      fullName
      firstName
      lastName
      photoURL
      currentTribe{
        id
        name
      }
    }
  }
`;

export { GET_VALIDCONTESTANTS };
const GET_OUTCONTESTANTS = gql`
  {
    outContestants{
      id
      fullName
      firstName
      lastName
      photoURL
      currentTribe{
        id
        name
      }
      out {
        id
        number
      }
    }
  }
`;

export { GET_OUTCONTESTANTS };

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
