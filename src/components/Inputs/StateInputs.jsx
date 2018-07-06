import React from "react";

export const StateInputs = function(props){
    return (
        <div>
            <h3>State</h3>
                <select name='state' id='state' className="form-control" onChange={e=>props.onChangeHandler(e)} > 
                   {props.states.map((item, index) => <option key={index}>{item.name}</option>)}
                </select>
        </div>
    )
}



export const ReceivingStateInputs = function(props){
    console.log(props)
       return (
           <div>
               <h3>State</h3>
                   <select name='state' id='receivingState' className="form-control" onChange={e=>props.onChangeHandler(e)} value={props.receivingCurrentState}> 
                      {props.receivingStates.map((item, index) => <option key={index}>{item.name}</option>)}
                   </select>
            </div>
       )
   }
   
export const ReceivingStateInputsClone = function(props){
    if(props.stateSelect){
        console.log(props)
        return (
            <div>
                <h3>State</h3>
                    <select name='state' id='receivingState' className="form-control" onChange={e=>props.onChangeHandler(e)} value={props.receivingCurrentState}> 
                       {props.receivingStates.map((item, index) => <option  key={index}>{item.name}</option>)}
                    </select>
             </div>
        )
    }else{
        console.log(props.receivingCurrentState)
        return (
            <div>
                <h3>State</h3>
                <input 
                type="text" 
                name="form_receivingState"   
                className="form-receivingState form-control clonedInputs" 
                id="receivingState" 
                onChange={e=>props.onChangeHandler(e)}
                value={props.receivingCurrentState}
                />
                <div className="errField"></div>
             </div>
        )
    }
       
   }
   