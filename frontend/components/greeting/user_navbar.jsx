import React from 'react'
import UserModal from './user_modal'


class UserNavBar extends React.Component{

    constructor(props){
        super(props)
        this.state={
            showModal: false
        }
        this.handleModalClick = this.handleModalClick.bind(this);
    }

    handleModalClick(){
        const {showModal} = this.state; 
        this.setState({showModal: !showModal})
        
    }

    render(){
        const cUser = this.props.currentUser;
        const logout = this.props.logout;

        return (
            <header>
                <nav id="navbar-user">
                        <a href="/#">
                            <div className="logo-div">

                          </div>
                        </a>
                    <div className="user-modal-container">
                    <div className="user-modal" onClick={this.handleModalClick}>
                        <img src={window.icon_url} alt="not found" id="user-avatar"/>
                        <div>
                            <span>&#9660;</span>
                        </div>
                    </div>
                        {this.state.showModal ? (
                        <> 
                        <div className="modal" onClick={this.handleModalClick}></div>   
                        <UserModal currentUser={cUser} logout={logout}/>
                        
                        </>
                        ) : null}
                    </div>
                </nav>
                
         </header>
        )
    }

}
    
    
    
export default UserNavBar;