import React from 'react'

class SessionForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleSubmit(e){
        e.preventDefault()
        this.props.processForm(this.state)
    }

    update(field){
        return e => {
            this.setState( {[field]: e.target.value} )
        }
    }

    render(){
        return(
            <div className="form-login">
            <h3>{this.props.formType}</h3>
               <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="username" onChange={this.update("username")}/>
                    <input type="password" placeholder="password" onChange={this.update("password")}/>
                    <input type="submit" value="Sign Up" className="form-btn"/>
               </form>
            </div>
        )
    }
}




export default SessionForm