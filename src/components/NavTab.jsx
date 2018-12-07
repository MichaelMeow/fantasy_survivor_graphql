import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class NavTab extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'unselected'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    const newState = JSON.parse(JSON.stringify(this.state));
    newState.selectedTab = 'selected';
    this.setState({selectedTab: newState.selectedTab});
  }

  render(){
    return (
      <div className={this.state.selectedTab} onClick={this.handleClick}>
        <Link to={this.props.name} style={{textDecoration: 'none', color: 'black'}}>{this.props.name}</Link>

        <style jsx>{`
          .unselected {
            padding: 8px 14px;
            text-decoration: none;
          }
          .selected {
            color: red;
            padding: 8px 14px;
            text-decoration: none;
          }
      `}</style>
      </div>
    );
  }
}

NavTab.propTypes = {
  name: PropTypes.string
};

export default NavTab;
