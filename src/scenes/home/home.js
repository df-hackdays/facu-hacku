import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import HintButton from '../../components/hintButton'
import MentorButton from '../../components/mentorButton'

import './home.css'

class Home extends Component {
  render() {
    let hint = this.props.hint
    console.log(hint)
    return (
      <div>
        <div className="buttonLocation">
          <HintButton />
          <MentorButton />
        </div>

        <div>
          <div className="hintMessage">{hint}</div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ needHintReducer }) {
  return { hint: needHintReducer.hint }
}

export default connect(mapStateToProps)(Home)
