import React, { Component } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Home from './scenes/home/home'
import Other from './scenes/otherpage/otherpage'
import Hints from './scenes/hints/hints'
import Section from './components/section'
import Success from './scenes/success/success'
import Mentor from './scenes/mentor/mentor'
import './App.css'
import Logo from './logo.png'
import Clc from './clc.svg'

class App extends Component {
  render() {
    return (
      <div className="background">
       <img className="clc" src={Clc} />
        <div className="logoLocation"><img src={Logo} className="logo" /></div>
        <div className="info">
          <div className="time">10:30am</div>
          <div className="date">September 29, 2018</div>
          <div className="nameLlc">Ladies Learning Code</div>
          <div className="classNumber">Workshop 3</div>
        </div>
        <HashRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/other" component={Other} />
            <Route path="/hints" component={Hints} />
            <Route path="/success" component={Success} />
            <Route path="/section" component={Section} />
            <Route path="/mentor" component={Mentor} />
          </Switch>
        </HashRouter>
      </div>
    )
  }
}

export default App
