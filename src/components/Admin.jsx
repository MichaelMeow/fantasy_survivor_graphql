import React from 'react';
import EpisodeForm from './EpisodeForm';
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
        <EpisodeForm />
        <ContestantForm />
      </div>
    );
  }
}


export default Admin;
