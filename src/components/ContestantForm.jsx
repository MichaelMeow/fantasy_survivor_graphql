import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

const ADD_CONTESTANT = gql`
  mutation AddContestant(
    $firstName: String!,
    $lastName: String!,
    $photoURL: String!,
    $originalTribe: String! ){
      addContestant(
        firstName: $firstName,
        lastName: $lastName,
        photoURL: $photoURL,
        originalTribe: $originalTribe ){
          id
      }
  }
`

function ContestantForm() {

  let firstName;
  let lastName;
  let photoURL;
  let originalTribe;

  return (
    <div>
      <Mutation mutation={ADD_CONTESTANT}>
        {(addContestant, { data }) => (
          <div>
            <form
              onSubmit={e => {
                e.preventDefault();
                addContestant({
                  variables: {
                    firstName: firstName.value,
                    lastName: lastName.value,
                    photoURL: photoURL.value,
                    originalTribe: originalTribe.value,
                  }
                });
                firstName.value = "";
                lastName.value = "";
                photoURL.value = "";
                originalTribe.value = "";
              }}>
              <h3>
                Add Contestants:
              </h3>
              <div>
                To be used at beginning of the season to add survivor contestants to the game.
              </div>
              <div>
                Contestant First Name
              </div>
              <div>
                <input
                  type='text'
                  id='firstName'
                  placeholder='First Name'
                  ref={(input) => {firstName = input;}}/>
              </div>
              <div>
                Contestant Last Name
              </div>
              <div>
                <input
                  type='text'
                  id='lastName'
                  placeholder='Last Name'
                  ref={(input) => {lastName = input;}}/>
              </div>
              <div>
                Contestant Starting Tribe
              </div>
              <div>
                <input
                  type='text'
                  id='originalTribe'
                  placeholder='Original Tribe'
                  ref={(input) => {originalTribe = input;}}/>
              </div>
              <div>
                Contestant Photo URL (Headshot from CBS.com, example: https://wwwimage-secure.cbsstatic.com/thumbnails/photos/w270/cast/13c7e74872b87a9d_svr37_800x1000_nataliaazoqa.jpg)
              </div>
              <div>
                <input
                  type='text'
                  id='photoURL'
                  placeholder='photo URL'
                  ref={(input) => {photoURL = input;}}/>
              </div>
              <div>
                <button type='submit'>Submit</button>
              </div>
            </form>
          </div>
        )}
      </Mutation>
      <style jsx>{`
        div {
          padding: 10px;
        }
        .green {
          background-color: lightgreen;
          border-radius: 5px;
        }
        button {
          padding: 5px 35px;
          background-color: #8EE7EC;
          border-radius: 5px;
          border: none;
          color: #010101;
        }
      `}</style>
    </div>
  )

}

export default ContestantForm;
