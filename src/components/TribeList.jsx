import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import { GET_TRIBES } from './../constants/queries';


const Div = styled.div`
  padding: 10px;
`


function TribeList() {

  return (
    <Div>
    <h3>Tribes:</h3>
      <Query query={GET_TRIBES}>
       {({ loading, error, data }) => {
         if (loading) return "Loading...";
         if (error) return `Error! ${error.message}`;

         return (
           <ul>
             {data.tribes.map(tribe => (
               <li key={tribe.id} style={{color: `${tribe.color}`}}>
                 {tribe.name}
               </li>
             ))}
           </ul>
         );
       }}
      </Query>
    </Div>
  )

}

export default TribeList;
