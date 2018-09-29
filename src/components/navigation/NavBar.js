import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getHint } from '../../actions/hintaction'
import { Link } from 'react-router-dom'
import './nav.css'

class NavBar extends Component {
  render() {
    return (
      <header className="nav-wrapper container">
        <div className="nav-bar row col-md-12">
          <div className="nav-logo" />
          <ul className="nav-list">
            <li>
              <button className="hint">
                <Link to="/hints">I need a Hint</Link>
              </button>
              <button className="mentor" onClick={this.callMentor}>
                Call a mentor
              </button>
              <div className="underline" />
            </li>
          </ul>
        </div>
      </header>
    )
  }
}

const mapActionsToProps = dispatch => {
  return bindActionCreators(
    {
      getHint: getHint
    },
    dispatch
  )
}

export default connect(
  null,
  mapActionsToProps
)(NavBar)
