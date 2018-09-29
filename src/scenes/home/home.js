import React, {Component} from 'react'
import NavBar from '../../components/navigation/NavBar';

class Home extends Component {
  render() {
    return (<div>
      <NavBar/>
      <div className="container">
      Welcome to the page
    </div></div>)
    
  }
}

export default Home