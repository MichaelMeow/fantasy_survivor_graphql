import React from 'react';
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
        <ContestantForm />
        <style jsx>{`

          `}</style>
      </div>
    );
  }
}


export default Admin;
