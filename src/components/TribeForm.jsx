import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import styled from 'styled-components';
import TribeList from './TribeList';
import { ADD_TRIBE } from './../constants/mutations';
import { GET_TRIBES } from './../constants/queries';

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

function TribeForm() {

  let name;
  let color;

  return (
    <Div>
      <Mutation mutation={ADD_TRIBE} update={(cache, { data: { addTribe } }) => {
        const { tribes } = cache.readQuery({ query: GET_TRIBES });
        cache.writeQuery({
          query: GET_TRIBES,
          data: { tribes: tribes.concat([addTribe]) }
        })
      }}>
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
      <TribeList />
    </Div>
  )

}

export default TribeForm;
