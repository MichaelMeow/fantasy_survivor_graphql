import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import styled from 'styled-components';

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


const ADD_TRIBE = gql`
  mutation AddTribe(
    $name: String!,
    $color: String!){
      addTribe(
        name: $name,
        color: $color ){
          id
      }
  }
`

function TribeForm() {

  let name;
  let color;

  return (
    <Div>
      <Mutation mutation={ADD_TRIBE}>
        {(addTribe, { data }) => (
          <Div>
            <form
              onSubmit={e => {
                e.preventDefault();
                addTribe({
                  variables: {
                    name: name.value,
                    color: color.value,
                  }
                });
                name.value = "";
              }}>
              <h3>
                Add Tribe:
              </h3>
              <Div>
                Tribe Name
              </Div>
              <Div>
                <input
                  type='text'
                  id='name'
                  placeholder='Tribe Name'
                  ref={(input) => {name = input;}}/>
              </Div>
              <Div>
                Color
              </Div>
              <Div>
                <input
                  type='color'
                  id='color'
                  ref={(input) => {color = input;}}/>
              </Div>
              <Div>
                <Button type='submit'>Submit</Button>
              </Div>
            </form>
          </Div>
        )}
      </Mutation>
    </Div>
  )

}

export default TribeForm;
