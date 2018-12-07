import React from 'react';
import v4 from 'uuid';

function ContestantForm() {
  let contestantName;
  let ogTribe;
  let photoURL;

  function submitContestant() {
    return;
  }

  return (
    <div>
      <form  onSubmit={submitContestant}>
        <h3>
          Add Contestants:
        </h3>
        <div>
          To be used at beginning of the season to add survivor contestants to the game.
        </div>
        <div>
          Contestant First and Last Name
        </div>
        <div>
          <input
            type='text'
            id='contestantName'
            placeholder='Contestant Name'
            ref={(input) => {contestantName = input;}}/>
        </div>
        <div>
          Contestant Starting Tribe
        </div>
        <div>
          <input
            type='text'
            id='ogTribe'
            placeholder='Original Tribe'
            ref={(input) => {ogTribe = input;}}/>
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
