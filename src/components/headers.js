import React, {Component} from 'react';
import '../App.css';

class Headers extends Component{
    render(){
      return(
        <div>
         <h1> {this.props.title} </h1>
        </div>
      )
    }
  }
  
export default Headers