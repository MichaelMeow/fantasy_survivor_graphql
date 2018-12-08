import React from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getContestantsQuery = gql`
  {
    contestants{
      firstName
      lastName
      id
    }
  }
`

class Move extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
    this.displayContestants = this.displayContestants.bind(this);
  }


  displayContestants(){
    let data = this.props.data;
    if(data.loading){
      return(<div> Loading...</div>);
    } else {
      return data.contestants.map(contestant =>{
        return(
          <li key={contestant.id}>{contestant.firstName}</li>
        )
      });
    }
  }

  render(){
    return (
      <div>
        Contestant List:
        <ul>
          { this.displayContestants() }
        </ul>
      </div>
    );
  }
}



export default graphql(getContestantsQuery)(Move);
