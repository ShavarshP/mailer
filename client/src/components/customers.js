import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import { Redirect } from "react-router-dom";
import './customers.css';

class Customers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: [],
      text: "",
      mail: [],
      mm: "add !"
    };
    let mails
    console.log(this.props.names);

  }

  post=(dat)=> {


      console.log(dat);

      fetch("/customers", {
        method: 'POST',
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(dat)
      })

  }
  loading=()=>{
    this.setState({
      mm: <div>add !</div>,
    });
  }

  add=async (t)=>{
    console.log(this.props.namesParticipants);
    if (t==0) {
      return
    }
    this.setState({
      mm: <div className="loader"></div>,
    });
    t=String(t)
    let regexp = /[-.\w]+@([\w-]+\.)+[\w-]+/g
    t=await t.match(regexp);
    if (t==null) {
      return
    }
    setTimeout(this.loading, (t.length*10))
    t=await this.filter(t)

    await this.setState({
      mail: t,
      text: t,

    });
    console.log(this.state.mail);
    console.log(this.state.mail.length);
    await this.post(this.state.mail)

  }
  filter=(t)=>{

    let arrMail=[]
    let pay=0;
    for (var i = 0; i < (t.length); i++) {
      pay=0
      for (var j = (i+1); j < t.length; j++) {
        if (t[i]==t[j]) {
          pay=1
          console.log(pay);
        }
      }
      if (pay==0) {
        arrMail.push(t[i])
      }
    }
    return arrMail
  }

  changeHandler = (event) => {
    this.setState({
      text: event.target.value,
    });
  };

  render() {
    console.log(this.props.names);
    if(this.props.names.length==1) return <Redirect to={`/login`} />
    return (
      <div>

      <h2>hello {this.props.names[1].name}</h2>
      <textarea name="name"
                className="yellow-input"
                value={this.state.text}
                onChange={this.changeHandler} name="comment" cols="40" rows="3" style={{width: "400px",resize: "none"}}></textarea>
      <br></br>
      <button onClick={()=>this.add(this.state.text)}>{this.state.mm}</button>
      <br></br>
      gmail.com <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
      </div>
    );
  }
}

export default Customers;
