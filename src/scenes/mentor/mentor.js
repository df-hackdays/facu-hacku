import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './mentor.css'
import '../../components/Button.css'

class Mentor extends Component {
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
        <div className="container">
          <h1 className="title">A mentor will be by to see how you're doing!</h1>
          <ul className="done">
            <button className="button">
              <Link to="/">Thanks!</Link>
            </button>
          </ul>
        </div>
      </div>
    )
  }
}
export default Mentor
