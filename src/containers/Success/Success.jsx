import { connect } from 'react-redux'
import Success from '../../components/Success/Success.jsx'



const mapStateToProps = (state) => ({
  step1_succeed:state.Form.step1_succeed,
  user:state.Form.user,
})

 const SuccessContainer = connect(mapStateToProps
)(Success)

export default SuccessContainer
