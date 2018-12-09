import React from 'react';
import EpisodeFormContainer from './EpisodeFormContainer';
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
      </div>
    );
  }
}


export default Admin;
