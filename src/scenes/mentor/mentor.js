import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './mentor.css'
import '../../components/Button.css'

class Mentor extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">A mentor will come by to see how you're doing!</h1>
        <ul className="done">
          <button className="button">
            <Link to="/">Thanks!</Link>
          </button>
        </ul>
      </div>
    )
  }
}
export default Mentor
