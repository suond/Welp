import React from 'react'
import UserModal from './user_modal'


class UserNavBar extends React.Component{

    constructor(props){
        super(props)
    }

    handleModalClick(){
        let modal = document.getElementById("myModal");
        modal.classList.remove("hidden");
    }

    render(){
        const cUser = this.props.currentUser;
        const logout = this.props.logout;
        return (
            <header>
                <nav id="navbar-user">
                    <div className="logo-div">
                                        
                    </div>
                    <div className="user-modal" onClick={this.handleModalClick}>
                        <img src={window.icon_url} alt="not found" id="user-avatar"/>
                        <div>
                            <span>&#9660;</span>
                        </div>
                    </div>
                </nav>
                {/* <UserModal currentUser={cUser}/> */}
         </header>
        )
    }

}
    
    
    
export default UserNavBar;