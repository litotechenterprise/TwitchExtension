import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Login from "../pages/Auth/login";
import Logout from "../pages/Auth/logout";
import gameBrags from "../pages/App/gameBrags";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={Login}/>
        <Route exact path="/game/:gameid/brags" component={gameBrags}/>
        <Route exact path="/logout" component={Logout}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
