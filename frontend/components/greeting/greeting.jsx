import React from 'react'
import {Link } from 'react-router-dom'

const Greeting = (props) => {
    
    const cUser = props.currentUser;
    const logout = props.logout;
    const display = cUser ? (
                <div className="right-nav-item"> 
                    <ul>
                    <li> Welcome {cUser.username}! </li>
                     <li><button onClick={logout} id="logout-btn">Logout</button> </li>
                    </ul>
                </div>
            ) : ( 
                <div className="right-nav-item">
                    <ul>
                        <li> <Link to="/signup">Sign Up!</Link> </li>
                       <li>  <Link to="/login">Login</Link> </li>
                    </ul>
                </div>
            );
                
    return <div>{display}</div>;
}

export default Greeting