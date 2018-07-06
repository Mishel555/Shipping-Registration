import { connect } from 'react-redux'
import Controller from '../../components/Controller/Controller.jsx'



const mapStateToProps = (state) => ({
  step1_succeed:state.Form.step1_succeed,
  user:state.Form.user,
})

 const ControllerContainer = connect(mapStateToProps
)(Controller)

export default ControllerContainer
