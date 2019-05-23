import {connect} from 'react-redux';
import UserNavBar from './user_navbar'
import { logout } from '../../actions/session_actions'

const mapStateToProps = (state, ownProps) => {
    const cUser = state.entities.users[state.session.currentUserId]
    
    return {
        currentUser : cUser
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserNavBar)