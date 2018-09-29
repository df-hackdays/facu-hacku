import React, {Component} from 'react'
import NavBar from '../../components/navigation/NavBar';
import code from './code.png'
import './home.css'

class Home extends Component {
  render() {
    return (<div>
      <NavBar/>
      <div className="container">
      <img className="code" src={code}/>
    </div></div>)
    
  }
}

export default Home