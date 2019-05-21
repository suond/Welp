import {connect} from 'react-redux'
import LoginSessionForm from './login_session_form'
import {login} from '../../actions/session_actions'

const mapStateToProps = (state) => {
    return{
        formType: 'Login',
        errors: state.errors.session
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        processForm: user => dispatch(login(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginSessionForm)