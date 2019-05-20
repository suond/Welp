import {connect} from 'react-redux'
import SignUpSessionForm from './signup_form'
import {signup} from '../../actions/session_actions'

const mapStateToProps = (state) => {
    return{
        formType: 'signup'
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        processForm: user => dispatch(signup(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpSessionForm)