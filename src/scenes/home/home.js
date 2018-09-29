import React, { Component } from 'react'
import { connect } from 'react-redux'
import HintButton from '../../components/hintButton'
import MentorButton from '../../components/mentorButton'

import './home.css'

class Home extends Component {
  render() {
    let hint = this.props.hint
    console.log(hint)
    return (
      <div className="homeContainer">
        <div className="hello">Hello, Marie.</div>
        <div className="needHelp">Need Help?</div>
        <div className="buttonLocation">
         <div/>
          <HintButton />
          <MentorButton />
          <div/>
        </div>

        <div />
      </div>
    )
  }
}

function mapStateToProps({ needHintReducer }) {
  return { hint: needHintReducer.hint }
}

export default connect(mapStateToProps)(Home)
