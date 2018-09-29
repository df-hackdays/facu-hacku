import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavBar from '../../components/navigation/NavBar'
import code from './code.png'
import output from './output.png'
import './home.css'

class Home extends Component {
  yesNo = () =>  {
    if(this.props.hint) {
    return(
      <button>yes</button>>
      <button>no</button>
    )
    }
  }
  render() {
    let hint = this.props.hint
  
    return (
      <div>
        <NavBar />
        <img className="code" src={code}></img>
        <div>
        <div className="hintMessage">{hint}</div>
        <div>{this.yesNo}</div>
        </div>
        <img className="output" src={output}></img>
      </div>
    )
  }
}

function mapStateToProps({ needHintReducer }) {
  return { hint: needHintReducer.hint }
}

export default connect(mapStateToProps)(Home)
