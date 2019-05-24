import {connect} from 'react-redux';
import { logout } from '../../actions/session_actions'

import IndexNavBar from '../ui/index_navbar';

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

export default connect(mapStateToProps,mapDispatchToProps)(IndexNavBar)