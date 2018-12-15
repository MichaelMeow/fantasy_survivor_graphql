import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';
import Scoreboard from './Scoreboard';
import Rules from './Rules';
import Episodes from './Episodes';
import Admin from './Admin';
import Move from './Move';
import styled from 'styled-components';

const StyledApp = styled.div`
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 12px;
`


class App extends Component {
  render() {
    document.body.style.margin = '0px';
    return (
      <StyledApp>
        <Header/>
        <Nav/>
        <Switch>
          // <Route path='/move' render={()=> <Move />} />
          // <Route path='/scoreboard' component={Scoreboard} />
          // <Route path='/episodes' component={Episodes} />
          // <Route path='/rules' component={Rules} />
          <Route path='/Admin' render={()=> <Admin />} />
        </Switch>
      </StyledApp>
    );
  }
}

export default App;
