import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import { GET_CONTESTANTS } from './../constants/queries';


const Div = styled.div`
  padding: 10px;
`


function ContestantList() {

  return (
    <Div>
    <h3>Contestants:</h3>
      <Query query={GET_CONTESTANTS}>
       {({ loading, error, data }) => {
         if (loading) return "Loading...";
         if (error) return `Error! ${error.message}`;

         return (
           <ul>
             {data.contestants.map(contestant => (
               <li key={contestant.id}>
                 {contestant.fullName}
               </li>
             ))}
           </ul>
         );
       }}
      </Query>
    </Div>
  )
}

export default ContestantList;
