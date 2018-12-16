import React from 'react';
import gql from 'graphql-tag';
import { Mutation, Query } from 'react-apollo';
import styled from 'styled-components';
import { ADD_CONTESTANT } from './../constants/mutations';
import { GET_TRIBES, GET_CONTESTANTS } from './../constants/queries';
import ContestantList from './ContestantList';

const Div = styled.div`
  padding: 10px;
`
const Button = styled.button`
  padding: 5px 35px;
  background-color: #8EE7EC;
  border-radius: 5px;
  border: none;
  color: #010101;
`

function ContestantForm() {

  let firstName;
  let lastName;
  let photoURL;
  let originalTribe;

  return (
    <Div>
      <Mutation mutation={ADD_CONTESTANT} update={(cache, { data: { addContestant } }) => {
        const { contestants } = cache.readQuery({ query: GET_CONTESTANTS });
        cache.writeQuery({
          query: GET_CONTESTANTS,
          data: { contestants: contestants.concat([addContestant]) }
        })
        console.log(cache);
      }}>
        {(addContestant, { data }) => (
          <Div>
            <form
              onSubmit={e => {
                e.preventDefault();
                addContestant({
                  variables: {
                    firstName: firstName.value,
                    lastName: lastName.value,
                    photoURL: photoURL.value,
                    originalTribe: originalTribe.value,
                    currentTribe: originalTribe.value
                  }
                });
                firstName.value = "";
                lastName.value = "";
                photoURL.value = "";
              }}>
              <h3>
                Add Contestants:
              </h3>
              <Div>
                To be used at beginning of the season to add survivor contestants to the game.
              </Div>
              <Div>
                Contestant First Name
              </Div>
              <Div>
                <input
                  type='text'
                  id='firstName'
                  placeholder='First Name'
                  ref={(input) => {firstName = input;}}/>
              </Div>
              <Div>
                Contestant Last Name
              </Div>
              <Div>
                <input
                  type='text'
                  id='lastName'
                  placeholder='Last Name'
                  ref={(input) => {lastName = input;}}/>
              </Div>
              <Div>
                Contestant Starting Tribe
              </Div>
              <Div>
                <Query query={GET_TRIBES}>
                 {({ loading, error, data }) => {
                   if (loading) return "Loading...";
                   if (error) return `Error! ${error.message}`;

                   return (
                     <select ref = {(input)=> originalTribe = input}>
                       {data.tribes.map(tribe => (
                         <option key={tribe.id} value={tribe.id} style={{color: `${tribe.color}`}}>
                           {tribe.name}
                         </option>
                       ))}
                     </select>
                   );
                 }}
                </Query>
              </Div>
              <Div>
                Contestant Photo URL (Headshot from CBS.com, example: https://wwwimage-secure.cbsstatic.com/thumbnails/photos/w270/cast/13c7e74872b87a9d_svr37_800x1000_nataliaazoqa.jpg)
              </Div>
              <Div>
                <input
                  type='text'
                  id='photoURL'
                  placeholder='photo URL'
                  ref={(input) => {photoURL = input;}}/>
              </Div>
              <Div>
                <Button type='submit'>Submit</Button>
              </Div>
            </form>
          </Div>
        )}
      </Mutation>
      <ContestantList />
    </Div>
  )

}

export default ContestantForm;
