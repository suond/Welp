import React from 'react'
import {Link } from 'react-router-dom'

const Greeting = (props) => {
    const cUser = props.currentUser
    const logout = props.logout;
    const transparent = {backgroundColor: 'transparent'}
    const display =  ( 
                <div className="right-nav-item">
                    <ul>
                        <li> <Link to="/signup">Sign Up!</Link> </li>
                       <li>  <Link to="/login">Login</Link> </li>
                    </ul>
                </div>
            );
                
    return (
        (
            <header>
                <nav id="navbar-form" style={transparent}>
                        <Link to="/">
                            <div className="logo-div">

                          </div>
                        </Link>
                    {display}
                </nav>
                
         </header>
        )
    )
}

export default Greeting