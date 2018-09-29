import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { getHint } from '../../actions/hintaction'
import './hints.css'

class Hints extends Component {
  componentDidMount = () => {
    this.props.getHint()
  }
  nextHint = () => {
    this.props.getHint()
  }

  render() {
    let hint = this.props.hint

    return (
      <div className="container">
      <div className="hintMessage">{hint}</div>
        <div/>
        Did that help?
        <br />
        <ul className="yesNo">
          <li>
            <button className="yes">
              <Link to="/">Yes</Link>
            </button>
            <button className="no" onClick={this.nextHint}>
              No
            </button>
         
          </li>
        </ul>
        
      </div>
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

function mapStateToProps({ needHintReducer }) {
  return { hint: needHintReducer.hint }
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Hints)
