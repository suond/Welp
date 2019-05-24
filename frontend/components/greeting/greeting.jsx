import React from 'react'
import {Link } from 'react-router-dom'

const Greeting = (props) => {
    const cUser = props.currentUser
    const logout = props.logout;
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
                <nav id="navbar-form">
                        <a href="/#">
                            <div className="logo-div">

                          </div>
                        </a>
                    {display}
                </nav>
                
         </header>
        )
    )
}

export default Greeting