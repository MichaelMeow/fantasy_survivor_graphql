import React from 'react';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import { GET_TRIBES } from './../constants/queries';

const SmallInput = styled.input`
  width: 20px;
`
const StyledRow = styled.div`
  display: grid;
  grid-template-columns: 200px repeat(16, 40px) 80px 40px;
`


function ScoringTableRow({contestant}) {

  return (
    <StyledRow>
      <div className={`contestant ${contestant.id}`}>
        {contestant.fullName} ({contestant.currentTribe.name})
      </div>
      <div>
        <input type="checkbox" id={`teamReward${contestant.id}`} />
      </div>
      <div>
        <input type="checkbox" id={`teamImmunity${contestant.id}`}  />
      </div>
      <div>
        <input type="checkbox" id={`individualReward${contestant.id}`}  />
      </div>
      <div>
        <input type="checkbox" id={`individualImmunity${contestant.id}`}  />
      </div>
      <div>
        <input type="checkbox" id={`correctVote${contestant.id}`}  />
      </div>
      <div>
        <input type="checkbox" id={`recievedVote${contestant.id}`}  />
      </div>
      <div>
        <input type="checkbox" id={`out${contestant.id}`}  />
      </div>
      <div>
        <input type="checkbox" id={`clue${contestant.id}`}  />
      </div>
      <div>
        <input type="checkbox" id={`foundIdol${contestant.id}`}  />
      </div>
      <div>
        <input type="checkbox" id={`foundAdvantage${contestant.id}`}  />
      </div>
      <div>
        <SmallInput type='number' id={`heldIdol${contestant.id}`} />
      </div>
      <div>
        <input type="checkbox" id={`heldAdvantage${contestant.id}`}  />
      </div>
      <div>
        <input type="checkbox" id={`quoted${contestant.id}`}  />
      </div>
      <div>
        <input type="checkbox" id={`chosenReward${contestant.id}`}  />
      </div>
      <div>
        <SmallInput type="number" id={`juryVotes${contestant.id}`}/>
      </div>
      <div>
        <SmallInput type="number" id={`special${contestant.id}`}/>
      </div>
      <div className={`assignTribe ${contestant.id}`}>
          <Query query={GET_TRIBES}>
            {({ loading, error, data }) => {
              if (loading) return "Loading...";
              if (error) return `Error! ${error.message}`;

              return (
                <select id={`${contestant.id}tribe`}>
                  <option >-tribe-</option>
                  {data.tribes.map(tribe => (
                    <option key={tribe.id} value={tribe.id}>
                      {tribe.name}
                    </option>
                  ))}
                </select>
              );
            }}
          </Query>
      </div>
      <div className={`Total ${contestant.id}`}>
      </div>
    </StyledRow>
  )
}

export default ScoringTableRow;
