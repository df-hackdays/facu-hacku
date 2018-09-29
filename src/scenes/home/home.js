import React, { Component } from 'react'
import { connect } from 'react-redux'
import HintButton from '../../components/hintButton'
import MentorButton from '../../components/mentorButton'

import './home.css'

class Home extends Component {
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
    let className = `container question-wrapper fade-component ${this.state.show ? 'show' : ''}`
    return (
      <div className={className}>
        <div className="homeContainer">
          <div className="hello">Hello, Marie.</div>
          <div className="needHelp">Need Help?</div>
          <div className="buttonLocation">
            <div />
            <HintButton />
            <MentorButton />
            <div />
          </div>

          <div />
        </div>
      </div>
    )
  }
}

function mapStateToProps({ needHintReducer }) {
  return { hint: needHintReducer.hint }
}

export default connect(mapStateToProps)(Home)
