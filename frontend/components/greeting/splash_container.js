import {connect} from 'react-redux';
import { logout } from '../../actions/session_actions'

// import IndexNavBar from '../ui/index_navbar';
import Splash from '../ui/splash'
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

export default connect(mapStateToProps,mapDispatchToProps)(Splash)