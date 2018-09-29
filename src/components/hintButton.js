import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Button.css'


class hintButton extends Component {
  render() {
    return (
      <div>
        <button className="hint">Get a Hint</button>
      </div>
    )
  }
}



export default connect()(hintButton)
