import gql from 'graphql-tag';

const ADD_EPISODE = gql`
  mutation AddEpisode(
    $number: Int!,
    $title: String!,
    $out1: ID,
    $out2: ID,
    $out3: ID,
    $episodeMessage: String!
    $airDate: String!){
      addEpisode(
        number: $number,
        title: $title,
        out1: $out1,
        out2: $out2,
        out3: $out3,
        episodeMessage: $episodeMessage,
        airDate: $airDate){
          id
          number
          title
          episodeMessage
          airDate
        }
  }
`

const ADD_POINTS = gql`
  mutation AddPoints(
    $contestant: ID!,
    $episode: ID!,
    $teamReward: Boolean!,
    $teamImmunity: Boolean!,
    $individualReward: Boolean!,
    $individualImmunity: Boolean!,
    $correctVote: Boolean!,
    $recievedVote: Boolean!,
    $out: Boolean!,
    $recievedClue: Boolean!,
    $foundIdol: Boolean!,
    $foundAdvantage: Boolean!,
    $heldIdol: Int!,
    $heldAdvantage: Boolean!,
    $quoted: Boolean!,
    $chosenForReward: Boolean!,
    $juryVotes: Int!,
    $special: Int!){
      addPoints(
        contestant: $contestant,
        episode: $episode,
        teamReward: $teamReward,
        teamImmunity: $teamImmunity,
        individualReward: $individualReward,
        individualImmunity: $individualImmunity,
        correctVote: $correctVote,
        recievedVote: $recievedVote,
        out: $out,
        recievedClue: $recievedClue,
        foundIdol: $foundIdol,
        foundAdvantage: $foundAdvantage,
        heldIdol: $heldIdol,
        heldAdvantage: $heldAdvantage,
        quoted: $quoted,
        chosenForReward: $chosenForReward,
        juryVotes: $juryVotes,
        special: $special){
          id
          contestant{
            id
          }
          teamReward
          teamImmunity
          individualReward
          individualImmunity
          correctVote
          recievedVote
          out
          recievedClue
          foundIdol
          foundAdvantage
          heldIdol
          heldAdvantage
          quoted
          chosenForReward
          juryVotes
          special
          total
        }
  }
`

export { ADD_POINTS };
export { ADD_EPISODE };


const ADD_TRIBE = gql`
  mutation AddTribe(
    $name: String!,
    $color: String!){
      addTribe(
        name: $name,
        color: $color ){
          id
          name
          color
      }
  }
`
export { ADD_TRIBE };


const ADD_CONTESTANT = gql`
  mutation AddContestant(
    $firstName: String!,
    $lastName: String!,
    $photoURL: String!,
    $originalTribe: ID!,
    $currentTribe: ID!){
      addContestant(
        firstName: $firstName,
        lastName: $lastName,
        photoURL: $photoURL,
        originalTribe: $originalTribe
        currentTribe: $currentTribe
      ){
        id
        fullName
        firstName
        lastName
        photoURL
      }
  }
`
export { ADD_CONTESTANT };

const UPDATE_TRIBE = gql`
  mutation UpdateTribe(
    $tribe: ID!
    $contestant: ID!){
      updateContestant(
        tribe: $tribe,
        contestant: $contestant
        ){
        id
        currentTribe{
          id
        }
      }
  }
`

export { UPDATE_TRIBE };
