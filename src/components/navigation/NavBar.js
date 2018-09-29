import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './nav.css'

class NavBar extends Component {
  
  getHint() {
    return (
     <div>error</div>
    )
  }
  render() {
    return <header className="nav-wrapper container">
    <div className="nav-bar row col-md-12">
      <div className="nav-logo">
        <img src="" />
      </div>
      <ul className="nav-list">
        <button className="hint" onClick={this.getHint}><Link to='/'>GET A HINT</Link></button>
        <button className="mentor">ASK A MENTOR</button>
        
      </ul>
    </div>
    </header>
  }
}

export default NavBar