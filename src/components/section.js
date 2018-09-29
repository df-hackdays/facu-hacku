import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './section.css'

class Section extends Component {
  render() {
    return (
      <div className="sectionContainer">
        Select the section you are having trouble with
        <div className="button">
          <Link to="/hints"> section 1</Link>
        </div>
        <div className="button">
          <Link to="/hints"> section 2</Link>
        </div>
        <div className="button">
          <Link to="/hints"> section 3</Link>
        </div>
        <div className="button">
          <Link to="/hints"> section 4</Link>
        </div>
      </div>
    )
  }
}

export default connect()(Section)
