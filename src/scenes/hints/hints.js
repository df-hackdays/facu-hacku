import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { getHint } from '../../actions/hintaction'
import './hints.css'
import '../../components/Button.css'

class Hints extends Component {
  nextHint = () => {
    this.props.getHint()
  }

  render() {
    let hint = this.props.hint

    return (
      <div className="container">
        <div className="hintMessage">{hint}</div>
        <div>Did that help? </div>
        <ul className="yesNo">
          <button className="button">
            <Link to="/">Yes</Link>
          </button>
          <button className="button" onClick={this.nextHint}>
            No
          </button>
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
