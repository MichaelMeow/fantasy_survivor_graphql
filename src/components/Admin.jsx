import React from 'react';
import EpisodeFormContainer from './EpisodeFormContainer';
import TribeForm from './TribeForm';
import ContestantForm from './ContestantForm';

class Admin extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render(){
    return (
      <div>
        <EpisodeFormContainer />
        <ContestantForm />
        <TribeForm />
      </div>
    );
  }
}


export default Admin;
