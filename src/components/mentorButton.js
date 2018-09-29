import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Button.css'

class mentorButton extends Component {
  render() {
    return (
      <div>
        <button className="button">Call a Mentor</button>
      </div>
    )
  }
}

export default connect()(mentorButton)
