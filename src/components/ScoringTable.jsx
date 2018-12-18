import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import ScoringTableRow from './ScoringTableRow';
import { GET_VALIDCONTESTANTS, GET_OUTCONTESTANTS } from './../constants/queries';

function ScoringTable(props) {


  return (
    <div className='container'>
      <div className="scoringTable">
        <div>
        </div>
        <div className="rotate90">
          Team Reward
        </div>
        <div className="rotate90">
          Team Immunity
        </div>
        <div className="rotate90">
          Individual Reward
        </div>
        <div className="rotate90">
          Individual Immunity
        </div>
        <div className="rotate90">
          Correct Vote
        </div>
        <div className="rotate90">
          Recieved Vote
        </div>
        <div className="rotate90">
          Voted Off
        </div>
        <div className="rotate90">
          Recieved Clue
        </div>
        <div className="rotate90">
          Found Idol
        </div>
        <div className="rotate90">
          Found Advantage
        </div>
        <div className="rotate90">
          Held Idol
        </div>
        <div className="rotate90">
          Held Advantage
        </div>
        <div className="rotate90">
          Quoted in Episode Title
        </div>
        <div className="rotate90">
          Chosen for Reward
        </div>
        <div className="rotate90">
          Jury Votes
        </div>
        <div className="rotate90">
          Special
        </div>
        <div className="rotate90">
          Re-assign Tribe
        </div>
        <div className="rotate90">
          TOTAL
        </div>
      </div>
      <Query query={GET_VALIDCONTESTANTS}>
      {({ loading, error, data }) => {
        if (loading) return "Loading...";
        if (error) return `Error! ${error.message}`;
        let contestants = data.validContestants.sort(function(a, b){
          if(a.currentTribe.name < b.currentTribe.name) { return -1; }
          if(a.currentTribe.name > b.currentTribe.name) { return 1; }
          return 0;
        });
        return (
          <div>
          {contestants.map(contestant => {
            return (
              <ScoringTableRow
              contestant={contestant}
              key={contestant.id} out={''}/>
            )
          }
        )}
          </div>
        );
      }}
      </Query>
      <Query query={GET_OUTCONTESTANTS}>
      {({ loading, error, data }) => {
        if (loading) return "Loading...";
        if (error) return `Error! ${error.message}`;
        let contestants = data.outContestants.sort(function(a, b) {
            return b.out.number - a.out.number;
        });
        return (
          <div>
          {contestants.map(contestant => {
            return (
              <ScoringTableRow
              contestant={contestant}
              key={contestant.id} out={"Out"}/>
            )
          }
        )}
          </div>
        );
      }}
      </Query>
      <style jsx>{`
        .scoringTable {
          margin-top: 50px;
          display: grid;
          grid-template-columns: 200px repeat(16, 40px) 80px 40px;
          grid-template-rows: 100px;
        }
        .container{
          border: none;
        }
        .rotate90 {
          transform: rotate(270deg);
          width: 100px;
        }
        `}</style>
    </div>
  )
}

export default ScoringTable;
