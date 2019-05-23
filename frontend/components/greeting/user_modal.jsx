import React from 'react'


class UserModal extends React.Component {

    constructor(props){
        super(props);
    }

    eventlisten(){
        // let span = document.getElementsByClassName("close")[0];
        // let modal = document.getElementById("myModal");
        // let btn = "give btn onclick"
        // btn.onclick = function() {modal.style.display = "block"}
        //window.onclick =function(e) {if (event.target == modal) { modal.style.display = "none"}}
    }

    render() {
        this.eventlisten()
        return (
            <div id="myModal" className="modal arrow_box hidden">
                <div className="modal-content">
                    
                    <div className="inner-user-modal">
                        <img src={window.icon_url} alt="not found" id="user-avatar-inner"/>
                        <div>
                            <ul>
                                <li>fName lName</li>
                                <li>zipcode</li>
                            </ul>
                        </div>
                    </div>

                    <hr/>

                    <ul>
                        <li>
                            <button className="modal-logout-btn">Logout</button>
                        </li>
                    </ul>
                </div> 
            </div>
        )
    }
}
    

    
    


export default UserModal