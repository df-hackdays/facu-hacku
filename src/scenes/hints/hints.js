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
    console.log(this.props.hint)

    let hint = this.props.hint.hint

    return (
      <div className="container">
        <h1 className="titleHint">{hint.title}</h1>
        <div className="message">{hint.text}</div>
        <div className="didThatHelp">Was this hint helpful? </div>
        <ul className="yesNo">
          <button className="button">
            <Link to="/success">Yes</Link>
          </button>
          <div className="space"/>
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
