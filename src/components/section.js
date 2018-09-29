import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { startHint } from '../actions/startHint'
import './section.css'
import './Button.css'

class Section extends Component {
  buttonClick = index => {
    this.props.startHint(index)
  }

  render() {
    return (
      <div className="sectionContainer">
        <div className="section">Select the section you are having trouble with</div>
        <div className="buttonContainer">
          <button
            className="button"
            onClick={() => {
              this.buttonClick(1)
            }}
          >
            <Link to="/hints"> Section 1</Link>
          </button>
        </div>
        <div className="buttonContainer">
          <button className="button">
            <Link to="/hints"> Section 2</Link>
          </button>
        </div>
        <div className="buttonContainer">
          <button className="button">
            <Link to="/hints"> Section 3</Link>
          </button>
        </div>
        <div className="buttonContainer">
          <button className="button">
            <Link to="/hints"> Section 4</Link>
          </button>
        </div>
      </div>
    )
  }
}

const mapActionsToProps = dispatch => {
  return bindActionCreators(
    {
      startHint: startHint
    },
    dispatch
  )
}

export default connect(
  null,
  mapActionsToProps
)(Section)
