import React, { Component } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Home from './scenes/home/home'
import Other from './scenes/otherpage/otherpage'
import Hints from './scenes/hints/hints'
import './App.css'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/other" component={Other} />
          <Route path="/hints" component={Hints} />
        </Switch>
      </HashRouter>
    )
  }
}

export default App
