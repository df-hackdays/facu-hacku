import React, { Component } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Home from './scenes/home/home'
import Other from './scenes/otherpage/otherpage'
import './App.css'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/other" component={Other} />
        </Switch>
      </HashRouter>
    )
  }
}

export default App
