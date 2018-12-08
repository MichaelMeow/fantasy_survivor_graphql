import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

const GET_CONTESTANTS = gql`
  {
    contestants{
      firstName
      lastName
      id
    }
  }
`

function Move(props) {

  return (
    <div>
      Contestant List:

      <Query query={GET_CONTESTANTS}>
      {({ loading, error, data }) => {
        if (loading) return "Loading...";
        if (error) return `Error! ${error.message}`;
        return (
          <ul>
          {data.contestants.map(contestant => (
            <li key={contestant.id}>{contestant.firstName} {contestant.lastName}</li>
          ))}
          </ul>
        );
      }}
      </Query>
    </div>
  );
}



export default Move;
