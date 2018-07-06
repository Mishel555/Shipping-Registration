import React from 'react';
import Step1 from '../../containers/MainStep1/MainStep1.jsx'
import Success from '../../containers/Success/Success.jsx'



function Controller(props) {

  if (!props.step1_succeed) {
    return (
      <div>
        <Step1 />
      </div>
    )
  }else if (props.step1_succeed ) {
    return (
      <div>
        <Success />
      </div>
    )
  }

}

export default Controller

