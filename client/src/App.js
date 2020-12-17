import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Redirect } from "react-router-dom";
import logo from './logo.svg';
import Logi from "./login/login.js";
import Sign from "./signup/signup.js";
import Customers from './components/customers';


const App = (props) => {

  
  return (
    <BrowserRouter>
      <div className="App">

      <Route path="/login" render={() =><div className="app-login"> <Logi login={props.login} names={props.names}/> </div>} />

      <Route path="/signup/" render={() =><div className="app-login"> <Sign login={"props.login"} /> </div>} />
        <Route
          path="/mail"
          render={() => (

            <div className="App">
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Newsletter For Indiegogo.com</h1>
            </header>

            <Customers names={props.names}/>

            </div>
          )}
        />

      </div>
    </BrowserRouter>
  );
};

export default App;
