import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

class NavBar extends Component {
  getHint() {}

  render() {
    return (
      <header className="nav-wrapper container">
        <div className="nav-bar row col-md-12">
          <div className="nav-logo">
            <img class="siteNav-logo" src="https://www.canadalearningcode.ca/wp-content/uploads/clc-logo-1.svg" alt="clc logo" />
          </div>
          <ul className="nav-list">
            <li>
              <button className="btn" onClick={this.clickButton}>
                I Need A Hint
              </button>
            </li>
          </ul>
        </div>
      </header>
    )
  }
}

export default NavBar
