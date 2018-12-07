import React, { Component } from 'react';
import './../App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';
import Scoreboard from './Scoreboard';
import Rules from './Rules';
import Episodes from './Episodes';
import Admin from './Admin';
import Move from './Move';


class App extends Component {
  document.body.style.margin = '0px';
  render() {
    return (
      <div>
        <Header/>
        <Nav/>
        <Switch>
          <Route path='/move' render={()=> <Move />} />
          <Route path='/scoreboard' component={Scoreboard} />
          <Route path='/episodes' component={Episodes} />
          <Route path='/rules' component={Rules} />
          <Route path='/Admin' render={()=> <Admin />} />
        </Switch>
      </div>
    );
  }
}

export default App;
