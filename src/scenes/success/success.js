import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { getHint } from '../../actions/hintaction'
import './success.css'
import '../../components/Button.css'

class Success extends Component {
  render() {
    console.log(this.props.hint)

    let positive = this.props.hint.positive

    return (
      <div className="container">
        <h1 className="title">{positive.title}</h1>
        <div className="message">{positive.text}</div>
        <ul className="done">
          <button className="button">
            <Link to="/">Done</Link>
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
)(Success)
