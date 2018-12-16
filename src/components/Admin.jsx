import React from 'react';
import EpisodeFormContainer from './EpisodeFormContainer';
import TribeForm from './TribeForm';

class Admin extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render(){
    return (
      <div>

        <TribeForm />
      </div>
    );
  }
}


export default Admin;
