import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { getHint } from '../../actions/hintaction'
import './success.css'
import '../../components/Button.css'

class Success extends Component {
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

  render() {
    console.log(this.props.hint)

    let positive = this.props.hint.positive

    let className = `container question-wrapper fade-component ${this.state.show ? 'show' : ''}`

    return (
      <div classNam={className}>
        <div className="container">
          <h1 className="titlePositive">{positive.title}</h1>
          <div className="messagePositive">{positive.text}</div>
          <ul className="done">
            <button className="button">
              <Link to="/">Done</Link>
            </button>
          </ul>
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
)(Success)
