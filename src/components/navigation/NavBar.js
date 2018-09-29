import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './nav.css'

class NavBar extends Component {
  render() {
    return <header className="nav-wrapper container">
    <div className="nav-bar row col-md-12">
      <div className="nav-logo">
        <img class="siteNav-logo" src="https://www.canadalearningcode.ca/wp-content/uploads/clc-logo-1.svg" alt="clc logo"/>
      </div>
      <ul className="nav-list">
        <li><Link to='/'>GUARDIAN</Link></li>
        <li><a href='https://www.canadalearningcode.ca/'>LEARN</a></li>
        <li><a href='https://www.canadalearningcode.ca/'>TEACH</a></li>
        <li><a href='https://www.canadalearningcode.ca/'>VOLUNTEER</a></li>
        <li><a href='https://www.canadalearningcode.ca/'>ABOUT</a></li>
        <li><a href='https://www.canadalearningcode.ca/'>DONATE</a></li>
        <li><a className="fr-icon" href='https://www.canadalearningcode.ca/'>FR</a></li>
      </ul>
    </div>
    </header>
  }
}

export default NavBar