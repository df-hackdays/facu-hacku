import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './Button.css'

class mentorButton extends Component {
  render() {
    return (
      <div>
        <button className="button">
          <Link to="/mentor">Call a Mentor</Link>
        </button>
      </div>
    )
  }
}

export default connect()(mentorButton)
