import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { Query } from 'react-apollo';

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

const GET_CONTESTANTS = gql`
  {
    contestants{
      fullName
      id
    }
  }
`


function EpisodeForm(props) {
  let number;
  let title;
  let out1;
  let out2;
  let out3;
  let episodeMessage;
  let airDate;

  return (
    <div>
      <Mutation mutation={ADD_EPISODE}>
        {(addEpisode, { data }) => (
          <form onSubmit={e => {
            e.preventDefault();
            addEpisode({
              variables: {
                number: parseInt(number.value),
                title: title.value,
                out1: out1.value,
                out2: out2.value,
                out3: out3.value,
                episodeMessage: episodeMessage.value,
                airDate: airDate.value,
              }
            });
            title.value = "";
            number.value = "";
            episodeMessage.value = "";
          }}>
            <h3>
              Enter Episode Info
            </h3>
            <div>
              Episode Number:
              <input
                type='number'
                id='episodeNumber'
                placeholder='Episode Number'
                ref={(input)=>{number = input}}/>
            </div>
            <div>
              Episode Title:
              <input
                type='text'
                placeholder='Episode Title'
                ref={(input)=>{title = input}}/>
            </div>
            <div>
              Contestant Out:
                <Query query={GET_CONTESTANTS}>
                {({ loading, error, data }) => {
                  if (loading) return "Loading...";
                  if (error) return `Error! ${error.message}`;
                  return (
                    <select ref={(input) => {out1 = input;}}>
                      <option key='0' value=''>Select a Contestant</option>
                      {data.contestants.map(contestant => (
                        <option key={contestant.id} value={contestant.id}>{contestant.fullName}</option>
                      ))}
                    </select>
                  );
                }}
                </Query>
            </div>
            <div>
              Contestant Out 2(optional):
              <Query query={GET_CONTESTANTS}>
              {({ loading, error, data }) => {
                if (loading) return "Loading...";
                if (error) return `Error! ${error.message}`;
                return (
                  <select ref={(input) => {out2 = input;}}>
                    <option key='0' value=''>Select a Contestant</option>
                    {data.contestants.map(contestant => (
                      <option key={contestant.id} value={contestant.id}>{contestant.fullName}</option>
                    ))}
                  </select>
                );
              }}
              </Query>
            </div>
            <div>
              Contestant Out 3(optional):
              <Query query={GET_CONTESTANTS}>
              {({ loading, error, data }) => {
                if (loading) return "Loading...";
                if (error) return `Error! ${error.message}`;
                return (
                  <select ref={(input) => {out3 = input;}}>
                    <option key='0' value=''>Select a Contestant</option>
                    {data.contestants.map(contestant => (
                      <option key={contestant.id} value={contestant.id}>{contestant.fullName}</option>
                    ))}
                  </select>
                );
              }}
              </Query>
            </div>
            <div>
              Episode Message:
              <input
                type='text'
                placeholder='Episode Message'
                ref={(input)=> {episodeMessage = input}}/>
            </div>
            <div>
              Air Date:
              <input
                type='date'
                placeholder='Air Date'
                ref={(input)=> {airDate = input}}/>
            </div>
            <div>
              <button type='submit'>Submit</button>
            </div>
          </form>
        )}
      </Mutation>
    </div>
  )
}

export default EpisodeForm;
