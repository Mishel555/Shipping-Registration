import React from "react";

export const DefaultInputs =function(props){

    return (
        <div>
            <h3>State</h3>
            <input 
            type="text" 
            name="form_state"   
            className="form_state form-control clonedInputs" 
            id="state" 
            onChange={e=>props.onChangeHandler(e)}
            value={props.currentState}
            />
            <div className="errField"></div>
         </div>
    )
}
export const ReceivingDefaultInputs =function(props){
    console.log(props.receivingCurentState)
    return (
        <div>
            <h3>State</h3>
            <input 
            type="text" 
            name="form_receivingState"   
            className="form-receivingState form-control clonedInputs" 
            id="receivingState" 
            onChange={e=>props.onChangeHandler(e)}
            value={props.receivingCurentState}
            />
            <div className="errField"></div>
         </div>
    )
}