import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './Button.css'

class hintButton extends Component {
  render() {
    return (
      <div>
        <button className="hint">
          <Link to="/hints"> Get a Hint</Link>
        </button>
      </div>
    )
  }
}

export default connect()(hintButton)
