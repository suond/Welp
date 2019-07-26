import React from 'react'
import Greeting from '../greeting/greeting';
import UserNavBar from "../greeting/user_navbar_container"

class IndexNavBar extends React.Component{

    constructor(props){
        super(props) 
        // console.log(props)
    }

    render(){
        return this.props.currentUser ? (
            <UserNavBar currentUser={this.props.currentUser} logout={this.props.logout} path={this.props.path}/>
        ) : (
            <Greeting path={this.props.path}/>
        )   
    }
}
    
    
    
export default IndexNavBar;