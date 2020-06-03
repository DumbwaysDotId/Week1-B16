import React, {Component} from 'react';
import '../App.css';
import {
  Link
} from 'react-router-dom'

class Content extends Component{ 
    getBatch(){
      return 14+2;
    }
  
    render(){
      const campName = "Dumbway.id"
      return(
        <div className="App-content">
          <h1>Welcome to {campName} Batch {this.getBatch()}</h1>
  
          <img src ="https://1.bp.blogspot.com/-sncIuy6Ddl4/XaYkLYBL9nI/AAAAAAAACn8/rICTal9EI_8_Q-wdS2lXIqITELj79ruJwCLcBGAsYHQ/s1600/60732852_136667774148750_4741706512167485977_n.jpg" style={{
            width: "50%", height: "50%", marginBottom: 20
          }} />
  
          <button onClick={() => {alert("Hallo Batch 15 yang tampan dan pemberani")}}>Hit Me</button>
          
          <Link to="/Increment"><button>Increment</button></Link>
        
        </div>
      )
    }
  }

  export default Content