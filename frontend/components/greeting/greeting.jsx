import React from 'react'
import {Link } from 'react-router-dom'

const Greeting = (props) => {
    
    const cUser = props.currentUser;
    const logout = props.logout;
    const display = cUser ? (
                <div> 
                    <h2>Welcome {cUser.username}!</h2>
                    <button onClick={logout}>Logout</button>
                </div>
            ) : ( 
                <div>
                    <Link to="/signup">Sign Up!</Link>-----
                    <Link to="/login">Login</Link>
                </div>
            );
                
    return <div>{display}</div>;
}

export default Greeting