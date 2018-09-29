import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './section.css'
import './Button.css'

class Section extends Component {
  render() {
    return (
      <div className="sectionContainer">
       <div className="section">
         Select the section you are having trouble with</div>
         <div className="buttonContainer">
      <button className="button">
       < Link to="/hints"> Section 1</Link>
      </button></div>
      <div className="buttonContainer">
      <button className="button">
       < Link to="/hints"> Section 2</Link>
      </button></div>
      <div className="buttonContainer">
      <button className="button">
       < Link to="/hints"> Section 3</Link>
      </button></div>
      <div className="buttonContainer">
      <button className="button">
       < Link to="/hints"> Section 4</Link>
      </button>
</div>
      </div>
    )
  }
}

export default connect()(Section)
