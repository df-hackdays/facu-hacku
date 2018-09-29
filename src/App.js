import React, { Component } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Home from './scenes/home/home'
import Other from './scenes/otherpage/otherpage'
import Hints from './scenes/hints/hints'
import Section from './components/section'
import './App.css'
import Logo from './logo.png'


class App extends Component {
  render() {
    return (
      <div className="background">
      <img src={Logo} className="logo"/>
      <div className="info">
        <div className="time">10:30</div>
        <div className="date">September 29, 2018</div>
        <br/>
        <div className="name">Ladies Learning Code</div>
        <div className="classNumber">Workshop 3</div>
     </div>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/other" component={Other} />
          <Route path="/hints" component={Hints} />
          <Route path="/section" component={Section} />

        </Switch>
      </HashRouter>
      </div>
    )
  }
}

export default App
