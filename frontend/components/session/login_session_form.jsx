import React from 'react'
import {Link} from 'react-router-dom'
import FormNavbar from './form_navbar';
class SessionForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    renderErrors() {
        return (
            <ul className="form-errors">
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
            <div>
                <FormNavbar />
            <div className="form-all">
                <section className="form-section-left" >

                <h3>{this.props.formType} to Welp</h3>
                <small>
                    New to Welp? <a href="##">Sign up</a>
                </small>
                <div className="form-warning-message">
                    <p> By logging in, you you agree to Yelp’s <a href="#">Terms of Service </a>  
                     and acknowledge <a href="#">Yelp’s Privacy Policy</a>. </p>
                </div>
                <fieldset>
                    <legend>--------OR-----------</legend>
                </fieldset>
                {this.renderErrors()}
                <form onSubmit={this.handleSubmit} className="form-login">
                        <input type="text" placeholder="email" onChange={this.update("email")} className="input-blue"/>
                        <input type="password" placeholder="password" onChange={this.update("password")} className="input-blue"/>
                        <div>
                            <small>
                                <a href="#">Forgot password?</a>                  
                            </small>
                        </div>
                        <input type="submit" value="Log In" className="form-btn"/>
                        <small className="small-swap-text">New to Welp? <a href="/#/signup">Sign Up</a> </small>
                </form>
                </section>

                <section className="form-image-right">
                    image from yelp
                </section>
            </div>
            </div>
        )
    }
}




export default SessionForm