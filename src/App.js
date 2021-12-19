import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Home from './views/home/home';
import styles from './App.css';
import About from './views/about/about';

class App extends Component {
  render() {

    let routes = (
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/" component={Home} />
        <Redirect exact to="/" />
      </Switch>
    )

    return (
      <BrowserRouter>
        <div className="App">
          {routes}
        </div>
      </BrowserRouter>
    );
  }
}

export default CSSModules(App, styles);
