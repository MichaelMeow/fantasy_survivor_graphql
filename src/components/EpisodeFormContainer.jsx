import React from 'react';
import { Mutation } from 'react-apollo';
import { Query } from 'react-apollo';
import ScoringTable from './ScoringTable';
import styled from 'styled-components';
import { ADD_EPISODE, ADD_POINTS, UPDATE_TRIBE } from './../constants/mutations';
import { GET_CONTESTANTS, GET_EPISODES, GET_VALIDCONTESTANTS, GET_OUTCONTESTANTS } from './../constants/queries';
import { ApolloConsumer } from 'react-apollo';
import gql from 'graphql-tag';

const Div = styled.div`
  padding: 10px;
`

function EpisodeFormContainer(props) {
  let number;
  let title;
  let out1;
  let out2;
  let out3;
  let episodeMessage;
  let airDate;
  let validFormContestants = [];
  let contestants = [];
  let currentEpisode = {number: 99, id: '0'};
  const GET_FORMSTATE = gql`
    {
    number @client
    title @client
    out @client
    episodeMessage @client
    airDate @client
    validFormContestants @client {
      id
      fullName
    }
  }
`;

  async function loadFormInputs(input, client, episodes){
    input.persist();
    let episodeToLoad;
    if (!input.target.value){
      episodeToLoad = 99;
    } else {
      episodes.map(episode=>{
        if (input.target.value == episode.id){
          currentEpisode = episode
          episodeToLoad = episode.number
        }
      })
    const { data:validContestantsData } = await client.query({query: GET_VALIDCONTESTANTS,
                  variables: { filter: episodeToLoad }});
    const { data:outContestantsData } = await client.query({query: GET_OUTCONTESTANTS,
                  variables: { filter: episodeToLoad }});
    client.writeData({ data: {
      validFormContestants: validContestantsData.validContestants,
      outFormContestants: outContestantsData.outContestants,
      title: currentEpisode.title,
      episodeMessage: currentEpisode.episodeMessage,
      airDate: currentEpisode.airDate,
     } })
     out1.value = currentEpisode.out[0].id;
     if (currentEpisode.out[1]){
       out2.value = currentEpisode.out[1].id;
     }
     if (currentEpisode.out[2]){
       out3.value = currentEpisode.out[2].id;
     }
    const { data } = await client.query({query: GET_FORMSTATE});
  }
  }

  function loadOutSelect(out1id){
    out1.value = out1id;
  }

  function updateFormState(input, client){
    input.persist();

    client.writeData({ data: {
      [input.target.id]: input.target.value
     } })
  }

  return (
    <Div>
      <Query query={GET_FORMSTATE}>
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return `Error! ${error.message}`;
          const formData = data;
          console.log(data);
          return (
      <Query query={GET_EPISODES}>
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return `Error! ${error.message}`;
          let episodes = data.episodes;
          return (
      <ApolloConsumer>
      {client => (
      <form onSubmit={e => {
        e.persist();
        e.preventDefault();
        return null;
      }}>

      <h3>
        Enter Episode Info
      </h3>

      <Div>
        Episode Number:
           <select ref={(input)=>{number = input}} onChange={input => {loadFormInputs(input, client, episodes)}}>
              <option disabled selected> Select Episode </option>
              <option value=''> New Episode </option>
             {episodes.map(episode => (
               <option key={episode.id} value={episode.id}>
                 {episode.number} - {episode.title}
               </option>
             ))}
           </select>
      </Div>
      <Div>
        Episode Title:
        <input
          type='text'
          placeholder='Episode Title'
          id='title'
          ref={(input)=>{title = input}}
          value={formData.title}
          onChange={input=>{updateFormState(input, client)}}/>
      </Div>
       <Div>
         Contestant Out:
         <select id={out1} ref={(input) => {out1 = input;}} >
           <option value=''  disabled selected>Select a Contestant</option>
           {formData.validFormContestants.map(contestant => (
             <option key={contestant.id} value={contestant.id}>{contestant.fullName}</option>
           ))}
         </select>
       </Div>

       <Div>
         Contestant Out 2 (Optional):
         <select ref={(input) => {out2 = input;}} >
           <option value=''>Select a Contestant</option>
           {formData.validFormContestants.map(contestant => (
             <option key={contestant.id} value={contestant.id}>{contestant.fullName}</option>
           ))}
         </select>
       </Div>
       <Div>
         Contestant Out3 (Optional):
         <select ref={(input) => {out3 = input;}}>
           <option value=''>Select a Contestant</option>
           {formData.validFormContestants.map(contestant => (
             <option key={contestant.id} value={contestant.id}>{contestant.fullName}</option>
           ))}
         </select>
       </Div>
      <Div>
        Episode Message:
        <input
          type='text'
          placeholder='Episode Message'
          id='episodeMessage'
          ref={(input)=> {episodeMessage = input}}
          value={formData.episodeMessage}
          onChange={input=>{updateFormState(input, client)}}/>
      </Div>
      <Div>
        Air Date:
        <input
          type='date'
          placeholder='Air Date'
          ref={(input)=> {airDate = input}} value={formData.airDate}/>
      </Div>
        <ScoringTable currentEpisode={currentEpisode}/>
        <Div>
          <button type='submit'>Submit</button>
        </Div>
      </form>
    )}
    </ApolloConsumer>
  );
}}
</Query>
  );
}}
</Query>
    </Div>
  )
}

export default EpisodeFormContainer;
