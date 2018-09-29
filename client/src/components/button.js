import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import hint from '../styles/assets/hint.png'
import '../styles/Button.css';

class Button extends React.Component {
        constructor(props) {
            super(props);
        
 }
 handleHint() {

 }
 handleMentor() {

 }
 render() {

   return (
     <div>
     <button className="buttonHint" onClick={this.handleHint}>
     <img src={hint} className="hint"/>
       Get a hint
     </button>
     <button className="buttonMentor" onClick={this.handleMentor}>
      Call a mentor
     </button>
     </div>
          )
        }
      }
    
export default Button;