
import Step1 from '../../components/Step1/Step1.jsx'
import React, { Component } from 'react';
import states from '../../json/states.json';


class Step1Container extends Component{
  state={
    "info":{
      "legal":"Company",
      "firstName":"",
      "lastName":"",
      "country":"Andora",
      "states":[],
      "currentState":"",
      "city":"",
      "adress":"",
      "adress2":"",
      "receivingCountry":"Andora",
      "receivingStates":[],
      "receivingCity":"",
      "receivingAdress":"",
      "receivingAdress2":"", 
      "receivingCurrentState":""      
    },
    "setClone":"off",
    "stateSelect":false,
    "receivingStateSelect":false
  }


updateState=(e)=>{
  
  let state=this.state;
  let inpValue=e.target.value;
  switch(e.target.id) {
    case "legal":
    state.info.legal=inpValue;
      this.setState(state);
        break;
    case "form-first-name":
    state.info.firstName=e.target.value;
      this.setState({state})
        break;
    case "form-last-name":
    state.info.lastName=e.target.value;    
      this.setState(state)
        break;
    case "country":
    state.info.country=e.target.value;
    if(e.target.value !== "United States" || e.target.value !=="Canada" || e.target.value !== "Australia" || e.target.value !== "United Kingdom"){
      state.info.currentState=""
    }   
      this.setState(state)
      break;
    case "state":
    state.info.currentState=e.target.value;   
      this.setState(state)
      console.log(e.target.value);
      console.log(state.info.currentState)
      break;
    case "city":
    state.info.city=e.target.value;    
      this.setState(state)
      // console.log(state.info.currentState)
      
      break;
    case "adress":
    state.info.adress=e.target.value;    
      this.setState(state)
      break;
    case "adress2":
    state.info.adress2=e.target.value;    
      this.setState(state)
      break;
      case "receivingCountry":
      if(e.target.value !== "United States" || e.target.value !=="Canada" || e.target.value !== "Australia" || e.target.value !== "United Kingdom"){
        state.info.receivingCurrentState=""
      }   
    state.info.receivingCountry=e.target.value;      
      this.setState(state)
      break;
    case "receivingState":
    state.info.receivingCurrentState=e.target.value;    
      this.setState(state)
      break;
    case "receivingCity":
    state.info.receivingCity=e.target.value;    
      this.setState(state)
      break;
    case "receivingAdress":
    state.info.receivingAdress=e.target.value;    
      this.setState(state)
      break;
    case "receivingAdress2":
    state.info.receivingAdress2=e.target.value;    
      this.setState(state)
      break;
    case "setClone":
    state.setClone=e.target.value;    
      this.setState(state)
        break;
    default:
  
}
if(this.state.setClone==="on"){
  state.info.receivingCountry=state.info.country;
  state.info.receivingCity=state.info.city;
  state.info.receivingCurrentState=state.info.currentState;
  state.info.receivingAdress=state.info.adress;
  state.info.receivingAdress2=state.info.adress2 ;
 }
}
setClone=(e)=>{
  let state = this.state;
  if(e.target.value==="off"){
    state.setClone="on";    
    this.setState(state);
    e.target.value ="on";

  }else if(e.target.value==="on"){
    state.setClone="off";     
    this.setState(state)
    e.target.value="off";
  }
}
handleStates=(e)=>{
  
  let state = this.state;
  let countryStates = {
    "United States":states.states["US"],
    "Canada":states.states["CA"],
    "United Kingdom":states.states["GB"],
    "Australia":states.states["AU"]
  };
  
  let currentStates = Object.keys(countryStates).filter(item=>{
    return item === state.info.country;
  })
  let receivingCurrentStates = Object.keys(countryStates).filter(item=>{
    
    return item === state.info.receivingCountry;
  })
  if(currentStates.length>0){
      state.stateSelect=true;
      state.info.states=countryStates[currentStates[0]];
      state.info.currentState = state.info.currentState || countryStates[currentStates[0]][0].name;
      this.setState(state);
  }else{
      
      state.stateSelect=false; 
      this.setState(state);
  }
  if(receivingCurrentStates.length>0){
    state.receivingStateSelect=true;
    state.info.receivingStates= countryStates[receivingCurrentStates[0]] 
    state.info.receivingCurrentState =  state.info.receivingCurrentState || countryStates[receivingCurrentStates[0]][0].name;
    this.setState(state);
  }else{
    state.receivingStateSelect=false;  
    this.setState(state);
  }
}
onChangeHandler=(e)=>{
  // 
this.updateState(e);
if(e.target.id ==="country" || e.target.id==="receivingCountry"){
  this.handleStates(e)
}
}
render(){
  console.log(this.state);
  return (
    <Step1 onClickHandler={this.onClickHandler} onChangeHandler={this.onChangeHandler} setClone={this.setClone} user={this.state} stateSelect={this.state.stateSelect} receivingStateSelect={this.state.receivingStateSelect} props={this.props}/>
  ) 
}




}
export default Step1Container;

