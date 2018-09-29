import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import HintButton from '../../components/hintButton'
import MentorButton from '../../components/mentorButton'
import Blank from '../../../src/blank.png'
import Smile from '../../../src/smile.png'
import DoneRating from '../../../src/doneRating.png'

import './home.css'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showDialogue: false,
      showSmile: false,
      showDone: false,
    }
  }
 
  handleRating =() => {
    this.setState({
      showDialogue: true
    })
  }
  handleSmile =() => {
    this.setState({
      showSmile: true
    })
  }

  handleDone =() => {
    this.setState({
      showDone: true
    })
  }
 
  handleBack =() => {
    this.setState({
      showDialogue: false,
      showSmile: false,
      showDone: false,
    })
  }
  render() {
    let hint = this.props.hint
    let dialogue = this.state.showDialogue? (
      <div>
      <img className="blank" src={Blank} onClick={this.handleSmile} />
      </div>) : null
    let smile = this.state.showSmile? (
      <div>
      <img className="blank" src={Smile} onClick={this.handleDone} />
      </div>) : null
    let done = this.state.showDone? (
        <div>
        <img className="blank" src={DoneRating} 
        onClick={this.handleBack} 
        />
        </div>) : null
    
    console.log(hint)
    return (
      <div className="homeContainer">
        <div className="hello">Hello, Marie.</div>
        <div className="needHelp">Need Help?</div>
        <div className="rating" onClick={this.handleRating}/>
        <div className="buttonLocation">
         <div/>
          <HintButton />
          <MentorButton />
          <div/>
        </div>
        <div />
        {dialogue}
        {smile}
        {done}
      </div>
    )
  }
}

function mapStateToProps({ needHintReducer }) {
  return { hint: needHintReducer.hint }
}

export default connect(mapStateToProps)(Home)
