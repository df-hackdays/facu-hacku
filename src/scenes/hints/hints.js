import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { getHint } from '../../actions/hintaction'
import '../home/home.css'

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
      <div className="nav-bar row col-md-12">
        <div className="nav-logo" />
        Did that help?
        <br />
        <ul className="nav-list">
          <li>
            <button className="hint">
              <Link to="/">Yes</Link>
            </button>
            <button className="mentor" onClick={this.nextHint}>
              No
            </button>
            <div className="underline" />
          </li>
        </ul>
        <div className="hintMessage">{hint}</div>
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
