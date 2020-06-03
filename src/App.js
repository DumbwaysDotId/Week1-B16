import React,{Component} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom'

import Home from './pages/Home';
import Increment from './pages/Increment';
import UseCSS from './pages/usageCSS';
import UseFlex from './pages/usageFlex';
import UseBoot from './pages/usageBootsrap';

class App extends Component{
  render(){
    return(
      <Router>
        <div>
          <nav>
            <ul  style={{flex:1, flexDirection:"row", display:"flex", justifyContent: "space-between"}}>
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/Increment">Increment</Link>
              </li>

              <li>
                <Link to="/UseCSS">Use CSS</Link>
              </li>

              <li>
                <Link to="/UseFlex">Use Flex</Link>
              </li>

              <li>
                <Link to="/UseBoot">Use Bootstrap</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/UseBoot">
              <UseBoot/>
            </Route>

            <Route path="/UseFlex">
              <UseFlex/>
            </Route>

            <Route path="/UseCSS">
              <UseCSS/>
            </Route>

            {/* <Route path="/Increment">
              <Increment/>
            </Route> */}

            <PrivateRoute path="/Increment">
            <Increment />
            </PrivateRoute>

            <Route path="/">
              <Home/>
            </Route>

          </Switch>
        </div>
      </Router>
    )
  }
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default App;