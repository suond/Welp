import React from 'react'
import Greeting from '../greeting/greeting';
import UserNavBar from "../greeting/user_navbar"

class IndexNavBar extends React.Component{

    constructor(props){
        super(props) 
    }



    render(){
        
        return this.props.currentUser ? (
            <UserNavBar currentUser={this.props.currentUser} logout={this.props.logout}/>
        ) : (
            <Greeting />
        )
        
    }

}
    
    
    
export default IndexNavBar;