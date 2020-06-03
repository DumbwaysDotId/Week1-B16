import React,{Component} from 'react';
import '../App.css'

class UseCSS extends Component{
    render(){
        return(
            <div className="App-content">
                <p style={{color: "blue"}}>This Is Blue</p>
                <p style={style.bigRed}>This Is Red</p>
                <p style={style.smallPink}>This Is Pink</p>
            </div>
        )
    }
}

const style = {
    bigRed : {
        color : "red",
        fontSize: 50,
        fontWeight: "Bold"
    },
    smallPink : {
        color : "pink",
        fontSize: 20,
    }
}

export default UseCSS