import {connect} from 'react-redux'
import LoginSessionForm from './login_session_form'
import {login, clearErrors} from '../../actions/session_actions'

const mapStateToProps = (state) => {
    return{
        formType: 'Log In',
        errors: state.errors.session
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        processForm: user => dispatch(login(user)),
        clearErrors: () => dispatch(clearErrors())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginSessionForm)