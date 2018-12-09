import gql from 'graphql-tag';

const ADD_EPISODE = gql`
  mutation AddEpisode(
    $number: Int!,
    $title: String!,
    $out1: String!,
    $out2: String!,
    $out3: String!,
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
        }
  }
`

const ADD_POINTS = gql`
  mutation AddPoints(
    $contestantID: String!,
    $episodeNumber: Int!,
    $teamReward: Int!,
    $teamImmunity: Int!,
    $individualReward: Int!,
    $individualImmunity: Int!,
    $correctVote: Int!,
    $recievedVote: Int!,
    $out: Int!,
    $recievedClue: Int!,
    $foundIdol: Int!,
    $foundAdvantage: Int!,
    $heldIdol: Int!,
    $heldAdvantage: Int!,
    $quoted: Int!,
    $chosenForReward: Int!,
    $juryVotes: Int!,
    $special: Int!,
    $total: Int!){
      addPoints(
        contestantID: $contestantID,
        episodeNumber: $episodeNumber,
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
        special: $special,
        total: $total){
          total
        }
  }
`

export { ADD_POINTS };
export { ADD_EPISODE };
