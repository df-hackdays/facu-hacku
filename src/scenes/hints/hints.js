import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { getHint } from '../../actions/hintaction'
import './hints.css'
import Arrow from '../../../src/Arrow.png'
import '../../components/Button.css'

class Hints extends Component {
  constructor(props) {
    super(props)

    this.state = {
      show: false
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        show: true
      })
    }, 300)
  }

  handleClick = () => {
    this.setState({
      show: false
    })
  }

  nextHint = () => {
    this.props.getHint()
  }

  render() {
    console.log(this.props.hint)

    let hint = this.props.hint.hint

    let className = `container question-wrapper fade-component ${this.state.show ? 'show' : ''}`

    return (
      <div className={className}>
        <div className="container">
          <h1 className="titleHint">{hint.title}</h1>
          <div className="message">{hint.text}</div>
          <div className="didThatHelp">Was this hint helpful? </div>
          <ul className="yesNo">
            <button className="button" onClick={this.handleClick}>
              <Link to="/success">Yes</Link>
            </button>
            <div className="space" />
            <button className="button" onClick={this.nextHint}>
              No
            </button>
            <div className="space" />
            <button className="button" onClick={this.handleClick}>
              <Link to="/mentor">Call a Mentor</Link>
            </button>
            
          </ul>
          <div onClick={this.props.history.goBack}><img className="gobackArrow" src={Arrow}/></div>
        </div>
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
