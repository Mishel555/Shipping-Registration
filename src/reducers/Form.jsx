const Form = (state = {
      step1_succeed: false,
      user: {}
}, action) => {
  switch (action.type) {
    case "UPDATE_FORM":
      return {...state,step1_succeed:action.step1_succeed,user:action.user};
      break;
    default:
      return state;
  }
}
export default Form;
