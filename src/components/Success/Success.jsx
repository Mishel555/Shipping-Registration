import React, { Component } from 'react';
import "./css/css.css"

class Success extends Component {

  render() {
    console.log(this.props.user);
    return (
      <div>
        <h2 style={{"fontSize":"50px" ,"fontWeight": "bold", "color": "#8cd4ff","textShadow": "1px 5px 5px #e6f320" }}>We Receive Your Information!!!</h2>
        <h2 style={{    "color": "#0b1b90",    "fontWeight": "bold",    "textShadow": "0px 2px 6px yellow"}}>Your Personal Information Is</h2>
        <ul>
        <li>{Object.keys(this.props.user.info).map((value,index)=> {
          if(value==="states" || value === "receivingStates") return;
        return (<div key={index}><h2 className="title" >{value}</h2> <h3 className="val">{this.props.user.info[value]}</h3></div>)
        })}</li>          
        </ul>
      </div>
    )
  }
}

export default Success;
