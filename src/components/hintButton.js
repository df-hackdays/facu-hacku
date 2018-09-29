import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './Button.css'

class hintButton extends Component {
  render() {
    return (
    
      <div>
        <div className="button">
          <Link to="/section"> Get a Hint</Link>
        </div>
      </div>
    )
  }
}

export default connect()(hintButton)
