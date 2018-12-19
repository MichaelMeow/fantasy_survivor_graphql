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
  query ValidContestants(
    $filter: Int
  ){
    validContestants(filter:$filter){
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
  query OutContestants(
    $filter: Int
  ){
    outContestants(filter:$filter){
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
    episodes(orderBy: number_ASC){
      id
      number
      title
      episodeMessage
      airDate
      out{
        id
        fullName
      }
    }
  }
`
export { GET_EPISODES };

const GET_FORMSTATE = gql`
{
  number @client
  title @client
  out1 @client
  out2 @client
  out3 @client
  episodeMessage @client
  airDate @client
}
`;
export { GET_FORMSTATE };
