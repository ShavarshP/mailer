import React, { Component } from 'react';


class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: props.size,
      text:""
    };
    let mails=0
  }
  changeHandler = (event) => {
    this.setState({
      text: event.target.value,
    });
  };
  componentDidMount(){
    (this.state.size)?this.mails=450:this.mails=0
    console.log(this.mails);
  }


  render() {

    return (
      <div>
      <textarea name="name"
                className="yellow-input"
                value={this.state.text}
                onChange={this.changeHandler} name="comment" cols="40" rows="3"
                style={{width: "400px",height: ""+this.mails+"px", resize: "none"}}></textarea>
      <br></br>
      </div>
    );
  }
}

export default Page;
