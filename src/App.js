import React,{Component} from 'react';
import './App.css';
import Headers from './components/headers';
import Content from './components/content';
import Increment from './pages/Increment';
import UseCSS from './pages/usageCSS';
import UseFlex from './pages/usageFlex';
import UseBoot from './pages/usageBootsrap';

class App extends Component{
  render(){
    return(
      <div className="App">
        <UseFlex />
        <Headers title="This is Headers"/>
        <Content />
        <Increment />
        <UseCSS />
        <UseBoot />
      </div>
    )
  }
}

export default App;