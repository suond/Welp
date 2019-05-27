import React from 'react'


class UserModal extends React.Component {

    constructor(props){
        super(props);
    }


    render() {
        const avatar = window.icon_url;
        return (
            <div id="myModal" className="arrow_box">
                <div className="modal-content">
                    
                    <div className="inner-user-modal">
                        <img src={avatar} alt="not found" id="user-avatar-inner"/>
                        <div>
                            <ul>
                                <li>{this.props.currentUser.fName} {this.props.currentUser.lName}</li>
                                <li>{this.props.currentUser.zipcode}</li>
                            </ul>
                        </div>
                    </div>

                    <hr/>

                    <ul>
                        <li>
                            <button className="modal-logout-btn" onClick={this.props.logout}>Logout</button>
                        </li>
                    </ul>
                </div> 
            </div>
        )
    }
}
    

    
    


export default UserModal