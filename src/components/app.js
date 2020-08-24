import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './home';
import About from './about';
import Schedule from './schedule';
import Navvy from './customNavBar';

export default class App extends Component {
  render() {
    return (
      <Router>
      <div className='app'>
        <Navvy />
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/schedule' component={Schedule}/>
      </div>
      </Router>
    );
  }
}
