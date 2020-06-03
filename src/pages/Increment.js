import React, {Component} from 'react';
import '../App.css';

class Increment extends Component{

    constructor(){
        super()
        this.state = {
            counter: 0
        }
    }

    render(){
        return(
            <div className="App-content">
                <p>Click The Button to Increment</p>
                <p>{this.state.counter}</p>
                <button onClick={()=> this.setState({counter: this.state.counter + 1})}>Hit Me</button>
            </div>
        )
    }

}

export default Increment