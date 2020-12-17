import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export let name = "shah";

export class Classform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      prevention: <div></div>
    };
  }
  changeHandler = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  changeHandlerMail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  changeHandler2 = (event) => {
    this.setState({
      password: event.target.value,
    });
  };


  login = (name) => {
    console.log("maladec");
    this.props.login(name);
  };



  post=async ()=> {

      const data = {
        email:  this.state.email,
        name: this.state.name,
        password: this.state.password

      }

      await fetch("/customers", {
        method: 'POST',
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(data)
      }).then((response) => {
        if(response.status==500){
          this.setState({
            prevention: <div>wrong data</div>
          });
        }else {
          window.location = "http://localhost:3000/login"
        }
      })
  }



  render() {
    let sign;
    if (this.state.name !== "") {
      sign = (

          <button className="btn yellow darken-4" style={{ marginRight: 10 }}>
            <div onClick={()=>this.post()} >Sign up</div>
          </button>

      );
    } else {
      sign = (
        <button className="btn yellow darken-4" style={{ marginRight: 10 }}>
          <div>Sign up</div>
        </button>
      );
    }

    return (
      <div>
        <div className="col s6 offset-s3">

          <div className="card red darken-3">
            <div className="card-content white-text">
              <span className="card-title"><h5>Sign up</h5></span>
              <div>
                <div className="input-field">
                  <input
                    placeholder="Email"
                    id="mal"
                    type="text"
                    name="Email"
                    className="yellow-input"
                    value={this.state.email}
                    onChange={this.changeHandlerMail}
                  />
                  <label htmlFor="email">Email</label>
                </div>

                <div className="input-field">
                  <input
                    placeholder="Your name or company name"
                    id="mall"
                    type="text"
                    name="name"
                    className="yellow-input"
                    value={this.state.name}
                    onChange={this.changeHandler}
                  />
                  <label htmlFor="email">Name</label>
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
            <div className="card-action">
            {this.state.prevention}
              <div> {sign}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const Sign = (props) => {
  return (
    <div className="fatherHiddn">
      <div className="fatherHiddn2"></div>
      <Classform />
    </div>
  );
};

export default Sign;
