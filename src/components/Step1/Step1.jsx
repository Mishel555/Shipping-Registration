import React, { Component } from 'react';
import {updateForm} from '../../actions/actionTypes';
import countries from '../../json/countries.json';
import {StateInputs , ReceivingStateInputs, ReceivingStateInputsClone} from "../Inputs/StateInputs.jsx";
import {DefaultInputs, ReceivingDefaultInputs} from "../Inputs/DefaultInputs.jsx";

class Step1 extends Component {

  onClickHandler=()=>{
    const {dispatch}=this.props.props;
   let inputs = [...document.getElementsByTagName('input')];
   let emptyErr = document.getElementsByTagName('h3')[0];
   let emptyField = inputs.filter(item=>{
       return item.name!=="form_adress2_name" && item.value==="";
   
   })
   let isNotOk;
   if (emptyField.length===0) {
     emptyErr.innerHTML="";
     [...document.getElementsByClassName('errField')].forEach(item=>item.innerHTML="");
     inputs.forEach(item=>item.style.border="1px solid grey")
     isNotOk=[];
     inputs.forEach(item=>{
       if (item.name === "form_first_name" && !isNaN(item.value.trim())) {    
         isNotOk.push(item);
       }else if (item.name === "form_last_name" && !isNaN(item.value.trim())) {
         isNotOk.push(item);
       }else if (item.name === "form_state" && !isNaN(item.value.trim())) {
         isNotOk.push(item);
       }else if (item.name === "form_city" && !isNaN(item.value.trim())) {
         isNotOk.push(item);
       }else if (item.name === "form_adress" && !isNaN(item.value.trim())) { 
         isNotOk.push(item);
       }else if (item.name === "form_adress2" && !isNaN(item.value.trim()) && item.value !== "" ) {
         isNotOk.push(item);
       }else if (item.name === "form_receivingState" && !isNaN(item.value.trim())) {
         isNotOk.push(item);
       }else if (item.name === "form_receivingCity" && !isNaN(item.value.trim())) {
         isNotOk.push(item);
       }else if (item.name === "form_receivingAdress" && !isNaN(item.value.trim())) { 
         isNotOk.push(item);
       }else if (item.name === "form_receivingAdress2" && !isNaN(item.value.trim()) && item.value !== "" ) {
         isNotOk.push(item);
       }
     });
     if(isNotOk.length>0) {
       isNotOk.forEach(item=>{
         item.style.border='1px solid red';
         item.nextSibling.style.color='red';
         item.nextSibling.innerHTML="Incorrect Field";
       })
       return;
     }
     inputs.forEach(item=>{
       item.style.border='1px solid green'
     })
     let state = this.props.user;
     dispatch(updateForm(true,state))
   
     }else {
       ///////////////////////
       emptyErr.style.color="red";
       emptyErr.innerHTML="Please Fill Required Fields "
       emptyField.forEach(item=>{
         item.style.border="2px solid red"
         return
       })
   
       //////////////////////
     }
   
   }

  render() {
    console.log(this.props.user.info.receivingCurrentState)
    console.log(this.props.user.info.currentState)
      return (
      <fieldset >
        <div className="form-top">
          <div className="form-top-left">
              <h1>Personal Information</h1>
          </div>
          <div className="form-top-right">
            <i className="fa fa-user"></i>
          </div>
          </div>
          <div className="form-bottom">
          <div className="form-group">
            <h3>Legal</h3>

            <select   name='legal' id='legal' className="form-control" onChange={e=>this.props.onChangeHandler(e)}>
              <option>Company</option>
              <option>Individual</option>
            </select>
          </div>
        <div className="form-group">
            <h3>First Name</h3>

            <input 
              defaultValue={this.props.user.info.firstName}
              type="text" 
              name="form_first_name"  
              className="form-first-name form-control" 
              id="form-first-name"
              onChange={e=>this.props.onChangeHandler(e)}
              />

            <div className="errField"></div>
          </div>
          <div className="form-group">
            <h3>Last Name</h3>
            <input 
              type="text" 
              name="form_last_name"  
              className="form-last-name form-control" 
              id="form-last-name"
              onChange={e=>this.props.onChangeHandler(e)}
              />
            <div className="errField"></div>
          </div>



          <h1>Adress Information</h1>


          <div className="form-group">
            <h3>Country</h3>
            <select  name='country' id='country' className="form-control clonedInputs" onChange={e=>this.props.onChangeHandler(e)} > 
              {countries.countries.map((item, index) => <option key={index}>{item.name}</option>)}
            </select>
          </div>

          <div className="form-group">
                    {this.props.stateSelect?<StateInputs currentState={this.props.user.info.currentState} states={this.props.user.info.states} onChangeHandler={this.props.onChangeHandler}/>: <DefaultInputs currentState={this.props.user.info.currentState} onChangeHandler={this.props.onChangeHandler}/>}
          </div>
          <div className="form-group">
            <h3>City</h3>
            <input 
              type="text" 
              name="form_city"   
              className="form-city form-control clonedInputs" 
              id="city" 
              onChange={e=>this.props.onChangeHandler(e)}
              />
            <div className="errField"></div>
          </div>
          <div className="form-group">
            <h3>Adress</h3>
            <input 
            type="text" 
            name="form_adress"   
            className="form-adress form-control clonedInputs" 
            id="adress"
            onChange={e=>this.props.onChangeHandler(e)}
            />
            <div className="errField"></div>
          </div>
          <div className="form-group">
            <h3>Adress2</h3>
            <input 
            type="text" 
            name="form_adress2"   
            className="form-adress2 form-control clonedInputs" 
            id="adress2" 
            onChange={e=>this.props.onChangeHandler(e)}
            />
            <div className="errField"></div>
          </div>






          <h1>Shipping Adress</h1>
          <label htmlFor="setCopy">
          SAME AS BILLING ADDRESS:  <input type="checkbox" id="setClone"  onChange={e=>this.props.onChangeHandler(e)} onClick={e=>this.props.setClone(e)} defaultValue={this.props.user.setClone}/>
          </label>
 
          <div className="form-group">
            <h3>Country</h3>
            <select  name='form_receivingCountry' id='receivingCountry' className="form-control clones" onChange={e=>this.props.onChangeHandler(e)} value={this.props.user.setClone==="on"?this.props.user.info.country:this.props.user.info.receivingCountry}> 
              {countries.countries.map((item, index) => <option key={index}>{item.name}</option>)}
            </select>
          </div>
         <div className="form-group">
              {this.props.user.setClone==="on"?<ReceivingStateInputsClone receivingStates={this.props.user.info.states} receivingCurrentState={this.props.user.info.currentState} stateSelect={this.props.user.stateSelect} onChangeHandler={this.props.onChangeHandler}/> :( this.props.receivingStateSelect?<ReceivingStateInputs receivingStates={this.props.user.info.receivingStates} receivingCurrentState={this.props.user.info.receivingCurrentState} onChangeHandler={this.props.onChangeHandler}/>: <ReceivingDefaultInputs  receivingStates={this.props.user.info.states} onChangeHandler={this.props.onChangeHandler} />)}
          </div>
          <div className="form-group">
            <h3>City</h3>
            <input 
            type="text" 
            name="form_receivingCity"  
            className="form-receivingCity form-control clones" 
            id="receivingCity"
            onChange={e=>this.props.onChangeHandler(e)}
            value={this.props.user.setClone==="on"?this.props.user.info.city:this.props.user.info.receivingCity}
            />
            <div className="errField"></div>
          </div>
          <div className="form-group">
            <h3>Adress</h3>
            <input 
            type="text" 
            name="form_receivingAdress"   
            className="form-receivingAdress form-control clones" 
            id="receivingAdress"
            onChange={e=>this.props.onChangeHandler(e)}
            value={this.props.user.setClone==="on"?this.props.user.info.adress:this.props.user.info.receivingAdress}
            />
            <div className="errField"></div>
          </div>
          <div className="form-group">
            <h3>Adress2</h3>
            <input 
            type="text" 
            name="form_receivingAdress2"   
            className="form-receivingAdress2 form-control clones" 
            id="receivingAdress2"
            onChange={e=>this.props.onChangeHandler(e)}
            value={this.props.user.setClone==="on"?this.props.user.info.adress2:this.props.user.info.receivingAdress2}
            />
            <div className="errField"></div>
          </div>












          <button type="button"  className="btn btn-next" id='next' onClick={this.onClickHandler.bind(this)}>Submit</button>
      </div>
      </fieldset>
    )}
  }

export default Step1;
