import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import { restart } from "../render";
import { BrowserRouter } from "react-router-dom";
import { Redirect } from "react-router-dom";

export class Classform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  changeHandler = (event) => {
    this.setState({
      email: event.target.value,
    });
  };
  changeHandler2 = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  post=async ()=> {
      const data = {
        email:  this.state.email,
        password: this.state.password

      }
      await fetch("/login", {
        method: 'POST',
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(data)
      }).then((response) => {
        if(response.status==500){
          window.location = "http://localhost:3000/login"
        }
        return response.json();
      })
      .then((data) => {
        this.props.login(data[0].NAME)

      })

  }

  render() {

    let join;
    if (this.state.email !== "" && this.state.password !== "") {
      join = (

          <button className="btn yellow darken-4" style={{ marginRight: 10 }}>
            <div onClick={()=>this.post()} >join</div>

          </button>

      );
    } else {
      join = (

        <button className="btn yellow darken-4" style={{ marginRight: 10 }}>
          <div>join</div>
        </button>

      );
    }

    if(this.props.names.length>1) return <Redirect to={`/mail`} />

    return (
      <div>
        <div className="col s6 offset-s3">

          <div className="card red darken-3">
            <div className="card-content white-text">
              <span className="card-title"><h5>Log In</h5></span>
              <div>
                <div className="input-field">
                  <input
                    placeholder="Email"
                    id="mal"
                    type="text"
                    name="email"
                    className="yellow-input"
                    value={this.state.email}
                    onChange={this.changeHandler}
                  />
                  <label htmlFor="email">Email</label>
                </div>

                <div className="input-field">
                  <input
                    placeholder="password"
                    id="mall"
                    type="password"
                    name="name"
                    className="yellow-input"
                    value={this.state.password}
                    onChange={this.changeHandler2}
                  />
                  <label htmlFor="email">Enter the password</label>
                </div>
              </div>
            </div>
            <div>Need a potentateMail account?<NavLink to="signup/"> Create an account </NavLink></div>
            <div className="card-action">
              <div> {join}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const Logi = (props) => {
  return (
    <div className="fatherHiddn">
      <div className="fatherHiddn2"></div>
      <Classform login={props.login} names={props.names}/>
    </div>
  );
};

export default Logi;
