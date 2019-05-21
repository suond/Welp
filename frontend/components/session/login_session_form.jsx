import React from 'react'
import {Link} from 'react-router-dom'
class SessionForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map( (err, idx) => {
                    return <li key={idx}>{err}</li>
                })}
            </ul>
        );
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
            <div className="form-all">
                <section className="form-section-left" >

                <h3>{this.props.formType} to Welp</h3>
                {this.renderErrors()}
                <form onSubmit={this.handleSubmit} className="form-login">
                        <input type="text" placeholder="username" onChange={this.update("username")}/>
                        <input type="password" placeholder="password" onChange={this.update("password")}/>
                        <div>
                            <small>
                                <Link to="/">forgot password?</Link>                    
                            </small>
                        </div>
                        <input type="submit" value="Sign Up" className="form-btn"/>
                </form>
                </section>

                <section className="form-image-right">
                    image from yelp
                </section>
            </div>
        )
    }
}




export default SessionForm