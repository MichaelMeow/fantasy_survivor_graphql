import React from 'react';
import { Mutation } from 'react-apollo';
import { Query } from 'react-apollo';
import ScoringTable from './ScoringTable';
import styled from 'styled-components';
import { ADD_EPISODE, ADD_POINTS, UPDATE_TRIBE } from './../constants/mutations';
import { GET_CONTESTANTS, GET_EPISODES, GET_VALIDCONTESTANTS } from './../constants/queries';
import { ApolloConsumer } from 'react-apollo';

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
  let contestants;



  function handleAddPoints(addPoints, contestant, e, number, newEpisodeID){
    const teamReward = e.target[`teamReward${contestant.id}`].checked;
    const teamImmunity = e.target[`teamImmunity${contestant.id}`].checked;
    const individualReward = e.target[`individualReward${contestant.id}`].checked;
    const individualImmunity = e.target[`individualImmunity${contestant.id}`].checked;
    const correctVote = e.target[`correctVote${contestant.id}`].checked;
    const recievedVote = e.target[`recievedVote${contestant.id}`].checked;
    const out = e.target[`out${contestant.id}`].checked;
    const recievedClue = e.target[`clue${contestant.id}`].checked;
    const foundIdol = e.target[`foundIdol${contestant.id}`].checked;
    const foundAdvantage = e.target[`foundAdvantage${contestant.id}`].checked;
    const heldIdol = e.target[`heldIdol${contestant.id}`].value ? parseInt(e.target[`heldIdol${contestant.id}`].value) : 0;
    const heldAdvantage = e.target[`heldAdvantage${contestant.id}`].checked;
    const quoted = e.target[`quoted${contestant.id}`].checked;
    const chosenForReward = e.target[`chosenReward${contestant.id}`].checked;
    const juryVotes = e.target[`juryVotes${contestant.id}`].value ? parseInt(e.target[`juryVotes${contestant.id}`].value) : 0;
    const special = e.target[`special${contestant.id}`].value ? parseInt(e.target[`special${contestant.id}`].value) : 0;
    const total = teamReward + teamImmunity + individualReward + individualImmunity + correctVote + recievedVote + out + recievedClue + foundIdol + foundAdvantage + heldIdol + heldAdvantage + quoted + chosenForReward + juryVotes + special;

    addPoints({
      variables: {
        contestant: contestant.id,
        episode: newEpisodeID,
        tribe: e.target[`tribe${contestant.id}`].value,
        teamReward: teamReward,
        teamImmunity: teamImmunity,
        individualReward: individualReward,
        individualImmunity: individualImmunity,
        correctVote: correctVote,
        recievedVote: recievedVote,
        out: out,
        recievedClue: recievedClue,
        foundIdol: foundIdol,
        foundAdvantage: foundAdvantage,
        heldIdol: heldIdol,
        heldAdvantage: heldAdvantage,
        quoted: quoted,
        chosenForReward: chosenForReward,
        juryVotes: juryVotes,
        special: special,
        total: total,
      }
    })
  };

  function handleUpdateTribe(updateTribe, contestant, e){
    updateTribe({
      variables: {
        tribe: e.target[`tribe${contestant.id}`].value,
        contestant: contestant.id
      }
    })
  }

  function loadFormInputs(episodeInput){
    const episodeID = episodeInput.target.value;
    console.log(episodeID);
    title.value = "gotcha";
    // contestants = validcontestatns at currentep
    //out1.value = contestant out at currentep
    episodeMessage.value = "message here";
    airDate.value = "2018-12-28"
    contestants.map(contestant => {
      console.log([`clue${contestant.id}`].checked)
    }
    )
  }


  return (
    <Div>
      <Query query={GET_CONTESTANTS}>
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return `Error! ${error.message}`;
          contestants = data.contestants;
          return (
            <Query query={GET_EPISODES}>
             {({ loading, error, data }) => {
               if (loading) return "Loading...";
               if (error) return `Error! ${error.message}`;
               let episodesData = data.episodes;
               return (
              <Mutation mutation={ADD_EPISODE} update={(cache, { data: { addEpisode } }) => {
                const { episodes } = cache.readQuery({ query: GET_EPISODES });
                cache.writeQuery({
                  query: GET_EPISODES,
                  data: { episodes: episodes.concat([addEpisode]) }
                })
              }}>
                {(addEpisode, { data }) => (
                  <Mutation mutation={ADD_POINTS}>
                  {(addPoints, { data }) => (
                    <Mutation mutation={UPDATE_TRIBE}>
                    {(updateTribe, { data }) => (
                    <ApolloConsumer>
                    {client => (
                    <form onSubmit={e => {
                      e.persist();
                      e.preventDefault();
                      if (!number.value){
                        const newEpisodeNumber = episodesData.length + 1;
                        addEpisode({
                          variables: {
                            number: newEpisodeNumber,
                            title: title.value,
                            out1: out1.value,
                            out2: out2.value,
                            out3: out3.value,
                            episodeMessage: episodeMessage.value,
                            airDate: airDate.value,
                          }
                        }).then(res => {
                          const newEpisodeID = res.data.addEpisode.id
                          contestants.map(contestant => {
                            handleAddPoints(addPoints, contestant, e, number, newEpisodeID);
                            handleUpdateTribe(updateTribe, contestant, e);
                          })
                        })
                      };
                      client.writeData({ data: { isEpisodeSubmitted: true } })
                      return null;
                    }}>

                    <h3>
                      Enter Episode Info
                    </h3>
                    <Div>
                      Episode Number:
                         <select ref={(input)=>{number = input}} onChange={input => {loadFormInputs(input)}}>
                            <option value=''> New Episode </option>
                           {episodesData.map(episode => (
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
                        ref={(input)=>{title = input}}/>
                    </Div>
                    <Query query={GET_VALIDCONTESTANTS}>
                     {({ loading, error, data }) => {
                       if (loading) return "Loading...";
                       if (error) return `Error! ${error.message}`;

                       return (
                         <Div>
                           Contestant Out:
                           <select ref={(input) => {out1 = input;}}>
                             <option value=''>Select a Contestant</option>
                             {data.validContestants.map(contestant => (
                               <option key={contestant.id} value={contestant.id}>{contestant.fullName}</option>
                             ))}
                           </select>
                         </Div>
                       );
                     }}
                    </Query>

                    <Query query={GET_VALIDCONTESTANTS}>
                     {({ loading, error, data }) => {
                       if (loading) return "Loading...";
                       if (error) return `Error! ${error.message}`;

                       return (
                         <Div>
                           Contestant Out 2 (Optional):
                           <select ref={(input) => {out2 = input;}}>
                             <option value=''>Select a Contestant</option>
                             {data.validContestants.map(contestant => (
                               <option key={contestant.id} value={contestant.id}>{contestant.fullName}</option>
                             ))}
                           </select>
                         </Div>
                       );
                     }}
                    </Query>
                    <Query query={GET_VALIDCONTESTANTS}>
                     {({ loading, error, data }) => {
                       if (loading) return "Loading...";
                       if (error) return `Error! ${error.message}`;

                       return (
                         <Div>
                           Contestant Out3 (Optional):
                           <select ref={(input) => {out3 = input;}}>
                             <option value=''>Select a Contestant</option>
                             {data.validContestants.map(contestant => (
                               <option key={contestant.id} value={contestant.id}>{contestant.fullName}</option>
                             ))}
                           </select>
                         </Div>
                       );
                     }}
                    </Query>
                    <Div>
                      Episode Message:
                      <input
                        type='text'
                        placeholder='Episode Message'
                        ref={(input)=> {episodeMessage = input}}/>
                    </Div>
                    <Div>
                      Air Date:
                      <input
                        type='date'
                        placeholder='Air Date'
                        ref={(input)=> {airDate = input}}/>
                    </Div>
                      <ScoringTable />
                      <Div>
                        <button type='submit'>Submit</button>
                      </Div>
                    </form>
                  )}
                  </ApolloConsumer>
                  )}
                </Mutation>
                )}
                </Mutation>
                )}
              </Mutation>
              )}
            }
          </Query>
              )}
            }
      </Query>
    </Div>
  )
}

export default EpisodeFormContainer;
