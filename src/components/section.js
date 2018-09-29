import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './section.css'

class Section extends Component {
  render() {

    return (
      <div className="sectionContainer">
         Select the section you are having trouble with
      <button className="section">
       < Link to="/hints"> section 1</Link>
      </button>
      <button className="section">
       < Link to="/hints"> section 2</Link>
      </button>
      <button className="section">
       < Link to="/hints"> section 3</Link>
      </button>
      <button className="section">
       < Link to="/hints"> section 4</Link>
      </button>

      </div>
    )
  }
}


export default connect()(Section)
