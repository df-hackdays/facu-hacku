import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavBar from '../../components/navigation/NavBar'

class Home extends Component {
  render() {
    console.log(this.props)
    let hint = this.props.hint
    return (
      <div>
        <NavBar />
        <div className="container">Welcome to the page</div>

        <div>{hint}</div>
      </div>
    )
  }
}

function mapStateToProps({ needHintReducer }) {
  return { hint: needHintReducer.hint }
}

export default connect(mapStateToProps)(Home)
